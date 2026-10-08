# Planning pack

Drafts for the Planning phase in [tasks.md](../../tasks.md). Each needs a named owner to review it, agree it with the right people, and send it. None of them has been sent.

| Document | For | Purpose |
| --- | --- | --- |
| [sponsor-brief.md](sponsor-brief.md) | Head of test (sponsor) | One-page case for the programme, and the decisions needed |
| [hr-briefing.md](hr-briefing.md) | HR | Agree developmental gates, no band changes, the Band 3 and mapping rules, and how assessment records are handled (Decision 6, Decision 7) |
| [manager-briefing.md](manager-briefing.md) | Line managers | Protected time, independent rating, calibration, and how to talk about the baseline |
| [stakeholder-briefing.md](stakeholder-briefing.md) | Product owners, clinical safety officer, information governance lead, developers | What the programme asks of them, and when |
| [decision-log.md](decision-log.md) | Training lead | Decisions 1 to 7: default, options, owner, status |
| [resource-estimate.md](resource-estimate.md) | Sponsor, training lead | Hours by role for a cohort, from the spec's time commitments |
| [cohort-roster.tsv](cohort-roster.tsv) | Training lead | Template: one row per participant, with track, mentor, and options |

The cohort calendar comes from `scripts/gate_calendar.py`:

```sh
python3 scripts/gate_calendar.py 2027-01-11                      # 320 hours at 7.5 hours a week
python3 scripts/gate_calendar.py 2027-01-11 --hours-per-week 3.75 # another agreed pace
python3 scripts/gate_calendar.py 2027-01-11 --extended           # the 380-hour extension (Band 3 and Band 4)
```

Keep the filled-in roster in the organisation's HR or learning system, not in this repository: it names people.
