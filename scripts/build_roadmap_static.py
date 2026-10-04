#!/usr/bin/env python3
"""Regenerate the static checklist in docs/roadmap.md from docs/assets/js/roadmap-data.js.

The interactive roadmap (roadmap.js) reads the same data file, so run this after every data edit:
    python3 scripts/build_roadmap_static.py
Only the block between the roadmap-static markers in docs/roadmap.md is replaced.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "docs", "assets", "js", "roadmap-data.js")
PAGE = os.path.join(ROOT, "docs", "roadmap.md")
START = "<!-- roadmap-static:start -->"
END = "<!-- roadmap-static:end -->"
SITE = "https://jugaldb.github.io/faang-interview-prep/roadmap/"

# Folders whose landing page is <folder>/index.md
SECTION_DIRS = {"jobs", "internships", "resume", "linkedin", "outreach", "online-assessments", "coding",
                "companies", "system-design", "behavioral", "negotiation", "companies/more"}

TRACK_NOTE = {
    ("intern",): "Intern only.",
    ("newgrad",): "New grad only.",
    ("experienced",): "Experienced only.",
    ("intern", "newgrad"): "Intern and new grad.",
    ("newgrad", "experienced"): "New grad and experienced.",
    ("intern", "experienced"): "Intern and experienced.",
}

# Static stand-ins for the per-company tasks the app adds from the company picker.
COMPANY_STATIC = {
    "process": ("Read the process for each target company",
                "Online assessment, rounds and timeline. Note anything that differs from this plan.",
                [("Company guides", "companies/")]),
    "top20": ("Solve the top 20 problems for each target company",
              "Work down the most frequent problems list on each guide. Give each problem 20 to 30 minutes before you open a solution.",
              [("Company guides", "companies/")]),
    "stories": ("Prepare stories for each target company's values",
                "Map your story bank to what each company looks for. Rehearse each answer out loud.",
                [("Amazon Leadership Principles", "behavioral/amazon-leadership-principles/"),
                 ("Google", "behavioral/google-googleyness/"), ("Meta", "behavioral/meta/"),
                 ("Microsoft", "behavioral/microsoft/"), ("Apple", "behavioral/apple/"),
                 ("Netflix", "behavioral/netflix/"), ("Other companies", "behavioral/other-companies/")]),
}


def load_data():
    src = open(DATA, encoding="utf-8").read()
    m = re.search(r"window\.ROADMAP_DATA\s*=\s*(\{.*\})\s*;?\s*$", src, re.S)
    if not m:
        sys.exit("could not find window.ROADMAP_DATA in " + DATA)
    return json.loads(m.group(1))


def md_href(href):
    if re.match(r"^https?://", href):
        return href
    path, _, anchor = href.partition("#")
    path = path.strip("/")
    if not path:
        out = "index.md"
    elif path in SECTION_DIRS:
        out = path + "/index.md"
    else:
        out = path + ".md"
    return out + ("#" + anchor if anchor else "")


def hours(n):
    return ("%g" % n) + " h"


def line(title, detail, links, hrs=None, tracks=None):
    title = title.rstrip(".")
    parts = ["- [ ] **%s.**" % title, detail.strip()]
    if links:
        parts.append(", ".join("[%s](%s)" % (label, md_href(href)) for label, href in links) + ".")
    tail = []
    if hrs is not None:
        tail.append(hours(hrs) + ".")
    if tracks:
        note = TRACK_NOTE.get(tuple(tracks))
        if note:
            tail.append("_" + note + "_")
    if tail:
        parts.append(" ".join(tail))
    return " ".join(p for p in parts if p)


def build(data):
    all_tracks = [t["id"] for t in data["tracks"]]
    templates = data.get("companyTasks", [])
    out = [
        "Checklist version for GitHub and readers without JavaScript. The [site version](%s) adds "
        "timelines, company tasks, filters and saved progress." % SITE,
        "",
    ]
    for p in data["phases"]:
        out.append("## " + p["title"])
        out.append("")
        out.append(p["summary"])
        out.append("")
        tasks = [t for t in data["tasks"] if t["phase"] == p["id"]]
        placed = set()
        for t in tasks:
            tracks = None if sorted(t["tracks"]) == sorted(all_tracks) else [x for x in all_tracks if x in t["tracks"]]
            out.append(line(t["title"], t["detail"], [(l["label"], l["href"]) for l in t["links"]], t["hours"], tracks))
            for tpl in templates:
                if tpl["phase"] == p["id"] and tpl.get("after") == t["id"]:
                    title, detail, links = COMPANY_STATIC[tpl["key"]]
                    out.append(line(title, detail, links, None, None))
                    placed.add(tpl["key"])
        for tpl in templates:
            if tpl["phase"] == p["id"] and tpl["key"] not in placed:
                title, detail, links = COMPANY_STATIC[tpl["key"]]
                out.append(line(title, detail, links, None, None))
        out.append("")
    return "\n".join(out).rstrip() + "\n"


def main():
    data = load_data()
    page = open(PAGE, encoding="utf-8").read()
    if START not in page or END not in page:
        sys.exit("markers not found in " + PAGE)
    head, rest = page.split(START, 1)
    _, tail = rest.split(END, 1)
    new = head + START + "\n\n" + build(data) + "\n" + END + tail
    if new != page:
        open(PAGE, "w", encoding="utf-8").write(new)
        print("updated", os.path.relpath(PAGE, ROOT))
    else:
        print("no change")


if __name__ == "__main__":
    main()
