# Gates

Gates are the backbone of the programme.

## What happens at every gate

Every gate:

1. repeats the **full capability self-assessment** (Parts A, B, and C) for the person's track, using the track's file in `instruments/`, such as `instruments/band-5-quality-assurance-test-analyst.tsv` (see `instruments/README.md`)
2. calibrates the ratings: the person rates first, the line manager rates independently, and they agree each rating with evidence (see the [calibration guide](calibration-guide.md))
3. adds the **Part D practical** from Gate 1 (see [Part D practicals](part-d-practicals.md))
4. reviews the module evidence for that gate
5. updates the [individual learning plan](individual-learning-plan-template.md)
6. is recorded on the [gate review form](gate-review-form.md).

Gate results are developmental only. They never start a capability, performance, or conduct procedure by themselves (spec Principle 14).

## Schedule

| Gate | Programme hour | Module evidence | Part D practical | Reviewers |
| --- | --- | --- | --- | --- |
| Gate 0 | 0 | Evidence 0 | — (unscored diagnostic only) | Person, line manager, training lead |
| Gate 1 | 45 | Evidence 1–3 | Fix a failing unit test and open a pull request | Line manager, mentor |
| Gate 2 | 90 | Evidence 4–5 | Automate one given manual test case on the fixture site (Band 3: write it as Given-When-Then and pair) | Line manager, mentor, a developer |
| Gate 3 | 127.5 | Evidence 6–7 | Triage and fix a failing CI run (Band 6 and Band 7 test engineering: plus an API test; Band 7 test management: plus reading and explaining an API test failure) | Line manager, mentor, training lead |
| Gate 4 | 180 | Evidence 8–10 | Live run and explanation of the capstone | Gate 4 panel |
| Certification | By 220 | Evidence 11 | The Lean Six Sigma Green Belt certification exam, set by the certification body (Decision 8) | Certification body; the training lead and mentor review the Green Belt project |
| Gate 5 | About six months after Gate 4, outside the 220 hours | Six months of work | Demonstrate a recent automated change | Line manager, training lead |

With the optional extension to 280 hours for Band 3 and Band 4, the gates move to hours 0, 60, 120, 172.5, and 240, Module 11 runs in hours 240–280, and Gate 5 follows about six months after Gate 4.

## Thresholds

Using agreed ratings and the capability index:

| Gate | Parts A, B, C (each) | Part D | Other conditions |
| --- | --- | --- | --- |
| Gate 0 | Baseline, no threshold | — | Individual learning plan agreed and signed |
| Gate 1 | At least 60% | Partly or better | No item lower than at Gate 0 without an agreed reason |
| Gate 2 | At least 70% | Partly or better | Clinical risk management and information governance meet expectations |
| Gate 3 | At least 80% | Meets | Test engineering at least one level below the automation target, or at it |
| Gate 4 | At least 90% | Meets | No skill more than one level below expected; test engineering at the automation target; capstone accepted by the product owner |
| Gate 5 | At least 90%, sustained | Meets | Plan agreed for any remaining gaps, aiming for 100% by the next annual appraisal |

## Capability index

For each part, the capability index is the percentage of items rated **Meets**, using agreed ratings. **Partly counts as half.** The overall index is the mean of Parts A, B, and C. Part D is reported separately.

Worked example: Part B has 16 items. 9 are Meets, 4 are Partly, and 3 are Not yet. The index is (9 + 4 × 0.5) ÷ 16 = 68.75%.

For Part C, a skill **meets** when the gap (expected level minus agreed rating) is 0 or less, is **Partly** when the gap is 1, and is **Not yet** when the gap is 2 or more.

`scripts/capability_index.py` calculates the index from a completed instrument file.

## If a gate is not met

1. The person gets up to 22.5 extra learning hours on the items below threshold, with a written plan and extra mentor time, and the gate is repeated once.
2. If the repeated gate is still not met, the person, line manager, and training lead agree a next step. That may be the extension to 280 hours, a different automation target, more Role foundations support, or pausing the programme.
3. None of these is a capability or performance procedure.

## Completion

A person completes the programme when every threshold for Gate 4 is met, and they hold the Lean Six Sigma Green Belt certification with an accepted Green Belt project (Evidence 11, module [Module 11](../modules/module-11-lean-six-sigma-green-belt/index.md)). If the exam is not passed, there is one resit, within three months. Gate 5 confirms that the capability holds in normal work.

## Materials

- [Part D practicals](part-d-practicals.md)
- [Gate review form](gate-review-form.md)
- [Calibration guide](calibration-guide.md)
- [Gate 4 panel guide](gate-4-panel-guide.md)
- [Participant feedback form](participant-feedback-form.md)
- [Learning log template](learning-log-template.md)
- [Individual learning plan template](individual-learning-plan-template.md)
- [Learning agreement template](learning-agreement-template.md)
