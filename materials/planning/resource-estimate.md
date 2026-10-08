# Resource estimate

Hours by role, from the time commitments in [spec/index.md](../../spec/index.md#roles-and-responsibilities) and the hours in its schedule. The example cohort is **illustrative**: replace the mix with the real roster.

The programme is **320 hours** of protected learning time per participant, for every track, by default 7.5 hours a week (20% of a 37.5-hour week): 60.5 hours for the basics (Modules 1 to 3), 28 hours for the two ISTQB certifications (Modules 4 and 5), 191 hours to Gate 4, then 40 hours for Module 17, the Lean Six Sigma Green Belt, and a 0.5-hour buffer. Tracks differ in depth, not in hours. Rates below are per 7.5 learning hours: hours 88.5–279.5 hold about 25 of them, and the whole programme about 43. The estimates below count 24 blocks to Gate 4, so they are slightly low.

## Assumptions

| Role | Assumption | Hours |
| --- | --- | --- |
| Participant | 320 learning hours | 320 per participant |
| Mentor | A 1-hour start, then a 1-hour check-in and a 1-hour walkthrough in each of Modules 1 to 3 (1 + 3 × 2 = 7), 1.5 hours per 7.5 learning hours in hours 88.5–136.5 (6 × 1.5 = 9), then 1 hour per 7.5 learning hours in hours 136.5–279.5 (18 × 1 = 18), 2.5 more hours for 1-hour capstone reviews (5 × 0.5), and about 5 hours of Green Belt project support in Module 17, per participant | 41.5 per participant |
| Line manager | 1 hour per 15 learning hours (about 21 over 320 hours), plus 2 hours at each of 6 gates (6 × 2 = 12) | 33 per participant |
| Training lead | 1 hour per 7.5 cohort learning hours in hours 0–60.5 (8 × 1 = 8), 3.75 hours per 7.5 cohort learning hours in hours 88.5–279.5 (24 × 3.75 = 90), plus about 20 hours in Module 17 working with the certification body and reviewing projects | 118 per cohort |
| Head of test | 2 hours a month for 10 months | 20 per cohort |
| Developers | About 1 hour per 7.5 learning hours to hour 279.5, per participant's team (24 × 1) | 24 per participant |
| Product owner | 3 hours per participant, plus 1 hour sponsoring the Green Belt project | 4 per participant |
| Clinical safety officer | 6 hours per cohort, plus 1 hour per traceability review | 6 + 1 per participant |
| Information governance lead | 3 hours per cohort | 3 per cohort |
| Gate 4 panel | 3 people, 3.5 hours each, per participant | 10.5 per participant |
| Lean Six Sigma trainer | Teaching the Green Belt body of knowledge in Module 17, for the cohort | 30 per cohort |

## Example cohort of 12

| Track | People | Hours each | Hours |
| --- | --- | --- | --- |
| Band 3 | 1 | 320 | 320 |
| Band 4 quality assurance | 2 | 320 | 640 |
| Band 4 test engineering | 1 | 320 | 320 |
| Band 5 quality assurance | 3 | 320 | 960 |
| Band 6 quality assurance | 2 | 320 | 640 |
| Band 6 test engineering | 1 | 320 | 320 |
| Band 7 test engineering | 1 | 320 | 320 |
| Band 7 test management | 1 | 320 | 320 |
| **Total** | **12** | | **3,840** |

| Role | Arithmetic | Hours for the cohort |
| --- | --- | --- |
| Participants (protected time) | 12 × 320 | 3,840 |
| Mentors (4 mentors at 3 participants each) | 12 × 41.5 | 498 |
| Line managers | 12 × 33 | 396 |
| Developers | 12 × 24 | 288 |
| Gate 4 panels | 12 × 10.5 | 126 |
| Training lead | 8 + 90 + 20 | 118 |
| Product owners | 12 × 4 | 48 |
| Lean Six Sigma trainer | 30 | 30 |
| Head of test | 10 × 2 | 20 |
| Clinical safety officer | 6 + (12 × 1) | 18 |
| Information governance lead | 3 | 3 |
| **Everyone other than participants** | 498 + 396 + 288 + 126 + 118 + 48 + 30 + 20 + 18 + 3 | **1,545** |
| **Total** | 3,840 + 1,545 | **5,385** |

Gate 5 (about six months after Gate 4) and the extension to 380 hours for Band 3 and Band 4 add a little more: about 2 hours per participant for Gate 5, and, for each participant who extends, 60 more learning hours, about 8 more hours of mentor time (8 × 1), and about 4 more hours of manager time (4 × 1).

## Money

- Tools: Node.js, Selenium, Mocha, the practice repository's FHIR sandbox, k6, gitleaks, and axe-core are open source. Nothing needs Docker.
- CI minutes: depends on Decision 2; the practice repository's workflow is small.
- ISTQB Certified Tester Foundation Level v4.0: the certification test fee for each participant, and the video training.
- ISTQB Certified Tester Advanced Level Test Automation Engineer: from £2,445 + VAT per participant for the QA 3-day course, which includes the exam voucher; about £29,340 + VAT for a cohort of 12. Check current prices.
- Lean Six Sigma Green Belt: course and certification exam fees for each participant, and the trainer if not in house (Decision 8). Choose a certificate that does not expire, and a body that allows a resit.
- Optional: a paid JavaScript course (Decision 3).
- External mentors for Band 7 participants, if no Band 8a lead is available.
