# Resource estimate

Hours by role, from the time commitments in [spec/index.md](../../spec/index.md#roles-and-responsibilities) and the guided hours in its schedule. The example cohort is **illustrative**: replace the mix with the real roster.

## Assumptions

| Role | Assumption | Hours |
| --- | --- | --- |
| Participant | Guided hours for the track | 270 (B3, B4, B7) or 360 (B5, B6) |
| Mentor | 4 hours a week in weeks 1–6, then 2 hours a week in weeks 7–24, per participant | 60 per participant |
| Line manager | 1 hour a fortnight for 24 weeks, plus 2 hours at each of 6 gates | 24 per participant |
| Training lead | 1 day (7.5 hours) a week for 24 weeks, for a cohort of up to 12 | 180 per cohort |
| Head of test | 2 hours a month for 6 months | 12 per cohort |
| Developers | 1 hour a week for 24 weeks, per participant's team | 24 per participant |
| Product owner | 3 hours per participant | 3 per participant |
| Clinical safety officer | 6 hours per cohort, plus 30 minutes per traceability review | 6 + 0.5 per participant |
| Information governance lead | 3 hours per cohort | 3 per cohort |
| Gate 4 panel | 3 people, 3 hours each, per participant | 9 per participant |

## Example cohort of 12

| Track | People | Guided hours each | Guided hours |
| --- | --- | --- | --- |
| B3 | 1 | 270 | 270 |
| B4-QA | 2 | 270 | 540 |
| B4-TE | 1 | 270 | 270 |
| B5-QA | 3 | 360 | 1,080 |
| B6-QA | 2 | 360 | 720 |
| B6-TE | 1 | 360 | 360 |
| B7-TE | 1 | 270 | 270 |
| B7-TM | 1 | 270 | 270 |
| **Total** | **12** | | **3,780** |

| Role | Hours for the cohort |
| --- | --- |
| Participants (protected time) | 3,780 |
| Mentors (4 mentors at 3 participants each, about 7.5 hours a week each) | 720 |
| Line managers | 288 |
| Developers | 288 |
| Training lead | 180 |
| Gate 4 panels | 108 |
| Product owners | 36 |
| Head of test | 12 |
| Clinical safety officer | 12 |
| Information governance lead | 3 |
| **Everyone other than participants** | **1,647** |
| **Total** | **5,427** |

Gate 5 (week 48) and the 32-week extension for B3 and B4 add a little more: about 2 hours per participant for Gate 5, and 8 more weeks of mentor and manager time for anyone who extends.

## Money

- Tools: Playwright, TypeScript, HAPI FHIR, gitleaks, and axe-core are open source.
- CI minutes: depends on D2; the practice repository's workflow is small.
- Optional: a paid TypeScript course (D3).
- External mentors for Band 7 participants, if no Band 8a lead is available.
