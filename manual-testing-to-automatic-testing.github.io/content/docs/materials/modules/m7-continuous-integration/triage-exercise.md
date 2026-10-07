# Triage exercise for B3 and B4

Evidence E7 for **B3**, **B4-QA**, and **B4-TE**: triage of 3 failures in an existing pipeline. You do not need to change the pipeline.

Time: about 4 hours, in the breakouts in hours 112.5–127.5, with the mentor.

## Set-up (mentor)

The mentor prepares an existing pipeline, either the team's own or a copy of `practice-repo/.github/workflows/ci.yml`, with three pull requests that each fail in a different way:

| Pull request | Planted failure | Kind |
| --- | --- | --- |
| A | Changes the fixture page's expected text in a page object so a real assertion fails | Test defect |
| B | Points the base URL at a host that does not exist, using `FIXTURE_BASE_URL` | Environment problem |
| C | Changes a kata's code so it returns the wrong answer, with its unit test unchanged | Product defect |

If the team has real recent failures, use those instead. Real is better than planted.

## Steps (learner)

For each failed pull request:

1. Open the pipeline run. Find the step that failed.
2. Read the log. Copy the short error message.
3. Download the `test-results` artifact. Read the JUnit report, and open the screenshot and page source for each failed browser test.
4. Use the [triage template](ci-failure-triage-template.md) to decide the kind: product defect, test defect, or environment problem.
5. Write what you would do next, and who you would tell.
6. Explain your decision to the mentor.

B4-TE: for the test defect, also fix the test, push the fix, and show the pipeline go green.

## What good looks like

- Each failure has the right kind, with a reason based on evidence, not a guess.
- The product defect is raised as a clear defect report, with steps, data, and the screenshot and page source.
- Nothing is "fixed" by re-running until it passes.

## Track notes

- **B3 (S):** the mentor may navigate the CI tool with you. You make the triage decision.
- **B4-QA (S):** navigate the CI tool yourself, with the mentor alongside.
- **B4-TE (S):** as B4-QA, plus fix the test defect.
