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
    INDEX = list(csv.DictReader(_f, delimiter="\t"))
FILE_NAMES = {row["track"]: row["file"].removesuffix(".tsv") for row in INDEX}
ROLE_LEVELS = {row["track"]: row["role_level"] for row in INDEX}
# Each track's Green Belt project scope, as in the Module 17 module page.
GREEN_BELT = {
    "Band 3": "Your Green Belt project is a named part of a team project, led by your mentor or a Band 6 or Band 7 colleague.",
    "Band 4 quality assurance": "Your Green Belt project is a named part of a team project, led by your mentor or a Band 6 or Band 7 colleague.",
    "Band 4 test engineering": "Your Green Belt project is a named part of a team project, led by your mentor or a Band 6 or Band 7 colleague.",
    "Band 5 quality assurance": "Your Green Belt project is a small project of your own, on your team's testing process.",
    "Band 6 quality assurance": "You lead a Green Belt project on your team's testing process, and coach a lower-band colleague's part.",
    "Band 6 test engineering": "Your Green Belt project is a small project of your own, on your team's testing process.",
    "Band 7 test engineering": "You lead a Green Belt project on your team's testing process, and coach a lower-band colleague's part.",
    "Band 7 test management": "You lead a Green Belt project for your area, and sponsor the cohort's other projects with the product owners.",
}
TRACKS = ["Band 3", "Band 4 quality assurance", "Band 4 test engineering", "Band 5 quality assurance", "Band 6 quality assurance", "Band 6 test engineering", "Band 7 test engineering", "Band 7 test management"]
tr_h, tr_rows = find("Track", "Reference role level")
fac_h, fac_rows = find("Id", "Band 3")
sk_h, sk_rows = find("Skill", "Source")
at_h, at_rows = find("Track", "Programme automation target")
time_h, time_rows = find("Track", "Protected time")
lo_h, lo_rows = find("Id", "Outcome")
md_h, md_rows = find("Module", "Band 3")
cap_h, cap_rows = find("Track", "Capstone")

# The spec writes depths in full words; these map the cells that need other words here.
DEPTH = {"Individual learning plan": "Set by the individual learning plan"}
LODEPTH = {"—": "Not required"}

TRACK_MODULES = {
    "Band 3": ["Role foundations", "Health care foundations"],
    "Band 4 quality assurance": ["Role foundations", "Health care foundations"],
    "Band 4 test engineering": ["Role foundations", "Health care foundations"],
    "Band 5 quality assurance": ["Role foundations", "Health care foundations"],
    "Band 6 quality assurance": ["Role foundations", "Health care foundations", "Coaching others in automation", "Automation strategy and metrics", "Acceptance test automation"],
    "Band 6 test engineering": ["Role foundations", "Health care foundations", "Coaching others in automation", "Frameworks and non-functional testing (read only)"],
    "Band 7 test engineering": ["Role foundations", "Health care foundations", "Coaching others in automation", "Automation strategy and metrics", "Frameworks and non-functional testing"],
    "Band 7 test management": ["Role foundations", "Health care foundations (leads one session)", "Coaching others in automation", "Automation strategy and metrics", "Leading teams through automation adoption"],
}
MODULE_LINKS = {
    "Role foundations": "../role-foundations/index.md", "Health care foundations": "../health-care-foundations/index.md",
    "Coaching others in automation": "../coaching-others-in-automation/index.md", "Automation strategy and metrics": "../automation-strategy-and-metrics/index.md",
    "Frameworks and non-functional testing": "../frameworks-and-non-functional-testing/index.md", "Acceptance test automation": "../acceptance-test-automation/index.md",
    "Leading teams through automation adoption": "../leading-automation-adoption/index.md",
}
# "Band 4 quality assurance" -> "4"; "Band 4 quality assurance" -> "band-4-quality-assurance".
BAND = {t: t.split()[1] for t in TRACKS}
SLUG = {t: t.lower().replace(" ", "-") for t in TRACKS}
MINUTES = {t: ("30" if BAND[t] in "34" else "60") for t in TRACKS}

def col(h, name): return h.index(name)


# The checklist at the top of each guide: what the person does, in order,
# built from the spec's module headings, module depths, and gate table.
MODULE_HOURS = {}
for _line in lines:
    _m = re.match(r"#### ((?:Module \d+ )?[^(]+?) \((?:[^)]*?; )?hours ([\d.]+)–([\d.]+)", _line)
    if _m:
        MODULE_HOURS[_m[1].strip()] = (float(_m[2]), float(_m[3]))
MODULE_FOLDERS = {int(p.name.split("-")[1]): p.name for p in (root / "materials/modules").glob("module-*")}
gate_h, gate_rows = find("Gate", "Part D practical")


# Each item's hours, from the spec's hour budget ("Where the ... hours go").
BUDGET = {}
for _line in lines:
    _m = re.match(r"^\| (Module \d+ [^|]+?|Role foundations|Health care foundations)(?:[,:][^|]*)? \| [^|]* \| ([\d.]+) \|$", _line)
    if _m:
        BUDGET[_m[1].strip()] = float(_m[2])


def duration(name):
    """ (14.5 hours)" for an item in the budget, or "" for one without fixed hours."""
    for key, value in BUDGET.items():
        if name.startswith(key) or key.startswith(name):
            return f" ({value:g} hours)"
    return ""


def hours_text(a, b):
    return f"hours {a:g}–{b:g}"


def checklist(t, mi):
    """The ordered "- [ ]" items for track t; mi is its column in the module depth table."""
    events = []  # (sort hour, order, text)
    for r in md_rows:
        name, depth = r[0], r[mi]
        if depth == "—":
            continue
        m = re.match(r"Module (\d+) ", name)
        if m:
            n = int(m[1])
            full = next(k for k in MODULE_HOURS if k.startswith(f"Module {n} "))
            a, b = MODULE_HOURS[full]
            link = f"../../modules/{MODULE_FOLDERS[n]}/index.md"
            events.append((b, 0, f"[{full}]({link}){duration(full)}: Evidence {n} ({DEPTH.get(depth, depth).lower()})."))
    for m in TRACK_MODULES[t]:
        base = m.split(" (")[0]
        a, b = MODULE_HOURS[base]
        events.append((a, 1, f"[{m}]({MODULE_LINKS[base]}){duration(base)}, alongside the core modules."))
    for r in gate_rows:
        gate, hour, part_d = r[0], r[1], r[3]
        if gate == "Gate 0":
            text = f"**Gate 0**, hour {hour}: have your three basics walkthroughs signed off, and your two ISTQB certificates recorded; complete your [self-assessment](#your-capability-self-assessment); rate and calibrate with your line manager; agree your individual learning plan; and sign your learning agreement."
            events.append((float(hour), 0.5, text))
        elif gate.startswith("Gate ") and gate != "Gate 5":
            # Other tracks' variants, in brackets, belong on their own pages.
            task = re.sub(r" \([^)]*\)", "", part_d)
            events.append((float(hour), 2, f"**{gate}**, hour {hour}: complete your [self-assessment](#your-capability-self-assessment), rate and calibrate with your line manager, and do the [Part D practical](../../gates/part-d-practicals.md#{SLUG[t]}): {task[0].lower()}{task[1:]}."))
        elif gate == "Certification":
            events.append((float(hour.split()[-1]), 2, "**Green Belt certification exam**, by hour 308, with your Green Belt project accepted."))
    events.sort(key=lambda e: (e[0], e[1]))
    items = ["Agree your protected time and pace with your stakeholders.", "Meet your mentor for a 30-minute start."]
    items += [e[2] for e in events]
    items.append("**Gate 5**, about six months after Gate 4: complete your self-assessment once more, and demonstrate a recent automated change.")
    return [f"- [ ] {i}" for i in items]

for t in TRACKS:
    tr = next(r for r in tr_rows if r[0] == t)
    at = next(r for r in at_rows if r[0] == t)
    time = next(r for r in time_rows if t in [x.strip() for x in r[0].split(",")])
    cap = next(r for r in cap_rows if r[0] == t)
    ci = col(fac_h, t); si = col(sk_h, t); li = col(lo_h, t); mi = col(md_h, t)
    out = []
    # The full track name: the band, then the reference role level, such as
    # "Track for Band 3 associate quality assurance test analyst".
    out.append(f"# Track for Band {BAND[t]} {ROLE_LEVELS[t][0].lower()}{ROLE_LEVELS[t][1:]}\n")
    out.append("## Checklist\n")
    out.append("Do each item in order. Tick it when it is done.\n")
    out.extend(checklist(t, col(md_h, t)))
    out.append("")
    out.append("## Your capability self-assessment\n")
    out.append(f"At every gate you complete the full instrument for this track: `instruments/{FILE_NAMES[t]}.tsv` (see `instruments/README.md`). It has Part A (21 band dimensions), Part B (UK GDaD PCF role aspects), Part C (skills), and Part D (an automation practical from Gate 1).\n")
    out.append(f"### Part A: band outline (Band {BAND[t]})\n")
    bh, brows = find("Band", "Knowledge")
    br = next(r for r in brows if r[0] == BAND[t])
    out.append("| Dimension | Band expectation |")
    out.append("| --- | --- |")
    for i, name in enumerate(["Part A item 1: Knowledge", "Part A item 2: Autonomy", "Part A item 3: Scope", "Part A item 4: Leadership", "Part A item 5: Accountability"]):
        out.append(f"| {name} | {br[i+1]} |")
    out.append("")
    out.append("### Part A: job evaluation factors (reference levels)\n")
    out.append("| Id | Factor | Reference level |")
    out.append("| --- | --- | --- |")
    for r in fac_rows:
        v = r[ci]
        out.append(f"| {r[0]} | {r[1]} | {v} |")
    out.append("")
    if t == "Band 3":
        out.append("For Band 3, every factor level is agreed at Gate 0 from your own job description, with a total within 216 to 270 points.\n")
    out.append("A factor meets when the agreed level is at or above the reference level. One level below is Partly. Two or more below is Not yet. A skill in Part C meets when the gap is 0 or less, is Partly when the gap is 1, and is Not yet when the gap is 2 or more.\n")
    out.append("### Part C: expected skill levels\n")
    out.append("| Skill | Source | Expected level |")
    out.append("| --- | --- | --- |")
    for r in sk_rows:
        if r[si] != "—":
            out.append(f"| {r[0]} | {r[1]} | {r[si]} |")
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
    out.append("From hour 155.5, about 1.5 hours in every 7.5 hours of learning is real automation on your team's product, at this track's depth.\n")
    out.append("## Learning outcomes, at this track's depth\n")
    out.append("| Id | Outcome | Depth |")
    out.append("| --- | --- | --- |")
    for r in lo_rows:
        if r[0] == "Learning outcome 13":
            out.append(f"| Learning outcome 13 | {r[1]} | Overall capability index of at least 90% at Gate 4 |")
        else:
            out.append(f"| {r[0]} | {r[1]} | {LODEPTH.get(r[li], r[li])} |")
    out.append("")
    out.append("## Module depths\n")
    out.append("| Module | Depth |")
    out.append("| --- | --- |")
    for r in md_rows:
        if r[mi] != "—":
            out.append(f"| {r[0]} | {DEPTH.get(r[mi], r[mi])} |")
    out.append("")
    out.append("## Track modules\n")
    for m in TRACK_MODULES[t]:
        out.append(f"- [{m}]({MODULE_LINKS[m.split(' (')[0]]})")
    out.append("")
    out.append(f"## Capstone (Module 16,{duration('Module 16 Capstone')[:-1]})\n".replace(", (", ", ").replace("(Module 16, ", "(Module 16, "))
    out.append(cap[1] + "\n")
    out.append(f"You present it to the Gate 4 panel for {'10' if BAND[t] in '34' else '20'} minutes, aimed at a non-technical audience.\n")
    out.append("## Lean Six Sigma Green Belt (40 hours)\n")
    out.append("Every track has Lean Six Sigma training. You will earn your Lean Six Sigma Green Belt lifetime certification. You will work with your real team on your Lean Six Sigma Green Belt project. Estimate 40 hours for Lean Six Sigma training.\n")
    out.append(GREEN_BELT[t] + " See the [Module 17 module](../../modules/module-17-lean-six-sigma-green-belt/index.md).\n")
    out.append("## Gates and practicals\n")
    out.append(f"Gates are at programme hours 88, 133, 178, 215.5, and 268, and Gate 5 follows about six months after Gate 4. Each Part D practical takes **{MINUTES[t]} minutes**. The tasks and marking notes for this track are in [Part D practicals](../../gates/part-d-practicals.md#{SLUG[t]}). Thresholds and conditions are in the [gates overview](../../gates/index.md).\n")
    if BAND[t] in "34":
        out.append("With the optional extension to 368 hours, the gates move to hours 88, 148, 208, 260.5, and 328, and Module 17 (40 hours) runs from hour 328.\n")
    out.append("## Mentor\n")
    out.append(f"Your mentor is at least one band above you (Band {int(BAND[t])+1} or higher) and at or above your automation target in test engineering ({at[2].replace('**','')}). One mentor supports up to 3 participants." + (" For Band 7 tracks, an external mentor may be used if no internal mentor meets these rules." if BAND[t] == "7" else "") + "\n")
    out.append("## Related\n")
    out.append("- [Gates overview](../../gates/index.md)")
    out.append("- [Calibration guide](../../gates/calibration-guide.md)")
    out.append("- [Individual learning plan template](../../gates/individual-learning-plan-template.md)")
    out.append("- [Learning agreement template](../../gates/learning-agreement-template.md)")
    (root / f"materials/tracks/{SLUG[t]}/index.md").write_text("\n".join(out))
    print("wrote", t)

# The list of tracks on materials/tracks/index.md, between its markers.
index = root / "materials/tracks/index.md"
text = index.read_text()
start, end = "<!-- track list: written by scripts/build_track_guides.py -->", "<!-- end of track list -->"
items = "\n".join(
    f"- [Track for Band {BAND[t]} {ROLE_LEVELS[t][0].lower()}{ROLE_LEVELS[t][1:]}]({SLUG[t]}/index.md)" for t in TRACKS
)
before, rest = text.split(start, 1)
after = rest.split(end, 1)[1]
index.write_text(f"{before}{start}\n{items}\n{end}{after}")
print("wrote the track list")
