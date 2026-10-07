# M9 Quality engineering practice

Hours 135–150, about 6 hours. Reviewed at Gate 4.

## Purpose

A suite that nobody trusts is worse than no suite. M9 is about keeping automated tests worth having: maintainable code, flaky tests found and fixed at their root cause, and simple flow metrics that show whether the suite is healthy. It also prepares the capstone estimate.

## Outcomes

- **LO10:** diagnose flaky tests, and measure suite health with flow metrics.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M9 Quality engineering practice | R | R | S | S | I | I | L | L |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 135–142.5: maintainable test code: names, duplication, helpers, data builders | 1 hour | Core | Cohort |
| 2 | Hours 135–142.5: flaky tests are variation: root causes and fixes | 1 hour | Core | Cohort |
| 3 | Hours 135–142.5: flow metrics for testing | 30 minutes | Core | Cohort |
| 4a | Hours 135–142.5: flaky-test exercise, hands on | 1 hour | Breakout | B4-TE and above |
| 4b | Hours 135–142.5: describe a flaky test with the mentor | 1 hour | Breakout | B3, B4-QA |
| 5 | Hours 142.5–150: AI assistants: drafting and explaining tests, and reviewing the output critically, including self-healing locators | 30 minutes | Core | Cohort |
| 6 | Hours 142.5–150: awareness: performance, load, and security testing, and who owns them | 30 minutes | Core | Cohort |
| 7 | Hours 142.5–150: estimating test effort for the capstone | 30 minutes | Core | Cohort |
| 8a | Hours 142.5–150: suite-health report | 1 hour | Breakout | B5-QA, B6-QA, B6-TE, B7-TM |
| 8b | Hours 142.5–150: reviewing test pull requests, led by B7-TE, then B7-TE's own suite-health report | 1 hour | Breakout | B7-TE, with others |
| 8c | Hours 142.5–150: flaky-test follow-up with the mentor | 1 hour | Breakout | B3, B4-QA, B4-TE |

Each person's sessions add up to 6 hours: 3.5 hours in hours 135–142.5 and 2.5 hours in hours 142.5–150.

## Activities

1. Run the flaky-test exercise in `practice-repo/tests/flaky/` (see its README), and complete the [flaky-test investigation template](flaky-test-investigation.md).
2. Write the [suite-health report](suite-health-report.md) for your suites.
3. Review a test pull request from someone else for maintainability.
4. Ask an AI assistant to draft a test for one of your scenarios. Review it line by line. Does every assertion check what the scenario says? Would a self-healing locator pass on the wrong element?
5. Estimate the capstone: list each test, its layer, and its effort.

## Evidence

**E9:**

| Part | Tracks |
| --- | --- |
| A flaky-test investigation with root cause and fix | B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM. B3 and B4-QA describe one with the mentor. |
| A suite-health report using flow metrics (time from a defect report to a regression test, quarantined tests, run time, failure causes) | B5-QA, B6-QA, B6-TE, B7-TE, B7-TM |
| An effort estimate for the capstone | All tracks |

### Capstone estimate

| Test or task | Layer | Hours | Assumptions |
| --- | --- | --- | --- |
| | | | |
| **Total** | | | |

Compare the total with the capstone's hours: about 27.5 hours across hours 142.5–180. If it does not fit, cut scope with the product owner now, not in hours 165–172.5.

## Assessment

E9 is assessed at Gate 4 (hour 180), with E8 and E10.

## Resources

- [What metrics help automatic testing?](https://testingexamples.github.io/en-001/what-are-flow-metrics-for-automatic-testing/)
- [How does Six Sigma lead manual testing into automatic testing?](https://testingexamples.github.io/en-001/what-is-lean-six-sigma-for-automatic-testing/)
- [How does artificial intelligence help automatic testing?](https://testingexamples.github.io/en-001/how-does-artificial-intelligence-help-automatic-testing/)
- The flaky-test exercise: `practice-repo/tests/flaky/README.md`
- Selenium documentation, waits (most flaky Selenium tests are missing an explicit wait): <https://www.selenium.dev/documentation/webdriver/waits/>
