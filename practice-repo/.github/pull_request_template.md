## What this change does

<!-- One or two sentences. Link the manual test case, user story, or defect. -->

## Module and evidence

<!-- For example: Module 8, Evidence 8. -->

## Checklist

- [ ] Every new test makes real assertions, and I have seen each one fail when the behaviour is wrong
- [ ] `spec/index.md` for this suite agrees with the code
- [ ] Only synthetic test data; any NHS numbers are from the 999 test range
- [ ] No secrets, tokens, or passwords
- [ ] No `it.only`, no fixed sleeps: every wait is explicit, with `driver.wait(until...)`
- [ ] `npm run typecheck`, `npm run lint`, and the relevant tests pass locally
- [ ] Traceability: the hazards or safety controls this test covers, if any, are listed below

## Hazards and safety controls covered

<!-- Hazard log ids, or "none". -->

## Notes for the reviewer

<!-- Anything you are unsure about, or want feedback on. -->
