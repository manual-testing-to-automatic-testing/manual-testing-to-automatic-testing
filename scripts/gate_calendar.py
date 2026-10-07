#!/usr/bin/env python3
"""Print the programme calendar: the date of every training day, its modules, and its gate.

The schedule comes from spec/index.md, section "Schedule and time". A
training day is 7.5 hours of protected learning time, 20% of a 37.5-hour
week. The programme is 24 training days, one a week, on the same weekday as
the start date. Gate 5 is a follow-up about six months after Gate 4, not a
training day. With the extension to 32 training days for B3 and B4, the gates
move to training days 1, 8, 16, 24, and 32.

Usage:
    python3 scripts/gate_calendar.py 2027-01-12 [--extended] [--tsv]
"""

import argparse
import datetime as dt

HOURS_PER_TRAINING_DAY = 7.5
FOLLOW_UP_WEEKS = 26  # about six months after Gate 4

GATES = {1: "Gate 0 (baseline)", 6: "Gate 1", 12: "Gate 2", 18: "Gate 3 (at the start of the day)", 24: "Gate 4"}
EXTENDED_GATES = {1: "Gate 0 (baseline)", 8: "Gate 1", 16: "Gate 2", 24: "Gate 3 (at the start of the day)", 32: "Gate 4"}

# (name, first training day, last training day), from the spec's schedule.
MODULES = [
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
]


def training_day_date(start, n):
    """Training day n (from 1) is n - 1 weeks after the first."""
    return start + dt.timedelta(weeks=n - 1)


def modules_on(n):
    """The modules that start or end on training day n, or run through it (R1 excepted)."""
    names = []
    for name, first, last in MODULES:
        if name.startswith("R1") and n not in (first, last):
            continue
        if first <= n <= last:
            names.append(name)
    return names


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("start", help="the date of training day 1, as YYYY-MM-DD; later training days fall on the same weekday")
    parser.add_argument("--extended", action="store_true", help="the extension to 32 training days, for B3 and B4")
    parser.add_argument("--tsv", action="store_true", help="tab-separated output")
    args = parser.parse_args()

    start = dt.date.fromisoformat(args.start)
    days = 32 if args.extended else 24
    gates = EXTENDED_GATES if args.extended else GATES
    gate4 = training_day_date(start, max(gates))
    follow_up = gate4 + dt.timedelta(weeks=FOLLOW_UP_WEEKS)

    rows = []
    for n in range(1, days + 1):
        modules = "; ".join(modules_on(n)) if not args.extended else ""
        rows.append((n, training_day_date(start, n), gates.get(n, ""), modules))

    if args.tsv:
        print("training_day\tdate\tgate\tmodules")
        for n, date, gate, modules in rows:
            print(f"{n}\t{date}\t{gate}\t{modules}")
        print(f"\t{follow_up}\tGate 5 (follow-up)\t")
        return

    title = f"{days} training days (extension for B3 and B4)" if args.extended else f"{days} training days"
    print(f"{title}, one a week on {start:%A}s, from {start:%d %B %Y}")
    print(f"A training day is {HOURS_PER_TRAINING_DAY} hours of protected learning time: {days * HOURS_PER_TRAINING_DAY:g} hours in all.\n")
    for n, date, gate, modules in rows:
        marker = "*" if gate else " "
        detail = " | ".join(part for part in (gate, modules) if part)
        print(f"{marker} Training day {n:>2}  {date:%a %d %b %Y}  {detail}")
    print(f"* Follow-up       {follow_up:%a %d %b %Y}  Gate 5, about six months after Gate 4")
    print("\n* Gate. Book each gate review on its training day, and ask for the self-assessment before it.")


if __name__ == "__main__":
    main()
