# M7 Continuous integration and DevOps

Hours 112.5–127.5, about 10 hours. Reviewed at Gate 3.

## Purpose

A test suite that only runs on one laptop, when someone remembers, catches far less than one that runs on every change and blocks the merge if it fails. M7 puts each person's tests into CI, and teaches them to read CI failures the way they already read defects.

## Outcomes

- **LO7:** run suites in CI on every change, triage failures, and keep the suite fast and reliable.

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M7 Continuous integration and DevOps | S | S | S | I | I | I | L | I |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 112.5–120: what CI is; reading a pipeline run, its logs, the JUnit test report, and the screenshots and page source saved on failure | 1.5 hours | Core | Cohort |
| 2 | Hours 112.5–120: failure triage: product defect, test defect, or environment problem | 1 hour | Core | Cohort |
| 3 | Hours 112.5–120: pipeline configuration: caching, Chrome in headless mode, secrets, environment variables | 1 hour | Core | Cohort |
| 4 | Hours 120–127.5: keeping pipelines fast: test selection, and splitting test files across parallel CI jobs | 1 hour | Core | Cohort |
| 5 | Hours 120–127.5: flaky tests: quarantine with an owner and a deadline, never silent skips | 1 hour | Core | Cohort |
| 6 | Hours 120–127.5: DevOps: feature flags, canary releases, monitoring as a complement to pre-release testing | 30 minutes | Core | Cohort |
| 7a | Hours 112.5–127.5: triage exercise on an existing pipeline | 1.5 hours in hours 112.5–120, 2.5 hours in hours 120–127.5 | Breakout | B3, B4-QA, B4-TE, with mentor |
| 7b | Hours 112.5–127.5: build the practice pipeline, and triage | 1.5 hours in hours 112.5–120, 2.5 hours in hours 120–127.5 | Breakout | B5-QA, B6-QA, B6-TE, B7-TM |
| 7c | Hours 112.5–127.5: team pipeline with parallel jobs, test selection, and quarantine policy | 1.5 hours in hours 112.5–120, 2.5 hours in hours 120–127.5 | Breakout | B7-TE, with the team |

Each person's sessions add up to 10 hours: 5 hours in each of the blocks 112.5–120 and 120–127.5.


L2, L3, and L5 for B6-QA and B7 also start in hours 112.5–120, within their breakout time. See `materials/tracks/`.

## Activities

1. Read a pipeline run: which step failed, the log, the JUnit test report, and the screenshot and page source that the practice repository's `afterEach` hook saves into `test-results/` when a browser test fails.
2. Triage real failures with [ci-failure-triage-template.md](ci-failure-triage-template.md).
3. B3 and B4: work through [triage-exercise.md](triage-exercise.md).
4. B5, B6, B7-TM: set up the practice repository pipeline from `practice-repo/.github/workflows/ci.yml`, run it on a pull request, and make it block the merge on failure.
5. B7-TE: do the same on the team's repository, with test files split across parallel jobs (a job matrix), test selection, and a written quarantine policy.

## Evidence

**E7:** a CI pipeline that runs the person's suites on every pull request, publishes the JUnit report, screenshots, and page source, and blocks merging on failure, plus a written triage of real CI failures (product, test, or environment).

| Track | Evidence |
| --- | --- |
| B3, B4-QA, B4-TE | Triage of 3 failures in an existing pipeline; no pipeline change required |
| B5-QA, B6-QA, B6-TE, B7-TM | The pipeline on the practice repository, and 3 triaged failures |
| B7-TE | The pipeline on the team's repository, with parallel jobs and test selection, and a quarantine policy for flaky tests |

## Assessment

Gate 3 (hour 127.5) reviews E7 with E6. The Gate 3 Part D practical is "triage and fix a failing CI run".

## Resources

- [What is continuous integration automatic testing?](https://testingexamples.github.io/en-001/what-is-continuous-integration-testing/)
- [What is DevOps for automatic testing?](https://testingexamples.github.io/en-001/what-is-devops-for-automatic-testing/)
- Selenium documentation, headless Chrome and browser options: <https://www.selenium.dev/documentation/webdriver/browsers/chrome/>
- Mocha reporters and parallel mode: <https://mochajs.org/#reporters> and <https://mochajs.org/#parallel-tests>
- GitHub Actions, running jobs in a matrix: <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations>
- The practice pipeline: `practice-repo/.github/workflows/ci.yml`
- The organisation's CI documentation (Decision D2).
