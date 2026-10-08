#!/usr/bin/env python3
"""Build the capability self-assessment instrument for every track.

Reads the roles-skills reference (reference.json) and writes one TSV per track
to instruments/, named by band and reference role level in words (Band 6 quality assurance is
band-6-senior-quality-assurance-test-analyst.tsv), plus
instruments/index.tsv. The instrument is defined in
spec/index.md, section "Capability self-assessment":

- Part A: 5 band outline dimensions (Part A items 1 to 5) and 16 job evaluation factors (Part A items 6 to 21)
- Part B: UK GDaD PCF role statements (Part B group 1), UK GDaD PCF role level
  statements (Part B group 2), and reference responsibilities (Part B group 3)
- Part C: every skill in the reference role level

Usage:
    python3 scripts/build_instrument.py [--reference PATH] [--out DIR]
"""

import argparse
import csv
import json
import os
import re
import sys

DEFAULT_REFERENCE = os.path.expanduser(
    "~/git/agenda-for-change/roles-skills.github.io/content/reference.json"
)

# Tracks, from spec/index.md, section "Tracks".
# (track id, band, role id, reference role level title)
TRACKS = [
    ("Band 3", "3", "quality-assurance-test-analyst", "Associate quality assurance test analyst"),
    ("Band 4 quality assurance", "4", "quality-assurance-test-analyst", "Associate quality assurance test analyst"),
    ("Band 4 test engineering", "4", "test-engineer", "Associate test engineer"),
    ("Band 5 quality assurance", "5", "quality-assurance-test-analyst", "Quality assurance test analyst"),
    ("Band 6 quality assurance", "6", "quality-assurance-test-analyst", "Senior quality assurance test analyst"),
    ("Band 6 test engineering", "6", "test-engineer", "Test engineer"),
    ("Band 7 test engineering", "7", "test-engineer", "Senior test engineer"),
    ("Band 7 test management", "7", "test-manager", "Test manager"),
]

def file_name(band_id, level_title):
    """A track's file name, in words: the band, then the reference role level,
    lower case, with dashes. Band 6 quality assurance is band-6-senior-quality-assurance-test-analyst."""
    words = re.sub(r"[^a-z0-9]+", "-", level_title.lower()).strip("-")
    return f"band-{band_id}-{words}"


# Tracks whose job evaluation factor levels are agreed at Gate 0, because the
# reference has no role level at their band (spec, "Tracks", Band 3).
AGREED_AT_GATE_0 = {"Band 3"}

# Programme automation target for test engineering (spec, "Automation targets").
AUTOMATION_TARGET = {
    "Band 3": "awareness",
    "Band 4 quality assurance": "awareness",
    "Band 4 test engineering": "awareness",
    "Band 5 quality assurance": "working",
    "Band 6 quality assurance": "working",
    "Band 6 test engineering": "working",
    "Band 7 test engineering": "practitioner",
    "Band 7 test management": "working",
}

OUTLINE = [
    ("Part A item 1", "knowledge", "Knowledge"),
    ("Part A item 2", "autonomy", "Autonomy"),
    ("Part A item 3", "scope", "Scope"),
    ("Part A item 4", "leadership", "Leadership"),
    ("Part A item 5", "accountability", "Accountability"),
]

LEVELS = ["awareness", "working", "practitioner", "expert"]
LEVEL_NUMBER = {name: i + 1 for i, name in enumerate(LEVELS)}

COLUMNS = [
    "track",
    "band",
    "role",
    "role_level",
    "part",
    "item_id",
    "dimension",
    "source",
    "statement",
    "expected_level",
    "expected_level_number",
    "expected_level_description",
    "next_level_description",
    "rating_scale",
    "self_rating",
    "manager_rating",
    "agreed_rating",
    "status",
    "evidence",
    "ilp_action",
]

SCALE_STATUS = "Not yet | Partly | Meets"
SCALE_FACTOR = "Factor level 1-8 (see expected_level_description)"
SCALE_SKILL = "0 Not yet | 1 Awareness | 2 Working | 3 Practitioner | 4 Expert"


def bullets(text):
    """Return the '- ' bullet lines of a UK GDaD PCF description."""
    return [m.strip() for m in re.findall(r"^- (.+)$", text or "", re.MULTILINE)]


def factor_levels_text(factor):
    return " | ".join(
        f"{n}: {summary}" for n, summary in sorted(factor["levels"].items(), key=lambda kv: int(kv[0]))
    )


def build_rows(ref, track, band_id, role_id, level_title):
    bands = {b["id"]: b for b in ref["bands"]}
    roles = {r["id"]: r for r in ref["roles"]}
    skills = {s["id"]: s for s in ref["skills"]}
    role = roles[role_id]
    matches = [lv for lv in role["levels"] if lv["title"] == level_title]
    if not matches:
        sys.exit(f"error: {track}: no role level '{level_title}' in role '{role_id}'")
    level = matches[0]
    band = bands[band_id]

    base = {
        "track": track,
        "band": band_id,
        "role": role["title"],
        "role_level": level_title,
    }
    rows = []

    def add(**kw):
        row = {c: "" for c in COLUMNS}
        row.update(base)
        row.update(kw)
        rows.append(row)

    # Part A: band outline dimensions.
    for item_id, key, name in OUTLINE:
        add(
            part="A",
            item_id=item_id,
            dimension=f"Band outline: {name}",
            source="roles-skills bands.yaml",
            statement=band[key],
            expected_level="Meets",
            expected_level_description=f"Band {band_id}: {band[key]}",
            rating_scale=SCALE_STATUS,
        )

    # Part A: job evaluation factors.
    for i, factor in enumerate(ref["factors"]):
        if track in AGREED_AT_GATE_0:
            expected = ""
            note = (
                f"Agree at Gate 0 from the job description; total within "
                f"{band['points']['min']}-{band['points']['max']} points. "
            )
        else:
            expected = str(level["jobEvaluation"][factor["id"]])
            note = f"Reference level {expected}: {factor['levels'][expected]} "
        add(
            part="A",
            item_id=f"Part A item {6 + i}",
            dimension=f"Job evaluation factor: {factor['name']}",
            source="roles-skills job-evaluation.yaml",
            statement=factor["description"],
            expected_level=expected,
            expected_level_number=expected,
            expected_level_description=note + "Levels: " + factor_levels_text(factor),
            rating_scale=SCALE_FACTOR,
        )

    # Part B: UK GDaD PCF role aspects.
    pcf_role = role.get("pcfRole") or {}
    for n, text in enumerate(bullets(pcf_role.get("description", "")), 1):
        add(
            part="B",
            item_id=f"Part B item 1.{n}",
            dimension=f"UK GDaD PCF role: {pcf_role.get('name', role['title'])}",
            source="UK GDaD PCF role description",
            statement=text,
            expected_level="Meets",
            rating_scale=SCALE_STATUS,
        )
    for n, text in enumerate(bullets(level.get("pcfLevelDescription", "")), 1):
        add(
            part="B",
            item_id=f"Part B item 2.{n}",
            dimension=f"UK GDaD PCF role level: {level.get('pcfLevel', level_title)}",
            source="UK GDaD PCF role level description",
            statement=text,
            expected_level="Meets",
            rating_scale=SCALE_STATUS,
        )
    for n, text in enumerate(level.get("responsibilities", []), 1):
        add(
            part="B",
            item_id=f"Part B item 3.{n}",
            dimension=f"Reference responsibility: {level_title}",
            source="roles-skills role level",
            statement=text,
            expected_level="Meets",
            rating_scale=SCALE_STATUS,
        )

    # Part C: skills.
    for n, entry in enumerate(level["skills"], 1):
        skill = skills[entry["id"]]
        expected = entry["level"]
        nxt = LEVELS[LEVEL_NUMBER[expected]] if LEVEL_NUMBER[expected] < 4 else ""
        source = "UK GDaD PCF" if skill.get("source") == "pcf" else "Health care addition"
        statement = skill["description"]
        if entry["id"] == "pcf:test-engineering":
            target = AUTOMATION_TARGET[track]
            statement += f" Programme automation target for this track: {target.capitalize()}."
        add(
            part="C",
            item_id=f"Part C item {n}",
            dimension=f"Skill: {skill['name']}",
            source=source,
            statement=statement,
            expected_level=expected.capitalize(),
            expected_level_number=str(LEVEL_NUMBER[expected]),
            expected_level_description=skill["levels"].get(expected, "").replace("\n", " "),
            next_level_description=(
                f"{nxt.capitalize()}: " + skill["levels"].get(nxt, "").replace("\n", " ") if nxt else ""
            ),
            rating_scale=SCALE_SKILL,
        )
    return rows


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--reference", default=DEFAULT_REFERENCE)
    parser.add_argument("--out", default=os.path.join(os.path.dirname(__file__), "..", "instruments"))
    args = parser.parse_args()

    with open(args.reference, encoding="utf-8") as f:
        ref = json.load(f)
    os.makedirs(args.out, exist_ok=True)

    summary = []
    for track, band_id, role_id, level_title in TRACKS:
        rows = build_rows(ref, track, band_id, role_id, level_title)
        path = os.path.join(args.out, f"{file_name(band_id, level_title)}.tsv")
        with open(path, "w", encoding="utf-8", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=COLUMNS, delimiter="\t", lineterminator="\n")
            writer.writeheader()
            writer.writerows(rows)
        counts = {p: sum(1 for r in rows if r["part"] == p) for p in "ABC"}
        summary.append(
            {
                "track": track,
                "band": band_id,
                "role_level": level_title,
                "part_a_items": counts["A"],
                "part_b_items": counts["B"],
                "part_c_items": counts["C"],
                "total_items": len(rows),
                "file": f"{file_name(band_id, level_title)}.tsv",
            }
        )
        print(f"{track}: {counts['A']} + {counts['B']} + {counts['C']} = {len(rows)} items -> {path}")

    with open(os.path.join(args.out, "index.tsv"), "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(summary[0].keys()), delimiter="\t", lineterminator="\n")
        writer.writeheader()
        writer.writerows(summary)
    print(f"Reference: {ref['meta']['title']}, UK GDaD PCF accessed {ref['meta']['pcf']['accessed']}")


if __name__ == "__main__":
    main()
