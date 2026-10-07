# Stakeholder briefing

**For:** product owners, the clinical safety officer, the information governance lead, and developers on participants' teams. **Status:** draft.

We are running a programme of 24 training days, one a week, that helps manual testers at Bands 3 to 7 automate testing on their own teams' products. You will see real automated tests arrive in your repositories from training day 10. Here is what we ask of you. The full design is in [spec/index.md](../../spec/index.md).

## Product owners

| When | What | Time |
| --- | --- | --- |
| Before Gate 0 | Agree that the participant's delivery work drops by their protected time (one training day of 7.5 hours a week) | 30 minutes |
| Training days 10–12 (M5) | Review the participant's Given-When-Then scenarios for the manual tests they automate | 1 hour |
| Start of training day 20 (M10) | Agree the capstone scope: which product area, which manual cases | 1 hour |
| Training day 24 | Review and accept (or not) the capstone | 1 hour |

About 3 hours per participant, plus the capstone review.

## Clinical safety officer

| When | What | Time |
| --- | --- | --- |
| Training days 2–8 (R2) | Run a session on clinical risk management, and a hazard workshop with the cohort | About 4 hours |
| Before the cohort | Review the traceability matrix template in `materials/modules/m8-safe-and-lawful-automation/` | 30 minutes |
| Training days 18–19 (M8) | Run a session on automated tests as safety case evidence | About 2 hours |
| Training days 18–24 | Review each participant's traceability matrix, in writing | About 30 minutes each |

## Information governance lead

| When | What | Time |
| --- | --- | --- |
| Before Gate 0 | Confirm how assessment records are handled, and whether a data protection impact assessment is needed (see [hr-briefing.md](hr-briefing.md)) | 1 hour |
| Training days 2–8 (R2) and 18–19 (M8) | Run sessions on test data, personal data, and secrets in pipelines | About 3 hours |

All test data in the programme is synthetic. The practice repository scans for secrets and for NHS numbers outside the 999 test range.

## Developers

| When | What | Time |
| --- | --- | --- |
| Training day 2 (M1) | A workshop on what your existing unit and integration tests already cover | 1 hour |
| Training day 4 onwards | Review participants' pull requests to your repository | About 1 hour per training day |
| Training days 13–15 (M6) | Pair with a participant on API tests and moving a browser test down the pyramid | 2 hours |
| Gates 2 and 3, and Gate 4 panels | Join gate reviews; one developer from another team sits on each Gate 4 panel | About 3 hours |

## What you get

Automated regression tests for your product, running in CI, maintained by your own testers. Each test has a spec, uses synthetic data, and traces to the hazards it protects against.
