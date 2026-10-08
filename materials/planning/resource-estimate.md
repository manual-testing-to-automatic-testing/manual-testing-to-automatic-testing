# Resource estimate

Hours by role, from the time commitments in [spec/index.md](../../spec/index.md#roles-and-responsibilities) and the hours in its schedule. The example cohort is **illustrative**: replace the mix with the real roster.

The programme is **308 hours** of protected learning time per participant, for every track, by default 7.5 hours a week (20% of a 37.5-hour week): 60 hours for the basics (Modules 1 to 3), 180 hours to Gate 4, then 40 hours for Module 17, the Lean Six Sigma Green Belt. Tracks differ in depth, not in hours. Rates below are per 7.5 learning hours, so hours 88–268 hold 24 of them, and the whole programme about 37.

## Assumptions

| Role | Assumption | Hours |
| --- | --- | --- |
| Participant | 308 learning hours | 308 per participant |
| Mentor | A 30-minute start, then a 1-hour check-in and a 1-hour walkthrough in each of Modules 1 to 3 (0.5 + 3 × 2 = 6.5), 1.5 hours per 7.5 learning hours in hours 88–133 (6 × 1.5 = 9), then 1 hour per 7.5 learning hours in hours 133–268 (18 × 1 = 18), and about 5 hours of Green Belt project support in Module 17, per participant | 38.5 per participant |
| Line manager | 1 hour per 15 learning hours (about 21 over 308 hours), plus 2 hours at each of 6 gates (6 × 2 = 12) | 33 per participant |
| Training lead | 1 hour per 7.5 cohort learning hours in hours 0–60 (8 × 1 = 8), 3.75 hours per 7.5 cohort learning hours in hours 88–268 (24 × 3.75 = 90), plus about 20 hours in Module 17 working with the certification body and reviewing projects | 118 per cohort |
| Head of test | 2 hours a month for 10 months | 20 per cohort |
| Developers | About 1 hour per 7.5 learning hours to hour 268, per participant's team (24 × 1) | 24 per participant |
| Product owner | 3 hours per participant, plus 1 hour sponsoring the Green Belt project | 4 per participant |
| Clinical safety officer | 6 hours per cohort, plus 30 minutes per traceability review | 6 + 0.5 per participant |
| Information governance lead | 3 hours per cohort | 3 per cohort |
| Gate 4 panel | 3 people, 3 hours each, per participant | 9 per participant |
| Lean Six Sigma trainer | Teaching the Green Belt body of knowledge in Module 17, for the cohort | 30 per cohort |

## Example cohort of 12

| Track | People | Hours each | Hours |
| --- | --- | --- | --- |
| Band 3 | 1 | 308 | 308 |
| Band 4 quality assurance | 2 | 308 | 616 |
| Band 4 test engineering | 1 | 308 | 308 |
| Band 5 quality assurance | 3 | 308 | 924 |
| Band 6 quality assurance | 2 | 308 | 616 |
| Band 6 test engineering | 1 | 308 | 308 |
| Band 7 test engineering | 1 | 308 | 308 |
| Band 7 test management | 1 | 308 | 308 |
| **Total** | **12** | | **3,696** |

| Role | Arithmetic | Hours for the cohort |
| --- | --- | --- |
| Participants (protected time) | 12 × 308 | 3,696 |
| Mentors (4 mentors at 3 participants each) | 12 × 38.5 | 462 |
| Line managers | 12 × 33 | 396 |
| Developers | 12 × 24 | 288 |
| Gate 4 panels | 12 × 9 | 108 |
| Training lead | 8 + 90 + 20 | 118 |
| Product owners | 12 × 4 | 48 |
| Lean Six Sigma trainer | 30 | 30 |
| Head of test | 10 × 2 | 20 |
| Clinical safety officer | 6 + (12 × 0.5) | 12 |
| Information governance lead | 3 | 3 |
| **Everyone other than participants** | 462 + 396 + 288 + 108 + 118 + 48 + 30 + 20 + 12 + 3 | **1,485** |
| **Total** | 3,696 + 1,485 | **5,181** |

Gate 5 (about six months after Gate 4) and the extension to 368 hours for Band 3 and Band 4 add a little more: about 2 hours per participant for Gate 5, and, for each participant who extends, 60 more learning hours, about 8 more hours of mentor time (8 × 1), and about 4 more hours of manager time (4 × 1).

## Money

- Tools: Node.js, Selenium, Mocha, the practice repository's FHIR sandbox, k6, gitleaks, and axe-core are open source. Nothing needs Docker.
- CI minutes: depends on Decision 2; the practice repository's workflow is small.
- ISTQB Certified Tester Foundation Level v4.0: the certification test fee for each participant, and the video training.
- ISTQB Certified Tester Advanced Level Test Automation Engineer: from £2,445 + VAT per participant for the QA 3-day course, which includes the exam voucher; about £29,340 + VAT for a cohort of 12. Check current prices.
- Lean Six Sigma Green Belt: course and certification exam fees for each participant, and the trainer if not in house (Decision 8). Choose a certificate that does not expire, and a body that allows a resit.
- Optional: a paid JavaScript course (Decision 3).
- External mentors for Band 7 participants, if no Band 8a lead is available.
