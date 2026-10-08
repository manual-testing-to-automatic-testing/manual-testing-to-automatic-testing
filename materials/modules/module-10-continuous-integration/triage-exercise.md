# Triage exercise for Band 3 and Band 4

Evidence 10 for **Band 3**, **Band 4 quality assurance**, and **Band 4 test engineering**: triage of 3 failures in an existing pipeline. You do not need to change the pipeline.

Time: about 4 hours, in the breakouts in hours 172.5–187.5, with the mentor.

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

Band 4 test engineering: for the test defect, also fix the test, push the fix, and show the pipeline go green.

## What good looks like

- Each failure has the right kind, with a reason based on evidence, not a guess.
- The product defect is raised as a clear defect report, with steps, data, and the screenshot and page source.
- Nothing is "fixed" by re-running until it passes.

## Track notes

- **Band 3 (with support):** the mentor may navigate the CI tool with you. You make the triage decision.
- **Band 4 quality assurance (with support):** navigate the CI tool yourself, with the mentor alongside.
- **Band 4 test engineering (with support):** as Band 4 quality assurance, plus fix the test defect.
