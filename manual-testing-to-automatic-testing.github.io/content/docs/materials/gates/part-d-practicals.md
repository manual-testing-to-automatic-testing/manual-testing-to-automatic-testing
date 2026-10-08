# Part D practicals

Part D is a short, supervised automation practical at Gates 1 to 5. It shows what the person can do, live, without long preparation. It is reported separately from the capability index.

- **Timing:** 30 minutes for Band 3, Band 4 quality assurance, and Band 4 test engineering. 60 minutes for Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering, and Band 7 test management.
- **Rating:** Meets, Partly, or Not yet.
- **Thresholds:** Partly or better at Gates 1 and 2. Meets at Gates 3, 4, and 5.
- **Supervisor:** the mentor, or another reviewer from the gate, who is not the person's line manager where possible.
- **Help allowed:** documentation, the person's own notes and code, and the testingexamples skills. AI assistants are allowed only if the person explains every line they submit (spec Principle 15). The supervisor answers questions about the task, not about the solution.
- **Accessibility:** reasonable adjustments in the individual learning plan apply, for example extra time or a spoken explanation instead of a written one.

Gate 0 has no Part D. The Module 0 diagnostic coding exercise is unscored and only tunes Module 2 pacing.

## Common marking notes

For every practical:

- **Meets:** the task is done, the result is correct, and the person can explain every step and every line in their own words. Any test written makes real assertions that would fail if the behaviour were wrong.
- **Partly:** the main part of the task is done, but with a gap: an assertion is missing or weak, a step needed a hint, or the explanation is incomplete.
- **Not yet:** the task is not done, the result is wrong, or the person cannot explain what they did.

A walkthrough that acts on a page and prints output, without assertions, is never Meets (spec Principle 12).

## Setup checklist for supervisors

- [ ] The person's development environment works (Node.js 24, Chrome, VS Code, git), and `npm run test:katas` passes. Selenium Manager downloads the Chrome driver on the first browser run.
- [ ] The practice repository is cloned, and a branch for the practical is ready.
- [ ] For Gate 3: a CI run that fails for a known reason is prepared on the practice repository.
- [ ] For Gate 3 Band 6 and Band 7, and any API task: the FHIR sandbox starts with `npm run fhir` (the API tests also start it themselves). It needs no Docker.
- [ ] A timer is set, and reasonable adjustments are applied.
- [ ] The marking notes for the person's track are to hand.

## Gate 1 (hour 45): fix a failing unit test and open a pull request

**Setup:** a small JavaScript kata in the practice repository (`src/katas/`) with a Mocha test in `tests/katas/` that fails because of a bug in the code, not in the test. The bug suits the track:

- Band 3, Band 4: an off-by-one error in a function that counts items in a list.
- Band 5, Band 6, Band 7 test management: a date-of-birth validator that wrongly accepts a future date.
- Band 7 test engineering: an NHS number check-digit function that fails for one valid edge case, and a test name that hides the real case.

**Task:** run `npm run test:katas`, read the Mocha failure and the `node:assert/strict` message, find and fix the bug, run the tests again, commit with a clear message, and open a pull request that explains the change.

| Track | Meets | Partly | Not yet |
| --- | --- | --- | --- |
| Band 3 | With prompts allowed, runs the tests, explains the failure message, and makes the fix and pull request with the supervisor's guidance on git. | Explains the failure, but needs the fix shown. | Cannot run the tests or explain the failure. |
| Band 4 quality assurance, Band 4 test engineering | Fixes the bug and opens the pull request, with at most one hint. | Fixes the bug, but needs help with git or the pull request. | Cannot find the bug. |
| Band 5 quality assurance, Band 6 quality assurance, Band 7 test management | Fixes the bug without hints, adds one more test for the edge case, and writes a clear pull request. | Fixes the bug but adds no extra test, or the pull request is unclear. | Cannot fix the bug in time. |
| Band 6 test engineering | As Band 5, and the new test name describes the behaviour. | As Band 5 Partly. | As Band 5 Not yet. |
| Band 7 test engineering | Fixes the bug, renames the misleading test, adds edge-case tests, and explains in the pull request why the old test hid the bug. | Fixes the bug but leaves the test misleading. | Cannot fix the bug in time. |

## Gate 2 (hour 90): automate one given manual test case on the fixture site

**Setup:** a written manual test case for <https://testingexamples.github.io>, for example: "Fill the text input with `hello`, check the checkbox, choose the first radio option, and select the first option in the select list. Expect each control to show the new value."

**Task:** automate it as a Mocha test with Selenium and `node:assert/strict`, in `tests/ui/`. Wait explicitly with `driver.wait(until…)` wherever the page could change, never with a sleep, and quit the driver in an `after` hook. Then show the test failing when an expected value is changed.

| Track | Meets | Partly | Not yet |
| --- | --- | --- | --- |
| Band 3 | Writes the case as a Given-When-Then scenario, then pairs with the supervisor to automate it, choosing the `By` locators and assertions and explaining each line. | Writes a good scenario, but cannot choose locators or assertions in the pairing. | Cannot write the scenario. |
| Band 4 quality assurance, Band 4 test engineering | Automates the case with at least one assertion per control (for example `isSelected()` for the checkbox, `getAttribute('value')` for the text input), using one hint at most, and shows it failing when an expected value is wrong. | Automates the actions but misses assertions, adds a sleep instead of an explicit wait, or needs several hints. | Produces a walkthrough without assertions, or no working script. |
| Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test management | Automates the case independently, with resilient locators (`By.id`, `By.name`, or a short CSS selector, not a long XPath), explicit waits where needed, an assertion per behaviour, the `Select` helper for the select list, and a `spec/index.md` entry that matches. Shows it failing. | Test works but uses brittle locators, a sleep, misses the spec entry, or misses one assertion. | Walkthrough only, or the test does not run. |
| Band 7 test engineering | As Band 5 Meets, and extracts a page object (a JavaScript class like `tests/ui/pages/fixture-page.js`) and a shared driver helper so a second test can reuse them, and explains the trade-off. | As Band 5 Meets, without the page object or helper. | As Band 5 Partly or worse. |

## Gate 3 (hour 127.5): triage and fix a failing CI run

**Setup:** a CI run on the practice repository that fails for one prepared reason. Use a different reason for each person in a cohort, drawn from: a product defect (the page or API changed behaviour), a test defect (a brittle locator, or a missing explicit wait that gives a `NoSuchElementError` or `StaleElementReferenceError`), or an environment problem (a missing secret, Chrome not installed, or the FHIR sandbox port already in use).

**Task:** read the CI output and artifacts (the Mocha log, the JUnit XML report, and the failure screenshot and page source that the `afterEach` hook saves to `test-results/`), classify the failure as product, test, or environment, and act: fix the test or pipeline, or raise a clear defect report. Band 6 and Band 7 tracks also add one API test against the FHIR sandbox, as a Mocha test using the built-in `fetch`.

| Track | Meets | Partly | Not yet |
| --- | --- | --- | --- |
| Band 3, Band 4 quality assurance | Classifies the failure correctly from the log, screenshot, or page source, and writes a clear defect report or fix request with steps, data, and evidence. | Classifies correctly but the report lacks evidence. | Cannot classify the failure. |
| Band 4 test engineering | Classifies correctly and fixes a test defect, or raises a clear defect report for a product or environment problem. | Classifies correctly but needs help with the fix. | Cannot classify the failure. |
| Band 5 quality assurance | Classifies, fixes or reports, and re-runs the pipeline to green where the fix is theirs to make. | Classifies and reports, but cannot fix a test defect. | Cannot classify the failure. |
| Band 7 test management | As Band 5 quality assurance Meets, and adds one API test that reads a synthetic `Patient` with `fetch` and checks the status and body with `assert`. Because Module 6 is read-only for Band 7 test management, one hint is allowed on the API test. | Triage is Meets, but the API test needs several hints or is incomplete. | Triage is not Meets. |
| Band 6 quality assurance, Band 6 test engineering | As Band 5 Meets, and adds one API test that reads a synthetic `Patient` with `fetch` and checks the status and body with `assert`. | Triage is Meets, but the API test is incomplete. | Triage is not Meets. |
| Band 7 test engineering | As Band 6 Meets, and proposes a pipeline change that would catch or prevent this failure earlier, such as a quarantine rule or a smoke stage. | As Band 6 Meets, without the proposal. | As Band 6 Partly or worse. |

## Gate 4 (hour 180): live run and explanation of the capstone

**Setup:** the person's capstone suite in the team's repository or practice repository, with CI. Run in front of the [Gate 4 panel](gate-4-panel-guide.md).

**Task:** run the suite live, explain what it covers and what stays manual, and then make one small change the panel asks for, such as adding an assertion, changing an expected value to show a failure, or explaining one test line by line.

| Track | Meets | Partly | Not yet |
| --- | --- | --- | --- |
| Band 3 | Runs the existing suite, explains the results, walks through their Given-When-Then scenarios, and makes the panel's small change with pairing. | Runs and explains, but cannot make the change. | Cannot run or explain the suite. |
| Band 4 quality assurance, Band 4 test engineering | Runs their capstone tests, explains them, and makes the change with one hint at most. | Runs and explains, but needs several hints. | Cannot run or explain the tests. |
| Band 5 quality assurance, Band 6 test engineering | Runs, explains coverage and residual risks, and makes the change independently. | Needs a hint for the change, or cannot explain residual risk. | Cannot make the change or explain the tests. |
| Band 6 quality assurance | As Band 5 Meets, and explains the risk-based approach and how acceptance checks were agreed with clinical users. | As Band 5 Meets, without a clear risk-based explanation. | As Band 5 Partly or worse. |
| Band 7 test engineering | As Band 5 Meets, and explains the framework design, the performance test, and how others now use them. | As Band 5 Meets, but framework or performance work is unclear. | As Band 5 Partly or worse. |
| Band 7 test management | Runs their own small suite and makes the change, then explains the strategy, metrics, and adoption plan, and how a manager would use the metrics to decide. | Strategy is strong, but own suite or change needs help. | Cannot run their own suite or explain the strategy. |

## Gate 5 (about six months after Gate 4): demonstrate a recent automated change

**Setup:** a pull request the person merged in the last 3 months, in normal work.

**Task:** walk through the pull request: why it was needed, what it tests, how it was reviewed, how it runs in CI, and how it traces to risk or hazards. Then make one small follow-on change live.

| Track | Meets | Partly | Not yet |
| --- | --- | --- | --- |
| Band 3 | Shows a small reviewed change to a test or scenario, explains it, and makes the follow-on change with pairing. | Explains it but cannot make the follow-on change. | No recent change, or cannot explain it. |
| Band 4 quality assurance, Band 4 test engineering | Shows a test they wrote or maintained, explains it, and makes the follow-on change with one hint at most. | Needs several hints. | No recent change, or cannot explain it. |
| Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test management | Shows a test or suite change that runs in CI, explains its risk and traceability, and makes the follow-on change independently. | Explains it well, but the follow-on change needs help. | No recent change in CI, or cannot explain it. |
| Band 7 test engineering | As Band 5 Meets, and shows how the change was reused or reviewed by others. | As Band 5 Meets, without reuse or coaching. | As Band 5 Partly or worse. |

## Band 3

Band 3 practicals are 30 minutes. See the Band 3 rows in each gate above.

## Band 4 quality assurance

Band 4 quality assurance practicals are 30 minutes. See the Band 4 quality assurance rows in each gate above.

## Band 4 test engineering

Band 4 test engineering practicals are 30 minutes. See the Band 4 test engineering rows in each gate above.

## Band 5 quality assurance

Band 5 quality assurance practicals are 60 minutes. See the Band 5 quality assurance rows in each gate above.

## Band 6 quality assurance

Band 6 quality assurance practicals are 60 minutes. See the Band 6 quality assurance rows in each gate above.

## Band 6 test engineering

Band 6 test engineering practicals are 60 minutes. See the Band 6 test engineering rows in each gate above.

## Band 7 test engineering

Band 7 test engineering practicals are 60 minutes. See the Band 7 test engineering rows in each gate above.

## Band 7 test management

Band 7 test management practicals are 60 minutes. See the Band 7 test management rows in each gate above.
