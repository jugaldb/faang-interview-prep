"""Generate docs/companies/*.md from data/questions.json and data/companies/<slug>.json.

data/questions.json   built by scripts/build_question_data.py (merged LeetCode company-tag datasets)
data/companies/*.json researched interview profiles (process, OA, rounds, behavioral, reported questions)

Usage: python3 scripts/build_company_pages.py
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs", "companies")
DATA = os.path.join(ROOT, "data")

CATEGORY_ORDER = ["FAANG", "Big Tech", "High-growth tech", "AI lab", "Finance and quant", "India and Asia"]
DEFAULT_CATEGORY = {
    "google": "FAANG", "meta": "FAANG", "amazon": "FAANG", "apple": "FAANG", "netflix": "FAANG", "microsoft": "FAANG",
    "openai": "AI lab", "anthropic": "AI lab",
    "bloomberg": "Finance and quant", "goldman-sachs": "Finance and quant", "jpmorgan": "Finance and quant",
    "capital-one": "Finance and quant", "morgan-stanley": "Finance and quant", "citadel": "Finance and quant",
    "two-sigma": "Finance and quant", "jane-street": "Finance and quant", "de-shaw": "Finance and quant",
    "hudson-river-trading": "Finance and quant",
    "flipkart": "India and Asia", "phonepe": "India and Asia", "agoda": "India and Asia", "nutanix": "Big Tech",
}
GROWTH = {"stripe", "databricks", "snowflake", "atlassian", "spotify", "doordash", "lyft", "pinterest", "snap", "tiktok",
          "coinbase", "robinhood", "palantir", "roblox", "instacart", "rippling", "cloudflare", "waymo", "anduril", "airbnb"}
BEHAVIORAL_PAGE = {
    "amazon": "amazon-leadership-principles.md", "google": "google-googleyness.md", "meta": "meta.md",
    "microsoft": "microsoft.md", "apple": "apple.md", "netflix": "netflix.md",
}
RECENT_LABEL = {"30d": "30 days", "3m": "3 months", "6m": "6 months", "all": "Older"}
TOP_ROWS_CORE = 50
TOP_ROWS_MORE = 40


def clean(text):
    """No em/en dashes, no table-breaking pipes, no stray newlines."""
    if text is None:
        return ""
    t = str(text)
    t = re.sub(r"(\d)\s*[–—]\s*(\d)", r"\1 to \2", t)
    t = re.sub(r"\s*[–—]\s*", ", ", t)
    t = t.replace("|", "/").replace("\r", " ").replace("\n", " ")
    return re.sub(r"\s{2,}", " ", t).strip()


def md_title(t):
    return clean(t).replace("`", "'").replace("[", "(").replace("]", ")")


def lc_url(slug):
    return f"https://leetcode.com/problems/{slug}/"


def link(name, url):
    return f"[{name}]({url})" if url else ""


def load_profiles():
    out = {}
    d = os.path.join(DATA, "companies")
    if os.path.isdir(d):
        for f in sorted(os.listdir(d)):
            if f.endswith(".json"):
                with open(os.path.join(d, f)) as fh:
                    p = json.load(fh)
                out[p.get("slug") or f[:-5]] = p
    return out


def category_of(slug, profile):
    c = (profile or {}).get("category")
    if c in CATEGORY_ORDER:
        return c
    if slug in DEFAULT_CATEGORY:
        return DEFAULT_CATEGORY[slug]
    return "High-growth tech" if slug in GROWTH else "Big Tech"


def problem_table(rows, limit, show_topics=True):
    lines = ["| # | Problem | Difficulty | Last seen |" + (" Topics |" if show_topics else ""),
             "|---|---|---|---|" + ("---|" if show_topics else "")]
    for i, r in enumerate(rows[:limit], 1):
        name = md_title(r["title"])
        cells = [str(i), f"[{name}]({lc_url(r['slug'])})", r.get("difficulty", ""), RECENT_LABEL.get(r.get("recent"), "")]
        if show_topics:
            cells.append(clean(", ".join(r.get("topics", [])[:4])))
        lines.append("| " + " | ".join(cells) + " |")
    return "\n".join(lines)


def data_section(q, name, core=True):
    out = []
    n6 = q["recent_count"]
    c = q["counts"]
    if n6 == 0 and c.get("all", 0) == 0:
        return f"There is no LeetCode company-tag data for {name} in the open datasets. Use the reported questions below and the general [problem lists](../coding/problem-lists.md).\n"
    out.append(f"Based on **{n6}** distinct problems tagged to {name} in the last 6 months "
               f"({c.get('30d', 0)} in the last 30 days, {c.get('3m', 0)} in the last 3 months, {c.get('all', 0)} all-time) "
               f"across two open datasets of LeetCode company tags. Tags are user-reported, so treat frequency as a signal, not a promise.")
    out.append("")
    if q.get("difficulty_mix"):
        out.append("**Difficulty mix (last 6 months):** " + ", ".join(f"{k} {v}%" for k, v in q["difficulty_mix"].items()))
        out.append("")
    if q.get("topic_mix"):
        out.append("**Most tagged topics (share of problems):** " + ", ".join(f"{clean(t)} {v}%" for t, v in q["topic_mix"][:10]))
        out.append("")
    if n6 and n6 < 15:
        out.append(f"> **Watch out:** {name} has thin LeetCode data. Weight the reported questions and the format notes above more than this list.")
        out.append("")
    out.append("### Most frequent problems")
    out.append("")
    out.append("Ranked by frequency, weighted toward the last 30 days. Classics like Two Sum sit near the top of almost every company's list because users tag them everywhere. Solve those fast. The signature list below is more specific to this company.")
    out.append("")
    out.append(problem_table(q["top"], TOP_ROWS_CORE if core else TOP_ROWS_MORE))
    out.append("")
    if q.get("signature"):
        out.append("### Signature problems")
        out.append("")
        out.append(f"Problems where {name} accounts for a large share of all recent tags across companies. These are the most {name}-specific questions in the data.")
        out.append("")
        out.append(problem_table(q["signature"], 20))
        out.append("")
    return "\n".join(out)


def process_list(steps):
    lines = []
    for i, s in enumerate(steps or [], 1):
        stage = clean(s.get("stage"))
        det = clean(s.get("details"))
        if stage or det:
            lines.append(f"{i}. **{stage}.** {det}" if stage else f"{i}. {det}")
    return "\n".join(lines)


def core_page(slug, q, p):
    name = (p or {}).get("name") or q["name"]
    p = p or {}
    lv = p.get("levels") or {}
    oa = p.get("oa") or {}
    cd = p.get("coding") or {}
    bh = p.get("behavioral") or {}
    L = []
    L.append(f"# {name} interview guide")
    L.append("")
    if p.get("one_liner"):
        L.append(clean(p["one_liner"]) + " Updated October 2026.")
    else:
        L.append(f"Process notes and the most asked LeetCode problems at {name}. Updated October 2026.")
    L.append("")
    rows = [
        ("Category", category_of(slug, p)),
        ("Intern level", clean(lv.get("intern"))),
        ("New grad level", clean(lv.get("new_grad"))),
        ("0 to 3 years", clean(lv.get("early_career"))),
        ("Online assessment", clean(" ".join(x for x in [oa.get("platform"), (": " + oa["format"]) if oa.get("format") else ""] if x))),
        ("Coding rounds", clean(cd.get("rounds"))),
        ("Behavioral", clean(bh.get("framework"))),
        ("Timeline", clean(p.get("timeline"))),
        ("New grad pay", clean(p.get("compensation_note"))),
    ]
    links = ", ".join(x for x in [link("Careers", p.get("careers_url")), link("Students", p.get("students_url")),
                                   link("Official interview prep", p.get("interview_prep_url")),
                                   link("Values", bh.get("values_url"))] if x)
    rows.append(("Official links", links))
    L.append(f"| {name} at a glance | |")
    L.append("|---|---|")
    for k, v in rows:
        if v:
            L.append(f"| **{k}** | {v} |")
    L.append("")

    if p.get("process_new_grad") or p.get("process_intern") or p.get("process_experienced_notes"):
        L.append("## Interview process")
        L.append("")
        if p.get("process_new_grad"):
            L.append("### New grad")
            L.append("")
            L.append(process_list(p["process_new_grad"]))
            L.append("")
        if p.get("process_intern"):
            L.append("### Intern")
            L.append("")
            L.append(process_list(p["process_intern"]))
            L.append("")
        if p.get("process_experienced_notes"):
            L.append("### With 1 to 3 years of experience")
            L.append("")
            L.append(clean(p["process_experienced_notes"]))
            L.append("")

    if any(oa.get(k) for k in ("platform", "format", "notes")):
        L.append("## Online assessment")
        L.append("")
        for k, label in (("platform", "Platform"), ("format", "Format"), ("notes", "Notes")):
            if oa.get(k):
                L.append(f"- **{label}:** {clean(oa[k])}")
        L.append("")
        L.append("Prepare with [How to pass an OA](../online-assessments/strategy.md) and compare formats in [OA formats by company](../online-assessments/company-oa-formats.md).")
        L.append("")

    if any(cd.get(k) for k in ("rounds", "style", "environment", "graded_on")):
        L.append("## Coding rounds")
        L.append("")
        for k, label in (("rounds", "Rounds"), ("style", "Style"), ("environment", "Environment"), ("graded_on", "Graded on")):
            if cd.get(k):
                L.append(f"- **{label}:** {clean(cd[k])}")
        if p.get("focus_topics"):
            L.append(f"- **Reported focus topics:** {clean(', '.join(p['focus_topics']))}")
        L.append("")
        L.append("Run every practice problem through [the 45-minute framework](../coding/interview-framework.md) and the [code quality rubric](../coding/code-quality.md).")
        L.append("")

    L.append("## What they ask (data)")
    L.append("")
    L.append(data_section(q, name, core=True))

    rq = [r for r in (p.get("reported_questions") or []) if r.get("title")]
    if rq:
        L.append("### Reported in 2025 to 2026 interviews")
        L.append("")
        L.append("Questions candidates said they got, each linked to the post where it was reported.")
        L.append("")
        L.append("| Question | Role | When | Source |")
        L.append("|---|---|---|---|")
        for r in rq:
            t = md_title(r["title"])
            t = f"[{t}]({r['url']})" if r.get("url") else t
            src = f"[post]({r['source_url']})" if r.get("source_url") else ""
            L.append(f"| {t} | {clean(r.get('role'))} | {clean(r.get('date'))} | {src} |")
        L.append("")

    if p.get("non_leetcode_formats"):
        L.append("## Beyond LeetCode")
        L.append("")
        L.append(clean(p["non_leetcode_formats"]))
        L.append("")

    if p.get("system_design"):
        L.append("## System design")
        L.append("")
        L.append(clean(p["system_design"]))
        L.append("")
        L.append("Start with [who needs system design](../system-design/index.md), then the [framework](../system-design/framework.md).")
        L.append("")

    if bh.get("framework") or bh.get("what_they_look_for") or bh.get("sample_questions"):
        L.append("## Behavioral")
        L.append("")
        if bh.get("framework"):
            L.append(f"**Framework:** {clean(bh['framework'])}" + (f" ([official page]({bh['values_url']}))" if bh.get("values_url") else ""))
            L.append("")
        if bh.get("what_they_look_for"):
            L.append("**What they look for:**")
            L.append("")
            for x in bh["what_they_look_for"]:
                L.append(f"- {clean(x)}")
            L.append("")
        if bh.get("sample_questions"):
            L.append("**Questions to prepare:**")
            L.append("")
            for x in bh["sample_questions"]:
                L.append(f"- {clean(x)}")
            L.append("")
        page = BEHAVIORAL_PAGE.get(slug, "other-companies.md")
        L.append(f"Build your answers with the [story bank](../behavioral/story-bank.md). Company detail: [behavioral guide](../behavioral/{page}).")
        L.append("")

    if p.get("tips"):
        L.append("## Tips")
        L.append("")
        for t in p["tips"]:
            L.append(f"- {clean(t)}")
        L.append("")

    L.append(f"## 4-week plan for {name}")
    L.append("")
    L.append("Do this after you finish a core list like [Grind 75 or NeetCode 150](../coding/problem-lists.md).")
    L.append("")
    has_sig = bool(q.get("signature"))
    L.append("- [ ] Week 1: Solve problems 1 to 20 from the most frequent list. Time-box each at 30 minutes.")
    L.append("- [ ] Week 2: Solve problems 21 to 40. Re-solve any you failed in week 1 without looking.")
    L.append("- [ ] Week 3: " + ("Solve the signature problems" if has_sig else "Solve problems 41 to 50") + (" and every reported question above." if rq else ".") + " Do 2 timed mock interviews.")
    L.append(f"- [ ] Week 4: Write 8 stories for the {clean(bh.get('framework')) or 'behavioral'} round. Do 2 full mock loops. Review the online assessment and system design notes above.")
    L.append("")

    srcs = [s for s in (p.get("sources") or []) if isinstance(s, str) and s.startswith("http")]
    L.append("## Sources")
    L.append("")
    L.append("- Question data: [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and "
             "[snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged and ranked by "
             "[scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).")
    for s in srcs[:25]:
        L.append(f"- <{s}>")
    if p.get("confidence_notes"):
        L.append("")
        L.append(f"> **Watch out:** {clean(p['confidence_notes'])}")
    L.append("")
    L.append("Next: [All companies](index.md)")
    L.append("")
    return "\n".join(L)


def more_page(slug, q):
    name = q["name"]
    L = [f"# {name} interview questions", "",
         f"The most frequent LeetCode problems tagged to {name}. This is a data-only page. For process and behavioral prep, use the [coding guide](../../coding/index.md) and [behavioral guide](../../behavioral/index.md).", ""]
    body = data_section(q, name, core=False).replace("](../", "](../../")
    L.append(body)
    L.append("## Sources")
    L.append("")
    L.append("- [liquidslr/leetcode-company-wise-problems](https://github.com/liquidslr/leetcode-company-wise-problems) and "
             "[snehasishroy/leetcode-companywise-interview-questions](https://github.com/snehasishroy/leetcode-companywise-interview-questions), merged by "
             "[scripts/build_question_data.py](https://github.com/jugaldb/faang-interview-prep/blob/main/scripts/build_question_data.py).")
    L.append("")
    L.append("Next: [More companies](index.md)")
    L.append("")
    return "\n".join(L)


def main():
    with open(os.path.join(DATA, "questions.json")) as f:
        qd = json.load(f)["companies"]
    profiles = load_profiles()
    os.makedirs(os.path.join(DOCS, "more"), exist_ok=True)

    core = {s: q for s, q in qd.items() if q["core"]}
    more = {s: q for s, q in qd.items() if not q["core"]}

    by_cat = {c: [] for c in CATEGORY_ORDER}
    for slug, q in core.items():
        p = profiles.get(slug)
        with open(os.path.join(DOCS, f"{slug}.md"), "w") as f:
            f.write(core_page(slug, q, p))
        by_cat[category_of(slug, p)].append(slug)

    for slug, q in more.items():
        with open(os.path.join(DOCS, "more", f"{slug}.md"), "w") as f:
            f.write(more_page(slug, q))

    # companies/index.md
    L = ["# Company interview guides", "",
         f"{len(core)} full guides (process, online assessment, rounds, behavioral, reported questions, most asked problems) and "
         f"{len(more)} more question lists. Pick your target companies, then follow the 4-week plan at the bottom of each guide.", "",
         "## How to use a company page", "",
         "1. Finish a core list first: [problem lists](../coding/problem-lists.md). Company lists are the last 20% of prep, not the first 80%.",
         "2. Read the process and online assessment sections so nothing surprises you.",
         "3. Solve the most frequent problems top to bottom, then the signature problems.",
         "4. Prepare behavioral stories for that company's framework.",
         "5. Check the reported questions a week before your interview.", ""]
    for cat in CATEGORY_ORDER:
        slugs = sorted(by_cat[cat], key=lambda s: core[s]["name"].lower())
        if not slugs:
            continue
        L.append(f"## {cat}")
        L.append("")
        L.append("| Company | New grad level | Online assessment | Problems tagged (6 months) |")
        L.append("|---|---|---|---|")
        for s in slugs:
            p = profiles.get(s) or {}
            lv = clean((p.get("levels") or {}).get("new_grad"))
            oa = clean((p.get("oa") or {}).get("platform"))
            L.append(f"| [{core[s]['name']}]({s}.md) | {lv} | {oa} | {core[s]['recent_count']} |")
        L.append("")
    L.append("## More companies")
    L.append("")
    L.append("Question-only pages: [all {} companies](more/index.md).".format(len(more)))
    L.append("")
    L.append("Next: [Start your roadmap](../roadmap.md)")
    L.append("")
    with open(os.path.join(DOCS, "index.md"), "w") as f:
        f.write("\n".join(L))

    M = ["# More company question lists", "",
         "Data-only pages for companies without a full guide. Sorted by how many problems were tagged in the last 6 months.", "",
         "| Company | Problems tagged (6 months) | All-time |", "|---|---|---|"]
    for s, q in sorted(more.items(), key=lambda kv: (-kv[1]["recent_count"], kv[1]["name"].lower())):
        M.append(f"| [{q['name']}]({s}.md) | {q['recent_count']} | {q['counts'].get('all', 0)} |")
    M.append("")
    M.append("Next: [Full company guides](../index.md)")
    M.append("")
    with open(os.path.join(DOCS, "more", "index.md"), "w") as f:
        f.write("\n".join(M))

    # mkdocs.yml nav block
    yml = os.path.join(ROOT, "mkdocs.yml")
    with open(yml) as f:
        text = f.read()
    nav = ["  # BEGIN companies (generated by scripts/build_company_pages.py)", "  - Companies:", "      - companies/index.md"]
    for cat in CATEGORY_ORDER:
        slugs = sorted(by_cat[cat], key=lambda s: core[s]["name"].lower())
        if slugs:
            nav.append(f"      - {cat}:")
            for s in slugs:
                nav.append(f"          - \"{core[s]['name']}\": companies/{s}.md")
    nav.append("      - More companies: companies/more/index.md")
    nav.append("  # END companies")
    text = re.sub(r"  # BEGIN companies.*?  # END companies", "\n".join(nav), text, flags=re.S)
    with open(yml, "w") as f:
        f.write(text)
    print(f"wrote {len(core)} guides, {len(more)} question pages, profiles found for {sum(1 for s in core if s in profiles)}")


if __name__ == "__main__":
    main()
