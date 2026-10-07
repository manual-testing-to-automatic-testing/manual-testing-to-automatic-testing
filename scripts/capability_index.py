#!/usr/bin/env python3
"""Calculate the capability index from a completed self-assessment TSV.

Rules, from spec/index.md, sections "Capability index" and "Gate thresholds":

- Part A outline (A1-A5) and Part B: the agreed rating is Not yet, Partly, or Meets.
- Part A factors (A6-A21): the agreed rating is a factor level. At or above the
  expected level is Meets; one level below is Partly; two or more below is Not yet.
- Part C skills: the agreed rating is 0-4. Gap = expected - agreed. A gap of 0 or
  less is Meets; a gap of 1 is Partly; a gap of 2 or more is Not yet.
- Meets counts 1, Partly counts 0.5, Not yet counts 0.
- The index for a part is the percentage score of its rated items. The overall
  index is the mean of Parts A, B, and C.

Items with no agreed rating, or no expected level, are reported and left out.

Usage:
    python3 scripts/capability_index.py FILE.tsv [--gate N] [--write]

--write fills the status column in place.
"""

import argparse
import csv
import sys

THRESHOLDS = {0: None, 1: 60, 2: 70, 3: 80, 4: 90, 5: 90}
SCORE = {"meets": 1.0, "partly": 0.5, "not yet": 0.0}
SKILL_WORDS = {"not yet": 0, "awareness": 1, "working": 2, "practitioner": 3, "expert": 4}


def status_of(row):
    agreed = row["agreed_rating"].strip()
    if not agreed:
        return None, "no agreed rating"
    item = row["item_id"]
    part = row["part"]
    if part == "A" and item not in {f"A{n}" for n in range(1, 6)}:
        if not row["expected_level_number"].strip():
            return None, "no expected factor level (agree at Gate 0)"
        gap = int(row["expected_level_number"]) - int(agreed)
    elif part == "C":
        value = SKILL_WORDS.get(agreed.lower())
        if value is None:
            value = int(agreed.split()[0])
        gap = int(row["expected_level_number"]) - value
    else:
        word = agreed.lower()
        if word not in SCORE:
            return None, f"unknown rating '{agreed}'"
        return word.capitalize(), None
    if gap <= 0:
        return "Meets", None
    if gap == 1:
        return "Partly", None
    return "Not yet", None


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("file")
    parser.add_argument("--gate", type=int, choices=sorted(THRESHOLDS))
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()

    with open(args.file, encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f, delimiter="\t")
        fields = reader.fieldnames
        rows = list(reader)

    scores = {"A": [], "B": [], "C": []}
    skipped = []
    below = []
    for row in rows:
        status, problem = status_of(row)
        if status is None:
            skipped.append(f"{row['item_id']}: {problem}")
            continue
        row["status"] = status
        scores[row["part"]].append(SCORE[status.lower()])
        if row["part"] == "C" and status == "Not yet":
            below.append(row["dimension"])

    print(f"File: {args.file}")
    indexes = {}
    for part in "ABC":
        values = scores[part]
        if values:
            indexes[part] = 100 * sum(values) / len(values)
            print(f"Part {part}: {indexes[part]:.0f}% ({len(values)} items rated)")
        else:
            print(f"Part {part}: no items rated")
    if len(indexes) == 3:
        overall = sum(indexes.values()) / 3
        print(f"Overall: {overall:.0f}%")
    if skipped:
        print(f"Not counted ({len(skipped)}):")
        for s in skipped:
            print(f"  {s}")

    if args.gate is not None and THRESHOLDS[args.gate] is not None:
        threshold = THRESHOLDS[args.gate]
        failed = [p for p in "ABC" if indexes.get(p, 0) < threshold]
        print(f"Gate {args.gate} threshold: each of Parts A, B, C at least {threshold}%")
        print("  Threshold met" if not failed else f"  Below threshold: Part {', Part '.join(failed)}")
        if args.gate >= 4 and below:
            print(f"  Skills more than one level below expected: {', '.join(below)}")
        print("  Check the gate's other conditions and Part D by hand (see materials/gates/).")

    if args.write:
        with open(args.file, "w", encoding="utf-8", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=fields, delimiter="\t", lineterminator="\n")
            writer.writeheader()
            writer.writerows(rows)
        print("Status column written.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
