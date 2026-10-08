# Resource estimate

Hours by role, from the time commitments in [spec/index.md](../../spec/index.md#roles-and-responsibilities) and the hours in its schedule. The example cohort is **illustrative**: replace the mix with the real roster.

The programme is **220 hours** of protected learning time per participant, for every track, by default 7.5 hours a week (20% of a 37.5-hour week): 180 hours to Gate 4, then 40 hours for Module 11, the Lean Six Sigma Green Belt. Tracks differ in depth, not in hours. Rates below are per 7.5 learning hours, so the 180 hours to Gate 4 hold 24 of them, and the whole programme about 29.

## Assumptions

| Role | Assumption | Hours |
| --- | --- | --- |
| Participant | 220 learning hours | 220 per participant |
| Mentor | 1.5 hours per 7.5 learning hours in hours 0–45 (6 × 1.5 = 9), then 1 hour per 7.5 learning hours in hours 45–180 (18 × 1 = 18), and about 5 hours of Green Belt project support in Module 11, per participant | 32 per participant |
| Line manager | 1 hour per 15 learning hours (about 15 over 220 hours), plus 2 hours at each of 6 gates (6 × 2 = 12) | 27 per participant |
| Training lead | 3.75 hours per 7.5 cohort learning hours to hour 180 (24 × 3.75 = 90), plus about 20 hours in Module 11 working with the certification body and reviewing projects | 110 per cohort |
| Head of test | 2 hours a month for 7 months | 14 per cohort |
| Developers | About 1 hour per 7.5 learning hours to hour 180, per participant's team (24 × 1) | 24 per participant |
| Product owner | 3 hours per participant, plus 1 hour sponsoring the Green Belt project | 4 per participant |
| Clinical safety officer | 6 hours per cohort, plus 30 minutes per traceability review | 6 + 0.5 per participant |
| Information governance lead | 3 hours per cohort | 3 per cohort |
| Gate 4 panel | 3 people, 3 hours each, per participant | 9 per participant |
| Lean Six Sigma trainer | Teaching the Green Belt body of knowledge in Module 11, for the cohort | 30 per cohort |

## Example cohort of 12

| Track | People | Hours each | Hours |
| --- | --- | --- | --- |
| Band 3 | 1 | 220 | 220 |
| Band 4 quality assurance | 2 | 220 | 440 |
| Band 4 test engineering | 1 | 220 | 220 |
| Band 5 quality assurance | 3 | 220 | 660 |
| Band 6 quality assurance | 2 | 220 | 440 |
| Band 6 test engineering | 1 | 220 | 220 |
| Band 7 test engineering | 1 | 220 | 220 |
| Band 7 test management | 1 | 220 | 220 |
| **Total** | **12** | | **2,640** |

| Role | Arithmetic | Hours for the cohort |
| --- | --- | --- |
| Participants (protected time) | 12 × 220 | 2,640 |
| Mentors (4 mentors at 3 participants each, about 4.5 hours per 7.5 learning hours each in hours 0–45, then 3 hours) | 12 × 32 | 384 |
| Line managers | 12 × 27 | 324 |
| Developers | 12 × 24 | 288 |
| Gate 4 panels | 12 × 9 | 108 |
| Training lead | 90 + 20 | 110 |
| Product owners | 12 × 4 | 48 |
| Lean Six Sigma trainer | 30 | 30 |
| Head of test | 7 × 2 | 14 |
| Clinical safety officer | 6 + (12 × 0.5) | 12 |
| Information governance lead | 3 | 3 |
| **Everyone other than participants** | 384 + 324 + 288 + 108 + 110 + 48 + 30 + 14 + 12 + 3 | **1,321** |
| **Total** | 2,640 + 1,321 | **3,961** |

Gate 5 (about six months after Gate 4) and the extension to 280 hours for Band 3 and Band 4 add a little more: about 2 hours per participant for Gate 5, and, for each participant who extends, 60 more learning hours, about 8 more hours of mentor time (8 × 1), and about 4 more hours of manager time (4 × 1).

## Money

- Tools: Node.js, Selenium WebDriver, Mocha, the practice repository's FHIR sandbox, k6, gitleaks, and axe-core are open source. Nothing needs Docker.
- CI minutes: depends on Decision 2; the practice repository's workflow is small.
- Lean Six Sigma Green Belt: course and certification exam fees for each participant, and the trainer if not in house (Decision 8). Choose a certificate that does not expire, and a body that allows a resit.
- Optional: a paid JavaScript course (Decision 3).
- External mentors for Band 7 participants, if no Band 8a lead is available.
