# Stakeholder briefing

**For:** product owners, the clinical safety officer, the information governance lead, and developers on participants' teams. **Status:** draft.

We are running a programme of 320 hours of protected learning time, by default 7.5 hours a week, that helps manual testers at Bands 3 to 7 automate testing on their own teams' products. You will see real automated tests arrive in your repositories from hour 160.5. Here is what we ask of you. The full design is in [spec/index.md](../../spec/index.md).

## Product owners

| When | What | Time |
| --- | --- | --- |
| Before Gate 0 | Agree that the participant's delivery work drops by their protected time (7.5 hours a week) | 1 hour |
| Hours 160.5–183 (Module 11) | Review the participant's Given-When-Then scenarios for the manual tests they automate | 1 hour |
| Hour 237.5 (Module 16) | Agree the capstone scope: which product area, which manual cases | 1 hour |
| Hour 279.5 (Gate 4) | Review and accept (or not) the capstone | 1 hour |
| Hours 279.5–320 (Module 17) | Sponsor the participant's Lean Six Sigma Green Belt project: agree its charter, and review its result | 1 hour |

About 4 hours per participant, plus the capstone review.

## Clinical safety officer

| When | What | Time |
| --- | --- | --- |
| Hours 97.5–152.5 (Health care foundations) | Run a session on clinical risk management, and a hazard workshop with the cohort | About 3 hours |
| Before the cohort | Review the traceability matrix template in `materials/modules/module-14-safe-and-lawful-automation/` | 1 hour |
| Hours 221.5–237.5 (Module 14) | Run a session on automated tests as safety case evidence, and a traceability working session | About 2.5 hours |
| Hours 221.5–279.5 | Review each participant's traceability matrix, in writing | About 1 hour each |

## Information governance lead

| When | What | Time |
| --- | --- | --- |
| Before Gate 0 | Confirm how assessment records are handled, and whether a data protection impact assessment is needed (see [hr-briefing.md](hr-briefing.md)) | 1 hour |
| Hours 97.5–152.5 (Health care foundations) and 127.5–142.5 (Module 14) | Run sessions on test data, personal data, and secrets in pipelines | About 3 hours |

All test data in the programme is synthetic. The practice repository scans for secrets and for NHS numbers outside the 999 test range.

## Developers

| When | What | Time |
| --- | --- | --- |
| Hours 97.5–106 (Module 7) | A workshop on what your existing unit and integration tests already cover | 1 hour |
| From hour 113.5 | Review participants' pull requests to your repository | About 1 hour per 7.5 learning hours |
| Hours 183–206 (Module 12) | Pair with a participant on API tests and moving a browser test down the pyramid | 2 hours |
| Gates 2 and 3, and Gate 4 panels | Join gate reviews; one developer from another team sits on each Gate 4 panel | About 3 hours |

## What you get

Automated regression tests for your product, running in CI, maintained by your own testers. Each test has a spec, uses synthetic data, and traces to the hazards it protects against.
