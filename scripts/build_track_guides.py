#!/usr/bin/env python3
"""Build materials/tracks/<track>/index.md from the tables in spec/index.md.

Usage: python3 scripts/build_track_guides.py .
"""
import re, sys, pathlib

root = pathlib.Path(sys.argv[1])
spec = (root / "spec/index.md").read_text()
lines = spec.splitlines()

def tables():
    out, cur = [], []
    for ln in lines:
        if ln.startswith("|"):
            cur.append(ln)
        elif cur:
            out.append(cur); cur = []
    if cur: out.append(cur)
    res = []
    for t in out:
        rows = [[c.strip() for c in r.strip().strip("|").split("|")] for r in t]
        res.append((rows[0], [r for r in rows[2:]]))
    return res

T = tables()
def find(first, contains=None):
    for h, rows in T:
        if h[0] == first and (contains is None or contains in h):
            return h, rows
    raise KeyError(first)

# Each track's instrument file name, from instruments/index.tsv (written by
# scripts/build_instrument.py), so the two can never disagree.
import csv
with open(root / "instruments" / "index.tsv", encoding="utf-8") as _f:
    FILE_NAMES = {row["track"]: row["file"].removesuffix(".tsv") for row in csv.DictReader(_f, delimiter="\t")}
# Each track's Green Belt project scope, as in the M11 module page.
GREEN_BELT = {
    "B3": "Your Green Belt project is a named part of a team project, led by your mentor or a B6 or B7 colleague.",
    "B4-QA": "Your Green Belt project is a named part of a team project, led by your mentor or a B6 or B7 colleague.",
    "B4-TE": "Your Green Belt project is a named part of a team project, led by your mentor or a B6 or B7 colleague.",
    "B5-QA": "Your Green Belt project is a small project of your own, on your team's testing process.",
    "B6-QA": "You lead a Green Belt project on your team's testing process, and coach a lower-band colleague's part.",
    "B6-TE": "Your Green Belt project is a small project of your own, on your team's testing process.",
    "B7-TE": "You lead a Green Belt project on your team's testing process, and coach a lower-band colleague's part.",
    "B7-TM": "You lead a Green Belt project for your area, and sponsor the cohort's other projects with the product owners.",
}
TRACKS = ["B3", "B4-QA", "B4-TE", "B5-QA", "B6-QA", "B6-TE", "B7-TE", "B7-TM"]
tr_h, tr_rows = find("Track", "Reference role level")
fac_h, fac_rows = find("Id", "B3")
sk_h, sk_rows = find("Skill", "Source")
at_h, at_rows = find("Track", "Programme automation target")
time_h, time_rows = find("Track", "Protected time")
lo_h, lo_rows = find("Id", "Outcome")
md_h, md_rows = find("Module", "B3")
cap_h, cap_rows = find("Track", "Capstone")

LEVEL = {"A": "Awareness", "W": "Working", "P": "Practitioner", "E": "Expert", "—": "—"}
DEPTH = {"R": "Read and discuss", "S": "With support", "I": "Independent", "L": "Lead or coach",
         "—": "Not taken", "ILP": "Set by ILP"}
LODEPTH = {"R": "Read and explain", "S": "With support", "I": "Independently", "L": "Leads or coaches others", "—": "Not required"}

TRACK_MODULES = {
    "B3": ["R1 Role foundations", "R2 Health care foundations"],
    "B4-QA": ["R1 Role foundations", "R2 Health care foundations"],
    "B4-TE": ["R1 Role foundations", "R2 Health care foundations"],
    "B5-QA": ["R1 Role foundations", "R2 Health care foundations"],
    "B6-QA": ["R1 Role foundations", "R2 Health care foundations", "L1 Coaching others in automation", "L2 Automation strategy and metrics", "L4 Acceptance test automation"],
    "B6-TE": ["R1 Role foundations", "R2 Health care foundations", "L1 Coaching others in automation", "L3 Frameworks and non-functional testing (read only)"],
    "B7-TE": ["R1 Role foundations", "R2 Health care foundations", "L1 Coaching others in automation", "L2 Automation strategy and metrics", "L3 Frameworks and non-functional testing"],
    "B7-TM": ["R1 Role foundations", "R2 Health care foundations (leads one session)", "L1 Coaching others in automation", "L2 Automation strategy and metrics", "L5 Leading teams through automation adoption"],
}
MODULE_LINKS = {
    "R1": "../r1-role-foundations/index.md", "R2": "../r2-health-care-foundations/index.md",
    "L1": "../l1-coaching/index.md", "L2": "../l2-strategy-metrics/index.md",
    "L3": "../l3-frameworks-nonfunctional/index.md", "L4": "../l4-acceptance-automation/index.md",
    "L5": "../l5-adoption/index.md",
}
WHO = {
    "B3": "Manual testers at Band 3 who hold an associate-level PCF role (Quality assurance test analyst or Test engineer). The reference has no testing role level at Band 3, so this track uses the associate PCF role level for Parts B and C, and the Band 3 outline for Part A.",
    "B4-QA": "Manual testers at Band 4 who hold the PCF role Quality assurance test analyst, at associate level.",
    "B4-TE": "Manual testers at Band 4 who hold the PCF role Test engineer, at associate level.",
    "B5-QA": "Manual testers at Band 5 who hold the PCF role Quality assurance test analyst.",
    "B6-QA": "Manual testers at Band 6 who hold the PCF role Quality assurance test analyst, at senior level.",
    "B6-TE": "Manual testers at Band 6 who hold the PCF role Test engineer.",
    "B7-TE": "Manual testers at Band 7 who hold the PCF role Test engineer, at senior level.",
    "B7-TM": "Manual testers at Band 7 who hold the PCF role Test manager.",
}
BAND = {t: t[1] for t in TRACKS}
MINUTES = {t: ("30" if t[1] in "34" else "60") for t in TRACKS}

def col(h, name): return h.index(name)

for t in TRACKS:
    tr = next(r for r in tr_rows if r[0] == t)
    at = next(r for r in at_rows if r[0] == t)
    time = next(r for r in time_rows if t in [x.strip() for x in r[0].split(",")])
    cap = next(r for r in cap_rows if r[0] == t)
    ci = col(fac_h, t); si = col(sk_h, t); li = col(lo_h, t); mi = col(md_h, t)
    out = []
    out.append(f"# Track guide: {t}\n")
    out.append(f"This is the one-page guide for track **{t}**. It is copied from [spec/index.md](../../../spec/index.md), which is the single source of truth. If this page and the spec disagree, the spec wins.\n")
    out.append("Nobody changes band or role because of this programme. Reaching an automation target above the role's expectation is a strength, not a regrade.\n")
    out.append("## Who it is for\n")
    out.append(WHO[t] + "\n")
    out.append("| Band | Assigned PCF role | Reference role level | Reference points | Band points range |")
    out.append("| --- | --- | --- | --- | --- |")
    out.append(f"| {tr[1]} | {tr[2]} | {tr[3]} | {tr[4]} | {tr[5]} |\n")
    out.append("If your band and assigned role have no reference role level, the mapping rule in the spec places you, and your individual learning plan (ILP) records the decision.\n")
    out.append("## Your capability self-assessment\n")
    out.append(f"At every gate you complete the full instrument for this track: `instruments/{FILE_NAMES[t]}.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).\n")
    out.append(f"### Part A: band outline (Band {BAND[t]})\n")
    bh, brows = find("Band", "Knowledge")
    br = next(r for r in brows if r[0] == BAND[t])
    out.append("| Dimension | Band expectation |")
    out.append("| --- | --- |")
    for i, name in enumerate(["A1 Knowledge", "A2 Autonomy", "A3 Scope", "A4 Leadership", "A5 Accountability"]):
        out.append(f"| {name} | {br[i+1]} |")
    out.append("")
    out.append("### Part A: job evaluation factors (reference levels)\n")
    out.append("| Id | Factor | Reference level |")
    out.append("| --- | --- | --- |")
    for r in fac_rows:
        v = r[ci]
        out.append(f"| {r[0]} | {r[1]} | {'Agreed at Gate 0' if v == 'G0' else v} |")
    out.append("")
    if t == "B3":
        out.append("For B3, every factor level is agreed at Gate 0 from your own job description, with a total within 216 to 270 points.\n")
    out.append("A factor meets when the agreed level is at or above the reference level. One level below is Partly. Two or more below is Not yet. A skill in Part C meets when the gap is 0 or less, is Partly when the gap is 1, and is Not yet when the gap is 2 or more.\n")
    out.append("### Part C: expected skill levels\n")
    out.append("| Skill | Source | Expected level |")
    out.append("| --- | --- | --- |")
    for r in sk_rows:
        if r[si] != "—":
            out.append(f"| {r[0]} | {r[1]} | {LEVEL[r[si]]} |")
    out.append("")
    absent = [r[0] for r in sk_rows if r[si] == "—"]
    if absent:
        out.append("Not in this role level: " + ", ".join(absent) + ".\n")
    out.append("## Automation target\n")
    out.append("| Test engineering expected by role | Programme automation target | In practice |")
    out.append("| --- | --- | --- |")
    out.append(f"| {at[1]} | {at[2]} | {at[3]} |\n")
    out.append("## Time\n")
    out.append("| Protected time | Approximate guided hours | Optional extension |")
    out.append("| --- | --- | --- |")
    out.append(f"| {time[1]} | {time[2]} | {time[3]} |\n")
    out.append("From hour 67.5, about 1.5 hours in every 7.5 hours of learning is real automation on your team's product, at this track's depth.\n")
    out.append("## Learning outcomes, at this track's depth\n")
    out.append("| Id | Outcome | Depth |")
    out.append("| --- | --- | --- |")
    for r in lo_rows:
        if r[0] == "LO13":
            out.append(f"| LO13 | {r[1]} | Overall capability index of at least 90% at Gate 4 |")
        else:
            out.append(f"| {r[0]} | {r[1]} | {LODEPTH[r[li]]} |")
    out.append("")
    out.append("## Module depths\n")
    out.append("| Module | Depth |")
    out.append("| --- | --- |")
    for r in md_rows:
        if r[mi] != "—":
            out.append(f"| {r[0]} | {DEPTH[r[mi]]} |")
    out.append("")
    out.append("## Track modules\n")
    for m in TRACK_MODULES[t]:
        out.append(f"- [{m}]({MODULE_LINKS[m[:2]]})")
    out.append("")
    out.append("## Capstone (M10, hours 142.5 to 180)\n")
    out.append(cap[1] + "\n")
    out.append(f"You present it to the Gate 4 panel for {'10' if t[1] in '34' else '20'} minutes, aimed at a non-technical audience.\n")
    out.append("## Lean Six Sigma Green Belt (M11, hours 180 to 220)\n")
    out.append("After Gate 4, every track takes the same 40-hour Lean Six Sigma Green Belt, with a certification that does not expire. You complete the programme when Gate 4 is met and you hold the certificate with an accepted Green Belt project (E11).\n")
    out.append(GREEN_BELT[t] + " See the [M11 module](../../modules/m11-lean-six-sigma-green-belt/index.md).\n")
    out.append("## Gates and practicals\n")
    out.append(f"Gates are at programme hours 0, 45, 90, 127.5, and 180, and Gate 5 follows about six months after Gate 4. Each Part D practical takes **{MINUTES[t]} minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#{t.lower()}). Thresholds and conditions are in the [gates overview](../../gates/index.md).\n")
    if t[1] in "34":
        out.append("With the optional extension to 280 hours, the gates move to hours 0, 60, 120, 172.5, and 240, and M11 runs in hours 240 to 280.\n")
    out.append("## Mentor\n")
    out.append(f"Your mentor is at least one band above you (Band {int(BAND[t])+1} or higher) and at or above your automation target in test engineering ({at[2].replace('**','')}). One mentor supports up to 3 participants." + (" For B7 tracks, an external mentor may be used if no internal mentor meets these rules." if t.startswith("B7") else "") + "\n")
    out.append("## Related\n")
    out.append("- [Gates overview](../../gates/index.md)")
    out.append("- [Calibration guide](../../gates/calibration-guide.md)")
    out.append("- [Individual learning plan template](../../gates/ilp-template.md)")
    out.append("- [Learning agreement template](../../gates/learning-agreement-template.md)")
    (root / f"materials/tracks/{t.lower()}/index.md").write_text("\n".join(out))
    print("wrote", t)
