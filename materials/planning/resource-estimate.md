# Resource estimate

Hours by role, from the time commitments in [spec/index.md](../../spec/index.md#roles-and-responsibilities) and the training days in its schedule. The example cohort is **illustrative**: replace the mix with the real roster.

A **training day** is 7.5 hours of protected learning time, 20% of a 37.5-hour week. The programme is 24 training days, one a week, for every track: 24 × 7.5 = **180 hours** per participant. Tracks differ in depth, not in hours.

## Assumptions

| Role | Assumption | Hours |
| --- | --- | --- |
| Participant | 24 training days of 7.5 hours | 180 per participant |
| Mentor | 1.5 hours per training day on training days 1–6 (6 × 1.5 = 9), then 1 hour per training day on training days 7–24 (18 × 1 = 18), per participant | 27 per participant |
| Line manager | 1 hour every second training day (12 × 1 = 12), plus 2 hours at each of 6 gates (6 × 2 = 12) | 24 per participant |
| Training lead | Half a day (3.75 hours) per training day for 24 training days, for a cohort of up to 12 (24 × 3.75) | 90 per cohort |
| Head of test | 2 hours a month for 6 months | 12 per cohort |
| Developers | About 1 hour per training day for 24 training days, per participant's team | 24 per participant |
| Product owner | 3 hours per participant | 3 per participant |
| Clinical safety officer | 6 hours per cohort, plus 30 minutes per traceability review | 6 + 0.5 per participant |
| Information governance lead | 3 hours per cohort | 3 per cohort |
| Gate 4 panel | 3 people, 3 hours each, per participant | 9 per participant |

## Example cohort of 12

| Track | People | Training days each | Hours each | Hours |
| --- | --- | --- | --- | --- |
| B3 | 1 | 24 | 180 | 180 |
| B4-QA | 2 | 24 | 180 | 360 |
| B4-TE | 1 | 24 | 180 | 180 |
| B5-QA | 3 | 24 | 180 | 540 |
| B6-QA | 2 | 24 | 180 | 360 |
| B6-TE | 1 | 24 | 180 | 180 |
| B7-TE | 1 | 24 | 180 | 180 |
| B7-TM | 1 | 24 | 180 | 180 |
| **Total** | **12** | | | **2,160** |

| Role | Arithmetic | Hours for the cohort |
| --- | --- | --- |
| Participants (protected time) | 12 × 180 | 2,160 |
| Mentors (4 mentors at 3 participants each, about 4.5 hours per training day each on training days 1–6, then 3 hours) | 12 × 27 | 324 |
| Line managers | 12 × 24 | 288 |
| Developers | 12 × 24 | 288 |
| Gate 4 panels | 12 × 9 | 108 |
| Training lead | 24 × 3.75 | 90 |
| Product owners | 12 × 3 | 36 |
| Head of test | 6 × 2 | 12 |
| Clinical safety officer | 6 + (12 × 0.5) | 12 |
| Information governance lead | 3 | 3 |
| **Everyone other than participants** | 324 + 288 + 288 + 108 + 90 + 36 + 12 + 12 + 3 | **1,161** |
| **Total** | 2,160 + 1,161 | **3,321** |

Gate 5 (about six months after Gate 4) and the 32-training-day extension for B3 and B4 add a little more: about 2 hours per participant for Gate 5, and, for each participant who extends, 8 more training days (8 × 7.5 = 60 hours) plus 8 more training days of mentor and manager time.

## Money

- Tools: Node.js, Selenium WebDriver, Mocha, the practice repository's FHIR sandbox, k6, gitleaks, and axe-core are open source. Nothing needs Docker.
- CI minutes: depends on D2; the practice repository's workflow is small.
- Optional: a paid JavaScript course (D3).
- External mentors for Band 7 participants, if no Band 8a lead is available.
