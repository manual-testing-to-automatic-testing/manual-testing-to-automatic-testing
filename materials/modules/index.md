# Core module materials

These are the materials for the core modules M0 to M10. [../../spec/index.md](../../spec/index.md) is the single source of truth. If anything here disagrees with the spec, the spec wins, and the difference is a defect to fix.

| Module | Training days | Hours | Folder |
| --- | --- | --- | --- |
| M0 Induction and baseline | 1 | 6.5 | [m0-induction](m0-induction/index.md) |
| M1 Why and what to automate | 1–2 | 4.5 | [m1-why-and-what-to-automate](m1-why-and-what-to-automate/index.md) |
| M2 Programming foundations in JavaScript | 2–6 | 14.5 | [m2-programming-foundations](m2-programming-foundations/index.md) |
| M3 Version control and collaboration | 4–6 | 7 | [m3-version-control](m3-version-control/index.md) |
| M4 Browser automation fundamentals | 7–9 | 17.5 | [m4-browser-automation-fundamentals](m4-browser-automation-fundamentals/index.md) |
| M5 From walkthrough to real test | 10–12 | 12.5 | [m5-walkthrough-to-real-test](m5-walkthrough-to-real-test/index.md) |
| M6 API, integration, and FHIR tests | 13–15 | 15 | [m6-api-integration-fhir](m6-api-integration-fhir/index.md) |
| M7 Continuous integration and DevOps | 16–17 | 10 | [m7-continuous-integration](m7-continuous-integration/index.md) |
| M8 Safe and lawful test automation in health care | 18–19 | 7 | [m8-safe-and-lawful-automation](m8-safe-and-lawful-automation/index.md) |
| M9 Quality engineering practice | 19–20 | 6 | [m9-quality-engineering](m9-quality-engineering/index.md) |
| M10 Capstone | 20–24 | 27.5 | [m10-capstone](m10-capstone/index.md) |

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

A **training day** is 7.5 hours of protected learning time: 20% of a 37.5-hour working week. The programme is **24 training days**, one a week, so it runs over about 24 calendar weeks. That is 180 hours for every track. Tracks differ in depth, evidence, and capstone, not in hours. B3 and B4 may extend to 32 training days (240 hours); their gates then fall on training days 1, 8, 16, 24, and 32.

Every training day holds 7.5 hours of sessions, so session plans add up exactly. Besides the core modules, each day holds:

- **R1 role foundations:** 1 hour of each training day from training day 2 (the ILP meeting on training day 1 starts it): 23 hours.
- **R2 health care foundations:** 1 hour of each of training days 2 to 8: 7 hours.
- **Gates 1 to 4:** 2.5 hours each, on training days 6, 12, 18, and 24, for the self-assessment, calibration, and the Part D practical: 10 hours. Gate 0 is part of M0.
- **Real automation on the team's product:** 1.5 hours of each of training days 10 to 17: 12 hours. On training days 18 to 24, M8 and the capstone use the team's product directly.

| Training day | Core modules | R1 | R2 | Gate | Real automation | Total |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | M0 6.5, M1 1 | — | — | Gate 0 within M0 | — | 7.5 |
| 2 | M1 3.5, M2 2 | 1 | 1 | — | — | 7.5 |
| 3 | M2 5.5 | 1 | 1 | — | — | 7.5 |
| 4 | M2 3, M3 2.5 | 1 | 1 | — | — | 7.5 |
| 5 | M2 2.5, M3 3 | 1 | 1 | — | — | 7.5 |
| 6 | M2 1.5, M3 1.5 | 1 | 1 | Gate 1, 2.5 | — | 7.5 |
| 7 | M4 5.5 | 1 | 1 | — | — | 7.5 |
| 8 | M4 5.5 | 1 | 1 | — | — | 7.5 |
| 9 | M4 6.5 | 1 | — | — | — | 7.5 |
| 10 | M5 5 | 1 | — | — | 1.5 | 7.5 |
| 11 | M5 5 | 1 | — | — | 1.5 | 7.5 |
| 12 | M5 2.5 | 1 | — | Gate 2, 2.5 | 1.5 | 7.5 |
| 13 | M6 5 | 1 | — | — | 1.5 | 7.5 |
| 14 | M6 5 | 1 | — | — | 1.5 | 7.5 |
| 15 | M6 5 | 1 | — | — | 1.5 | 7.5 |
| 16 | M7 5 | 1 | — | — | 1.5 | 7.5 |
| 17 | M7 5 | 1 | — | — | 1.5 | 7.5 |
| 18 | M8 4 | 1 | — | Gate 3, 2.5, at the start of the day | — | 7.5 |
| 19 | M8 3, M9 3.5 | 1 | — | — | — | 7.5 |
| 20 | M9 2.5, M10 4 | 1 | — | — | — | 7.5 |
| 21 | M10 6.5 | 1 | — | — | — | 7.5 |
| 22 | M10 6.5 | 1 | — | — | — | 7.5 |
| 23 | M10 6.5 | 1 | — | — | — | 7.5 |
| 24 | M10 4 | 1 | — | Gate 4, 2.5 | — | 7.5 |
| **All** | **128** | **23** | **7** | **10** | **12** | **180** |

Track modules for B6 and B7 (L1 from training day 10; L4 for B6-QA from training day 13; L2, L3, and L5 from training day 16) take part of those tracks' breakout and real automation time. B3 does not take M6, so B3's M6 hours go to R1 and real automation at B3 depth.

Gate 5 is a follow-up about six months after Gate 4. It is not a training day.

Other people's time, per participant: the mentor gives 1.5 hours per training day for training days 1 to 6, then 1 hour per training day (about 27 hours); the line manager 1 hour every second training day plus 2 hours per gate (about 24 hours); developers about 1 hour per training day; the training lead half a day (3.75 hours) per training day for a cohort of up to 12.
