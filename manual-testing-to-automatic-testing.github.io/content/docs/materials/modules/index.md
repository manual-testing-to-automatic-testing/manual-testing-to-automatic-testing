# Core module materials

These are the materials for the core modules M0 to M10. [../../spec/index.md](../../spec/index.md) is the single source of truth. If anything here disagrees with the spec, the spec wins, and the difference is a defect to fix.

| Module | Programme hours | Hours | Folder |
| --- | --- | --- | --- |
| M0 Induction and baseline | 0–7.5 | 6.5 | [m0-induction](m0-induction/index.md) |
| M1 Why and what to automate | 0–15 | 4.5 | [m1-why-and-what-to-automate](m1-why-and-what-to-automate/index.md) |
| M2 Programming foundations in JavaScript | 7.5–45 | 14.5 | [m2-programming-foundations](m2-programming-foundations/index.md) |
| M3 Version control and collaboration | 22.5–45 | 7 | [m3-version-control](m3-version-control/index.md) |
| M4 Browser automation fundamentals | 45–67.5 | 17.5 | [m4-browser-automation-fundamentals](m4-browser-automation-fundamentals/index.md) |
| M5 From walkthrough to real test | 67.5–90 | 12.5 | [m5-walkthrough-to-real-test](m5-walkthrough-to-real-test/index.md) |
| M6 API, integration, and FHIR tests | 90–112.5 | 15 | [m6-api-integration-fhir](m6-api-integration-fhir/index.md) |
| M7 Continuous integration and DevOps | 112.5–127.5 | 10 | [m7-continuous-integration](m7-continuous-integration/index.md) |
| M8 Safe and lawful test automation in health care | 127.5–142.5 | 7 | [m8-safe-and-lawful-automation](m8-safe-and-lawful-automation/index.md) |
| M9 Quality engineering practice | 135–150 | 6 | [m9-quality-engineering](m9-quality-engineering/index.md) |
| M10 Capstone | 142.5–180 | 27.5 | [m10-capstone](m10-capstone/index.md) |

See also the [reading list](../reading-list.md) and the [accessibility check](../accessibility-check.md).

## How to read each module

Each module page has the same sections:

- **Purpose:** why the module exists.
- **Outcomes:** the learning outcomes (LO ids) from the spec.
- **Depth by track:** copied from the spec. **R** read and discuss, **S** apply with support, **I** apply independently, **L** apply and lead or coach others, **—** not taken.
- **Session plan:** sessions, durations, and format. **Core** sessions are shared by the whole cohort. **Breakout** sessions are for named tracks.
- **Activities.**
- **Evidence:** the evidence id (E0 to E10), with the variants for each track.
- **Assessment:** which gate reviews the evidence.
- **Resources.**

## Time

The programme is **180 hours** of protected learning time for every track. Tracks differ in depth, evidence, and capstone, not in hours. The default pace is 7.5 hours a week, 20% of a 37.5-hour working week, so the programme runs over about 24 calendar weeks; the learning agreement may set another pace. B3 and B4 may extend to 240 hours; their gates then fall at hours 0, 60, 120, 172.5, and 240.

The timeline is in programme hours, counted from 0. The table below splits the 180 hours into blocks of 7.5 hours (a week at the default pace), and every block adds up to 7.5 hours. Besides the core modules, the blocks hold:

- **R1 role foundations:** 1 hour in every 7.5 hours of learning from hour 7.5 (the ILP meeting in hours 0–7.5 starts it): 23 hours.
- **R2 health care foundations:** 1 hour in each block from hour 7.5 to hour 60: 7 hours.
- **Gates 1 to 4:** 2.5 hours each, at hours 45, 90, 127.5, and 180, for the self-assessment, calibration, and the Part D practical: 10 hours. Gate 0 is part of M0.
- **Real automation on the team's product:** 1.5 hours in each block from hour 67.5 to hour 127.5: 12 hours. From hour 127.5, M8 and the capstone use the team's product directly.

| Programme hours | Core modules | R1 | R2 | Gate | Real automation | Total |
| --- | --- | --- | --- | --- | --- | --- |
| 0–7.5 | M0 6.5, M1 1 | — | — | Gate 0 within M0 | — | 7.5 |
| 7.5–15 | M1 3.5, M2 2 | 1 | 1 | — | — | 7.5 |
| 15–22.5 | M2 5.5 | 1 | 1 | — | — | 7.5 |
| 22.5–30 | M2 3, M3 2.5 | 1 | 1 | — | — | 7.5 |
| 30–37.5 | M2 2.5, M3 3 | 1 | 1 | — | — | 7.5 |
| 37.5–45 | M2 1.5, M3 1.5 | 1 | 1 | Gate 1, 2.5 | — | 7.5 |
| 45–52.5 | M4 5.5 | 1 | 1 | — | — | 7.5 |
| 52.5–60 | M4 5.5 | 1 | 1 | — | — | 7.5 |
| 60–67.5 | M4 6.5 | 1 | — | — | — | 7.5 |
| 67.5–75 | M5 5 | 1 | — | — | 1.5 | 7.5 |
| 75–82.5 | M5 5 | 1 | — | — | 1.5 | 7.5 |
| 82.5–90 | M5 2.5 | 1 | — | Gate 2, 2.5 | 1.5 | 7.5 |
| 90–97.5 | M6 5 | 1 | — | — | 1.5 | 7.5 |
| 97.5–105 | M6 5 | 1 | — | — | 1.5 | 7.5 |
| 105–112.5 | M6 5 | 1 | — | — | 1.5 | 7.5 |
| 112.5–120 | M7 5 | 1 | — | — | 1.5 | 7.5 |
| 120–127.5 | M7 5 | 1 | — | — | 1.5 | 7.5 |
| 127.5–135 | M8 4 | 1 | — | Gate 3, 2.5, at hour 127.5, before M8 | — | 7.5 |
| 135–142.5 | M8 3, M9 3.5 | 1 | — | — | — | 7.5 |
| 142.5–150 | M9 2.5, M10 4 | 1 | — | — | — | 7.5 |
| 150–157.5 | M10 6.5 | 1 | — | — | — | 7.5 |
| 157.5–165 | M10 6.5 | 1 | — | — | — | 7.5 |
| 165–172.5 | M10 6.5 | 1 | — | — | — | 7.5 |
| 172.5–180 | M10 4 | 1 | — | Gate 4, 2.5 | — | 7.5 |
| **All** | **128** | **23** | **7** | **10** | **12** | **180** |

Track modules for B6 and B7 (L1 from hour 67.5; L4 for B6-QA from hour 90; L2, L3, and L5 from hour 112.5) take part of those tracks' breakout and real automation time. B3 does not take M6, so B3's M6 hours go to R1 and real automation at B3 depth.

Gate 5 is a follow-up about six months after Gate 4, outside the 180 hours.

Other people's time, per participant: the mentor gives 1.5 hours per 7.5 learning hours for hours 0–45, then 1 hour per 7.5 learning hours (about 27 hours); the line manager 1 hour per 15 learning hours plus 2 hours per gate (about 24 hours); developers about 1 hour per 7.5 learning hours; the training lead 3.75 hours per 7.5 cohort learning hours for a cohort of up to 12 (90 hours).
