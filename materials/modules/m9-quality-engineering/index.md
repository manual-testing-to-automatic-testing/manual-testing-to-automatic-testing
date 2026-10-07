# M9 Quality engineering practice

Weeks 19–20. Reviewed at Gate 4.

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
| 1 | Week 19: maintainable test code: names, duplication, helpers, data builders | 1.5 hours | Core | Cohort |
| 2 | Week 19: flaky tests are variation: root causes and fixes | 1.5 hours | Core | Cohort |
| 3 | Week 19: flow metrics for testing | 1 hour | Core | Cohort |
| 4 | Week 20: AI assistants: drafting and explaining tests, and reviewing the output critically, including self-healing locators | 1 hour | Core | Cohort |
| 5 | Week 20: awareness: performance, load, and security testing, and who owns them | 45 minutes | Core | Cohort |
| 6 | Week 20: estimating test effort for the capstone | 1 hour | Core | Cohort |
| 7 | Week 19–20: flaky-test exercise, hands on | 2 hours | Breakout | B4-TE and above |
| 8 | Week 19–20: describe a flaky test with the mentor | 1 hour | Breakout | B3, B4-QA |
| 9 | Week 20: suite-health report | 2 hours | Breakout | B5-QA and above |
| 10 | Week 20: reviewing test pull requests, led by B7-TE | 1 hour | Breakout | B7-TE with others |

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

Compare the total with your protected hours in weeks 20 to 24. If it does not fit, cut scope with the product owner now, not in week 23.

## Assessment

E9 is assessed at Gate 4 (week 24), with E8 and E10.

## Resources

- [What metrics help automatic testing?](https://testingexamples.github.io/en-001/what-are-flow-metrics-for-automatic-testing/)
- [How does Six Sigma lead manual testing into automatic testing?](https://testingexamples.github.io/en-001/what-is-lean-six-sigma-for-automatic-testing/)
- [How does artificial intelligence help automatic testing?](https://testingexamples.github.io/en-001/how-does-artificial-intelligence-help-automatic-testing/)
- The flaky-test exercise: `practice-repo/tests/flaky/README.md`
- Selenium documentation, waits (most flaky Selenium tests are missing an explicit wait): <https://www.selenium.dev/documentation/webdriver/waits/>
