#!/usr/bin/env python3
"""Print the programme calendar for a cohort start date.

The schedule comes from spec/index.md, section "Schedule and time". Week 1
starts on the start date (a Monday). Gate 0 is in week 1 (the spec's
"weeks 0-1"); every later gate is in the week the spec names. With the
32-week extension for B3 and B4, the gates move to weeks 8, 16, 24, 32, and 56.

Usage:
    python3 scripts/gate_calendar.py 2027-01-11 [--extended] [--tsv]
"""

import argparse
import datetime as dt
import sys

STANDARD = {
    "gates": [("Gate 0 (baseline)", 1), ("Gate 1", 6), ("Gate 2", 12), ("Gate 3", 18), ("Gate 4", 24), ("Gate 5 (follow-up)", 48)],
    "items": [
        ("M0 Induction and baseline", 1, 1),
        ("M1 Why and what to automate", 1, 2),
        ("R1 Role foundations", 1, 24),
        ("M2 Programming foundations in JavaScript", 2, 6),
        ("R2 Health care foundations", 2, 8),
        ("M3 Version control and collaboration", 4, 6),
        ("M4 Browser automation fundamentals", 7, 9),
        ("M5 From walkthrough to real test", 10, 12),
        ("L1 Coaching others in automation (B6, B7)", 10, 20),
        ("M6 API, integration, and FHIR tests", 13, 15),
        ("L4 Acceptance test automation (B6-QA)", 13, 17),
        ("M7 Continuous integration and DevOps", 16, 17),
        ("L2 Automation strategy and metrics (B6-QA, B7)", 16, 20),
        ("L3 Frameworks and non-functional testing (B7-TE)", 16, 20),
        ("L5 Leading teams through automation adoption (B7-TM)", 16, 20),
        ("M8 Safe and lawful test automation in health care", 18, 19),
        ("M9 Quality engineering practice", 19, 20),
        ("M10 Capstone", 20, 24),
        ("Consolidation", 25, 48),
    ],
}
EXTENDED_GATES = [("Gate 0 (baseline)", 1), ("Gate 1", 8), ("Gate 2", 16), ("Gate 3", 24), ("Gate 4", 32), ("Gate 5 (follow-up)", 56)]


def week_start(start, week):
    return start + dt.timedelta(weeks=week - 1)


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("start", help="cohort start date, a Monday, as YYYY-MM-DD")
    parser.add_argument("--extended", action="store_true", help="32-week extension gates for B3 and B4")
    parser.add_argument("--tsv", action="store_true", help="tab-separated output")
    args = parser.parse_args()

    start = dt.date.fromisoformat(args.start)
    if start.weekday() != 0:
        sys.exit(f"error: {start} is a {start:%A}; start the cohort on a Monday")

    gates = EXTENDED_GATES if args.extended else STANDARD["gates"]
    rows = [("Gate", name, w, w, week_start(start, w), week_start(start, w) + dt.timedelta(days=4)) for name, w in gates]
    if not args.extended:
        rows += [
            ("Module", name, a, b, week_start(start, a), week_start(start, b) + dt.timedelta(days=4))
            for name, a, b in STANDARD["items"]
        ]
    rows.sort(key=lambda r: (r[4], r[0] != "Gate"))

    if args.tsv:
        print("type\tname\tfirst_week\tlast_week\tstarts\tends")
        for t, n, a, b, s, e in rows:
            print(f"{t}\t{n}\t{a}\t{b}\t{s}\t{e}")
        return
    title = "32-week extension (B3 and B4) gates" if args.extended else "24-week programme"
    print(f"{title}, starting {start:%A %d %B %Y}\n")
    for t, n, a, b, s, e in rows:
        weeks = f"week {a}" if a == b else f"weeks {a}-{b}"
        marker = "*" if t == "Gate" else " "
        print(f"{marker} {s:%d %b %Y} to {e:%d %b %Y}  {weeks:<12} {n}")
    print("\n* Gate. Book the gate review meetings in the gate week, and the self-assessment the week before.")


if __name__ == "__main__":
    main()
