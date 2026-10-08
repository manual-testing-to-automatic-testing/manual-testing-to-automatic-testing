# Contributing

This is a practice repository for the training programme. The same rules
apply here as on your team's real repository, so that practice builds habits.

## Branches

- Never commit directly to `main`.
- Create one branch per change: `<your-initials>/<module>-<short-description>`,
  for example `ab/module-11-select-tests`.
- Keep branches short-lived: open a pull request within a few days.

## Commits

- One logical change per commit.
- Write the subject in the imperative, under 72 characters:
  "Add select option tests", not "added some tests".
- Use the body to say **why**, if it is not obvious.

## Pull requests

- Fill in the pull request template, including the checklist.
- Ask your mentor to review. From Module 9 onwards, also review someone else's.
- CI must be green before merging.

## Reviewing

- Review the change, not the person. Ask questions rather than give orders:
  "Could this locator break if the button text changes?"
- Say what is good, as well as what to change.
- Mark comments as **must**, **should**, or **could**, so the author knows
  what blocks the merge.
- Approve when the must-fix comments are done. Small follow-ups can be a new
  pull request.

When your change is reviewed:

- Reply to every comment, even if only "Done".
- Disagree openly, with reasons. The aim is the best test, not winning.

## Test data and secrets

- **Never use real patient data**, anywhere: not in tests, fixtures,
  screenshots, logs, or commit messages.
- Use synthetic data only. NHS numbers must come from the 999 test range and
  pass the modulus 11 check (see kata 07).
- **Never commit secrets**: passwords, tokens, API keys, or connection
  strings. Use environment variables, and keep `.env` files out of git.
- CI scans every change with gitleaks. If it finds something, do not just
  delete it in a new commit: tell your mentor, because it is still in the
  history and must be treated as exposed.

## Tests

- Every test must make real assertions. A script that only acts and prints is
  a walkthrough, not a test.
- Prefer ids and agreed test ids, then CSS and link text. Use XPath last.
  Keep locators and waits in page objects, not in the tests.
- Never use fixed sleeps. Wait explicitly for the condition you need, with `driver.wait(until...)`, and quit the driver in an `after` hook.
- Never skip a failing test silently. Quarantine it with an owner and a date,
  and raise a defect.
