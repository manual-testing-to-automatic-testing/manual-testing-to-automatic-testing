#!/usr/bin/env python3
"""Print the programme calendar: when each module runs and each gate falls.

The schedule comes from spec/index.md, section "Schedule and time", in
programme hours: 220 hours of protected learning time, counted from 0, ending
with Module 11, the Lean Six Sigma Green Belt (hours 180-220). At the default pace of
7.5 hours a week (20% of a 37.5-hour week), the programme runs over about 30
weeks. Gate 5 is a follow-up about six months after Gate 4. With the extension
to 280 hours for Band 3 and Band 4, the gates move to hours 0, 60, 120, 172.5, and 240,
and Module 11 runs in hours 240-280.

Usage:
    python3 scripts/gate_calendar.py 2027-01-11 [--hours-per-week 7.5] [--extended] [--tsv]
"""

import argparse
import datetime as dt
import math

FOLLOW_UP_WEEKS = 26  # about six months after Gate 4

GATES = [(0, "Gate 0 (baseline)"), (45, "Gate 1"), (90, "Gate 2"), (127.5, "Gate 3, before Module 8"), (180, "Gate 4"), (220, "Green Belt certification exam")]
EXTENDED_GATES = [(0, "Gate 0 (baseline)"), (60, "Gate 1"), (120, "Gate 2"), (172.5, "Gate 3, before Module 8"), (240, "Gate 4"), (280, "Green Belt certification exam")]

# (name, from hour, to hour), from the spec's schedule.
MODULES = [
    ("Module 0 Induction and baseline", 0, 7.5),
    ("Module 1 Why and what to automate", 0, 15),
    ("Role foundations", 0, 180),
    ("Module 2 Programming foundations in JavaScript", 7.5, 45),
    ("Health care foundations", 7.5, 60),
    ("Module 3 Version control and collaboration", 22.5, 45),
    ("Module 4 Browser automation fundamentals", 45, 67.5),
    ("Module 5 From walkthrough to real test", 67.5, 90),
    ("Coaching others in automation (Band 6, Band 7)", 67.5, 150),
    ("Module 6 API, integration, and FHIR tests", 90, 112.5),
    ("Acceptance test automation (Band 6 quality assurance)", 90, 127.5),
    ("Module 7 Continuous integration and DevOps", 112.5, 127.5),
    ("Automation strategy and metrics (Band 6 quality assurance, Band 7)", 112.5, 150),
    ("Frameworks and non-functional testing (Band 7 test engineering)", 112.5, 150),
    ("Leading teams through automation adoption (Band 7 test management)", 112.5, 150),
    ("Module 8 Safe and lawful test automation in health care", 127.5, 142.5),
    ("Module 9 Quality engineering practice", 135, 150),
    ("Module 10 Capstone", 142.5, 180),
    ("Module 11 Lean Six Sigma Green Belt, lifetime certification", 180, 220),
]


def h(x):
    return f"{x:g}"


def week_of(hour, pace, from_side):
    """The calendar week (from 1) in which a programme hour falls.

    A start hour falls in the week whose learning includes the next hour; an
    end hour, or a gate after some learning, falls in the week that completes it.
    """
    if from_side:
        return math.floor(hour / pace) + 1
    return max(1, math.ceil(hour / pace))


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("start", help="the Monday of the first week, as YYYY-MM-DD")
    parser.add_argument("--hours-per-week", type=float, default=7.5, help="the agreed pace (default 7.5, 20%% time)")
    parser.add_argument("--extended", action="store_true", help="the extension to 280 hours, for Band 3 and Band 4")
    parser.add_argument("--tsv", action="store_true", help="tab-separated output")
    args = parser.parse_args()

    start = dt.date.fromisoformat(args.start)
    if start.weekday() != 0:
        parser.error(f"{start} is a {start:%A}; give the Monday of the first week")
    pace = args.hours_per_week
    total = 280 if args.extended else 220
    gates = EXTENDED_GATES if args.extended else GATES

    def monday(week):
        return start + dt.timedelta(weeks=week - 1)

    rows = []
    for hour, name in gates:
        week = week_of(hour, pace, from_side=(hour == 0))
        rows.append(("gate", name, hour, hour, week, week))
    if not args.extended:
        for name, first, last in MODULES:
            rows.append(("module", name, first, last, week_of(first, pace, True), week_of(last, pace, False)))
    else:
        rows.append(("module", "Module 11 Lean Six Sigma Green Belt, lifetime certification", 240, 280, week_of(240, pace, True), week_of(280, pace, False)))
    rows.sort(key=lambda r: (r[4], r[0] != "gate", r[2]))
    gate4 = monday(week_of(max(hour for hour, name in gates if name == "Gate 4"), pace, False))
    follow_up = gate4 + dt.timedelta(weeks=FOLLOW_UP_WEEKS)
    weeks = math.ceil(total / pace)

    if args.tsv:
        print("type\tname\tfrom_hour\tto_hour\tfirst_week\tlast_week\tfirst_monday\tlast_week_monday")
        for kind, name, first, last, wa, wb in rows:
            print(f"{kind}\t{name}\t{h(first)}\t{h(last)}\t{wa}\t{wb}\t{monday(wa)}\t{monday(wb)}")
        print(f"gate\tGate 5 (follow-up)\t\t\t\t\t{follow_up}\t{follow_up}")
        return

    print(f"{h(total)} hours at {h(pace)} hours a week: {weeks} weeks, from the week of {start:%d %B %Y}\n")
    for kind, name, first, last, wa, wb in rows:
        marker = "*" if kind == "gate" else " "
        hours = f"hour {h(first)}" if first == last else f"hours {h(first)}-{h(last)}"
        when = f"week {wa}" if wa == wb else f"weeks {wa}-{wb}"
        print(f"{marker} {monday(wa):%d %b %Y}  {when:<12} {hours:<16} {name}")
    print(f"* {follow_up:%d %b %Y}  follow-up                     Gate 5, about six months after Gate 4")
    print("\n* Gate. Book each gate review in its week, and ask for the self-assessment before it.")


if __name__ == "__main__":
    main()
