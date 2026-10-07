# Sponsor brief: manual to automatic testing programme

**For:** head of test. **Status:** draft.

## The problem

- Our testing is mostly manual. Manual regression is slow, gives different results from person to person, and cannot run on every change.
- Our testers hold UK GDaD PCF roles whose skills, including test automation, they do not yet fully use.

## The proposal

A formal programme of 24 training days for manual testers at Bands 3 to 7: one training day (7.5 hours, 20% time) a week, over about 24 calendar weeks.

- **Eight tuned tracks**, by band and assigned PCF role, sharing one schedule and set of gates, so one mixed cohort learns together.
- **Six gates**, each repeating a full self-assessment against the person's band (21 dimensions), PCF role aspects, and every skill in the role, rated by the manager too. Pass marks rise from 60% to 90%.
- **Automation on real work** from training day 10: each person automates tests on their own team's product in every training day.
- **No band changes.** People grow into the roles they already hold.

Full design: [spec/index.md](../../spec/index.md). Reasoning: [plan.md](../../plan.md).

## What it costs

For an illustrative cohort of 12, about 2,160 hours of participants' protected time (24 training days of 7.5 hours each) and about 1,160 hours from mentors, managers, the training lead, and others. Details: [resource-estimate.md](resource-estimate.md). Tools are open source; the only optional spend is a JavaScript course (D3).

## What we get

- Each person's capability index measured from their Gate 0 baseline to at least 90% of their current role.
- Each person at their track's automation target.
- Real automated regression suites running in team CI, built during the programme.
- Lower manual regression hours per release, and a shorter time from a defect report to a regression test.
- Measured at Gate 4 and again at Gate 5, six months later.

## What we need from you

1. Agree to sponsor the programme, and chair the Gate 4 panels for Band 7 participants.
2. Name a training lead (about half a day, 3.75 hours, per training day).
3. Release mentors: at least one band above each participant, up to 3 participants each.
4. Support the HR request in [hr-briefing.md](hr-briefing.md).
5. Decide, with the training lead, the tool and CI defaults (D1, D2) in [decision-log.md](decision-log.md).

## Main risks

Protected time being eroded, inflated self-ratings, and too few mentors. Mitigations are in [plan.md](../../plan.md#risks).
