"""Merge two open company-wise LeetCode datasets into data/questions.json.

Sources (both scraped from LeetCode Premium company tags, credited on every page):
  liquidslr/leetcode-company-wise-problems           (folders like "Google/3. Six Months.csv")
  snehasishroy/leetcode-companywise-interview-questions (folders like "google/six-months.csv")

Usage:
  python3 scripts/build_question_data.py --lcw path/to/liquidslr-clone --sr path/to/snehasishroy-clone
"""
import argparse
import csv
import json
import os
import re
from collections import Counter, defaultdict

WINDOWS = ["30d", "3m", "6m", "all"]
WEIGHTS = {"30d": 4.0, "3m": 3.0, "6m": 2.0, "all": 1.0}
LCW_FILES = {"30d": "1. Thirty Days.csv", "3m": "2. Three Months.csv", "6m": "3. Six Months.csv", "all": "5. All.csv"}
SR_FILES = {"30d": "thirty-days.csv", "3m": "three-months.csv", "6m": "six-months.csv", "all": "all.csv"}

# Core companies get full guides. Values: (display name, [dataset folder names in either source]).
CORE = {
    "google": ("Google", ["Google", "google"]),
    "meta": ("Meta", ["Meta", "meta"]),
    "amazon": ("Amazon", ["Amazon", "amazon"]),
    "apple": ("Apple", ["Apple", "apple"]),
    "netflix": ("Netflix", ["Netflix", "netflix"]),
    "microsoft": ("Microsoft", ["Microsoft", "microsoft"]),
    "nvidia": ("Nvidia", ["Nvidia", "nvidia"]),
    "uber": ("Uber", ["Uber", "uber"]),
    "linkedin": ("LinkedIn", ["LinkedIn", "linkedin"]),
    "salesforce": ("Salesforce", ["Salesforce", "salesforce"]),
    "adobe": ("Adobe", ["Adobe", "adobe"]),
    "oracle": ("Oracle", ["Oracle", "oracle"]),
    "airbnb": ("Airbnb", ["Airbnb", "airbnb"]),
    "intuit": ("Intuit", ["Intuit", "intuit"]),
    "paypal": ("PayPal", ["PayPal", "paypal"]),
    "visa": ("Visa", ["Visa", "visa"]),
    "ibm": ("IBM", ["IBM", "ibm"]),
    "cisco": ("Cisco", ["Cisco", "cisco"]),
    "qualcomm": ("Qualcomm", ["Qualcomm", "qualcomm"]),
    "tesla": ("Tesla", ["Tesla", "tesla"]),
    "walmart": ("Walmart Global Tech", ["Walmart Labs", "walmart-labs"]),
    "ebay": ("eBay", ["eBay", "ebay"]),
    "expedia": ("Expedia", ["Expedia", "expedia"]),
    "servicenow": ("ServiceNow", ["ServiceNow", "servicenow"]),
    "palo-alto-networks": ("Palo Alto Networks", ["Palo Alto Networks", "palo-alto-networks"]),
    "stripe": ("Stripe", ["Stripe", "stripe"]),
    "databricks": ("Databricks", ["Databricks", "databricks"]),
    "snowflake": ("Snowflake", ["Snowflake", "snowflake"]),
    "atlassian": ("Atlassian", ["Atlassian", "atlassian"]),
    "spotify": ("Spotify", ["Spotify", "spotify"]),
    "doordash": ("DoorDash", ["DoorDash", "doordash"]),
    "lyft": ("Lyft", ["Lyft", "lyft"]),
    "pinterest": ("Pinterest", ["Pinterest", "pinterest"]),
    "snap": ("Snap", ["Snap", "snapchat"]),
    "tiktok": ("TikTok (ByteDance)", ["TikTok", "tiktok", "ByteDance", "bytedance"]),
    "coinbase": ("Coinbase", ["Coinbase", "coinbase"]),
    "robinhood": ("Robinhood", ["Robinhood", "robinhood"]),
    "palantir": ("Palantir", ["Palantir Technologies", "palantir"]),
    "roblox": ("Roblox", ["Roblox", "roblox"]),
    "instacart": ("Instacart", ["Instacart", "instacart"]),
    "rippling": ("Rippling", ["Rippling", "rippling"]),
    "cloudflare": ("Cloudflare", ["Cloudflare", "cloudflare"]),
    "waymo": ("Waymo", ["Waymo", "waymo"]),
    "anduril": ("Anduril", ["Anduril", "anduril"]),
    "openai": ("OpenAI", ["OpenAI", "openai"]),
    "anthropic": ("Anthropic", ["Anthropic", "anthropic"]),
    "bloomberg": ("Bloomberg", ["Bloomberg", "bloomberg"]),
    "goldman-sachs": ("Goldman Sachs", ["Goldman Sachs", "goldman-sachs"]),
    "jpmorgan": ("JPMorgan Chase", ["J.P. Morgan", "jpmorgan"]),
    "capital-one": ("Capital One", ["Capital One", "capital-one"]),
    "morgan-stanley": ("Morgan Stanley", ["Morgan Stanley", "morgan-stanley"]),
    "citadel": ("Citadel", ["Citadel", "citadel"]),
    "two-sigma": ("Two Sigma", ["Two Sigma", "two-sigma"]),
    "jane-street": ("Jane Street", ["Jane Street", "jane-street"]),
    "de-shaw": ("D. E. Shaw", ["DE Shaw", "de-shaw"]),
    "hudson-river-trading": ("Hudson River Trading", ["Hudson River Trading", "hudson-river-trading"]),
    "flipkart": ("Flipkart", ["Flipkart", "flipkart"]),
    "phonepe": ("PhonePe", ["PhonePe", "phonepe"]),
    "agoda": ("Agoda", ["Agoda", "agoda"]),
    "nutanix": ("Nutanix", ["Nutanix", "nutanix"]),
}

MORE_LIMIT = 120          # extra companies with question-only pages
MORE_MIN_6M = 3           # qualify with 3+ problems in the last 6 months...
MORE_MIN_ALL = 15         # ...or 15+ problems all-time
ALIASES = {"olacabs": "ola", "x": "twitter"}  # duplicate folders for the same company
NON_DSA_TOPICS = {"Database", "Shell"}  # SQL / shell problems are not coding-round material
UBIQ_MIN_RECENT = 40
SIGNATURE_SHARE = 0.35  # company holds 35%+ of all recent frequency for this problem
TOP_CORE = 75
TOP_MORE = 40


def norm_key(name):
    return re.sub(r"[^a-z0-9]", "", name.lower())


def slug_from_url(url):
    m = re.search(r"leetcode\.com/problems/([^/?#]+)", url or "")
    return m.group(1).strip().lower() if m else None


def pct(v):
    try:
        return float(str(v).strip().rstrip("%"))
    except ValueError:
        return 0.0


def read_lcw(path):
    rows = []
    if not os.path.exists(path):
        return rows
    with open(path, newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            s = slug_from_url(r.get("Link", ""))
            if s:
                rows.append({"slug": s, "title": r.get("Title", "").strip(), "difficulty": r.get("Difficulty", "").strip().title(),
                             "freq": pct(r.get("Frequency")), "topics": [t.strip() for t in (r.get("Topics") or "").split(",") if t.strip()]})
    return rows


def read_sr(path):
    rows = []
    if not os.path.exists(path):
        return rows
    with open(path, newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            s = slug_from_url(r.get("URL", ""))
            if s:
                rows.append({"slug": s, "title": r.get("Title", "").strip(), "difficulty": r.get("Difficulty", "").strip().title(),
                             "freq": pct(r.get("Frequency %")), "topics": []})
    return rows


def load_company(lcw_root, sr_root, folders):
    """Merge every folder (from either source) into {slug: {...windows}}."""
    probs = {}
    for folder in folders:
        for w in WINDOWS:
            rows = read_lcw(os.path.join(lcw_root, folder, LCW_FILES[w])) + read_sr(os.path.join(sr_root, folder, SR_FILES[w]))
            for r in rows:
                p = probs.setdefault(r["slug"], {"slug": r["slug"], "title": r["title"], "difficulty": r["difficulty"], "topics": [], "freq": {}})
                p["freq"][w] = max(p["freq"].get(w, 0.0), r["freq"])
                if r["topics"] and not p["topics"]:
                    p["topics"] = r["topics"]
    return probs


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lcw", required=True)
    ap.add_argument("--sr", required=True)
    ap.add_argument("--out", default="data/questions.json")
    a = ap.parse_args()

    # Global topic lookup (liquidslr has topics; snehasishroy does not). Problems that never carry a
    # topic are LeetCode's JavaScript / pandas study-plan items, which are not interview material.
    topic_of, untagged = {}, set()
    for d in os.listdir(a.lcw):
        p = os.path.join(a.lcw, d, LCW_FILES["all"])
        for r in read_lcw(p):
            if r["topics"]:
                topic_of.setdefault(r["slug"], r["topics"])
            else:
                untagged.add(r["slug"])
    excluded = {s for s in untagged if s not in topic_of}
    excluded |= {s for s, ts in topic_of.items() if NON_DSA_TOPICS & set(ts)}

    # Every company folder in either source, grouped by normalized name.
    groups = defaultdict(list)
    display = {}
    for root in (a.lcw, a.sr):
        for d in os.listdir(root):
            if os.path.isdir(os.path.join(root, d)) and not d.startswith("."):
                k = ALIASES.get(norm_key(d), norm_key(d))
                groups[k].append(d)
                if k not in display or (root == a.lcw and norm_key(d) == k):
                    display[k] = d if root == a.lcw else d.replace("-", " ").title()

    core_keys = {norm_key(f) for _, (_, fs) in CORE.items() for f in fs}

    def load(folders):
        probs = load_company(a.lcw, a.sr, folders)
        return {k: v for k, v in probs.items() if k not in excluded}

    companies = {}
    for slug, (name, folders) in CORE.items():
        companies[slug] = {"name": name, "core": True, "folders": folders, "probs": load(folders)}

    candidates = []
    for k, folders in groups.items():
        if k in core_keys:
            continue
        probs = load(sorted(set(folders)))
        n6 = sum(1 for p in probs.values() if "6m" in p["freq"] or "3m" in p["freq"] or "30d" in p["freq"])
        if n6 >= MORE_MIN_6M or len(probs) >= MORE_MIN_ALL:
            candidates.append((n6, len(probs), k, display[k], sorted(set(folders)), probs))
    candidates.sort(key=lambda c: (-c[0], -c[1], c[2]))
    for n6, nall, k, name, folders, probs in candidates[:MORE_LIMIT]:
        name = {"x": "Twitter (X)", "twitter": "Twitter (X)"}.get(name.lower(), name)
        if name == name.lower():
            name = name.upper() if len(name) <= 4 else name.title()
        slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
        companies[slug] = {"name": name, "core": False, "folders": folders, "probs": probs}

    # Ubiquity: share of high-volume companies (40+ recent problems) whose recent list has this problem.
    # Problems tagged almost everywhere (Two Sum...) say nothing about a specific company.
    recent_sets = []
    for c in companies.values():
        s = {p["slug"] for p in c["probs"].values() if any(w in p["freq"] for w in ("30d", "3m", "6m"))}
        if len(s) >= UBIQ_MIN_RECENT:
            recent_sets.append(s)
    seen = Counter(slug for s in recent_sets for slug in s)
    ubiq = {slug: n / len(recent_sets) for slug, n in seen.items()}

    out = {"generated_from": {
        "liquidslr": "https://github.com/liquidslr/leetcode-company-wise-problems",
        "snehasishroy": "https://github.com/snehasishroy/leetcode-companywise-interview-questions"},
        "companies_with_recent_lists": len(recent_sets), "companies": {}}

    rows_by_company = {}
    total_sig = Counter()
    for slug, c in companies.items():
        rows = []
        for p in c["probs"].values():
            score = sum(WEIGHTS[w] * p["freq"].get(w, 0.0) for w in WINDOWS)
            recent = next((w for w in WINDOWS if w in p["freq"]), "all")
            topics = p["topics"] or topic_of.get(p["slug"], [])
            # Signature score: recent frequency, damped for problems with little all-time history
            # (filters out one-off tags on brand-new contest problems).
            recent_score = sum(WEIGHTS[w] * p["freq"].get(w, 0.0) for w in ("30d", "3m", "6m"))
            sig = recent_score * p["freq"].get("all", 0.0) / 100.0
            rows.append({"slug": p["slug"], "title": p["title"], "difficulty": p["difficulty"], "topics": topics,
                         "recent": recent, "score": round(score, 1), "sig": round(sig, 1), "ubiq": round(ubiq.get(p["slug"], 0.0), 3)})
        rows.sort(key=lambda r: (-r["score"], r["title"]))
        rows_by_company[slug] = rows
        for r in rows:
            total_sig[r["slug"]] += r["sig"]

    for slug, c in companies.items():
        rows = rows_by_company[slug]
        recent_rows = [r for r in rows if r["recent"] != "all"]

        topic_w = Counter()
        diff = Counter()
        for r in recent_rows:
            diff[r["difficulty"]] += 1
            for t in r["topics"]:
                topic_w[t] += 1
        n = max(1, len(recent_rows))
        signature = sorted((r for r in recent_rows if r["sig"] > 0 and r["sig"] >= SIGNATURE_SHARE * total_sig[r["slug"]]),
                           key=lambda r: (-r["sig"], r["title"]))[:20]

        top = TOP_CORE if c["core"] else TOP_MORE
        out["companies"][slug] = {
            "name": c["name"], "core": c["core"], "folders": c["folders"],
            "counts": {w: sum(1 for p in c["probs"].values() if w in p["freq"]) for w in WINDOWS},
            "recent_count": len(recent_rows),
            "difficulty_mix": {k: round(100 * v / n) for k, v in diff.most_common()},
            "topic_mix": [[t, round(100 * v / n)] for t, v in topic_w.most_common(12)],
            "top": (recent_rows or rows)[:top],
            "signature": signature,
        }

    os.makedirs(os.path.dirname(a.out), exist_ok=True)
    with open(a.out, "w") as f:
        json.dump(out, f, indent=1, sort_keys=False)
    core = sum(1 for c in out["companies"].values() if c["core"])
    print(f"wrote {a.out}: {core} core + {len(out['companies']) - core} more companies; ubiquity base {len(recent_sets)}")


if __name__ == "__main__":
    main()
