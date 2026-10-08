# Module 13 Continuous integration and DevOps

Hours 200.5–215.5, about 10 hours. Reviewed at Gate 3.

## Purpose

A test suite that only runs on one laptop, when someone remembers, catches far less than one that runs on every change and blocks the merge if it fails. Module 13 puts each person's tests into CI, and teaches them to read CI failures the way they already read defects.

## Outcomes

- **Learning outcome 7:** run suites in CI on every change, triage failures, and keep the suite fast and reliable.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 13 Continuous integration and DevOps | With support | With support | With support | Independent | Independent | Independent | Lead or coach | Independent |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 200.5–208: what CI is; reading a pipeline run, its logs, the JUnit test report, and the screenshots and page source saved on failure | 1.5 hours | Core | Cohort |
| 2 | Hours 200.5–208: failure triage: product defect, test defect, or environment problem | 1 hour | Core | Cohort |
| 3 | Hours 200.5–208: pipeline configuration: caching, Chrome in headless mode, secrets, environment variables | 1 hour | Core | Cohort |
| 4 | Hours 208–215.5: keeping pipelines fast: test selection, and splitting test files across parallel CI jobs | 1 hour | Core | Cohort |
| 5 | Hours 208–215.5: flaky tests: quarantine with an owner and a deadline, never silent skips | 1 hour | Core | Cohort |
| 6 | Hours 208–215.5: DevOps: feature flags, canary releases, monitoring as a complement to pre-release testing | 30 minutes | Core | Cohort |
| 7a | Hours 200.5–215.5: triage exercise on an existing pipeline | 1.5 hours in hours 200.5–208, 2.5 hours in hours 208–215.5 | Breakout | Band 3, Band 4 quality assurance, Band 4 test engineering, with mentor |
| 7b | Hours 200.5–215.5: build the practice pipeline, and triage | 1.5 hours in hours 200.5–208, 2.5 hours in hours 208–215.5 | Breakout | Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test management |
| 7c | Hours 200.5–215.5: team pipeline with parallel jobs, test selection, and quarantine policy | 1.5 hours in hours 200.5–208, 2.5 hours in hours 208–215.5 | Breakout | Band 7 test engineering, with the team |

Each person's sessions add up to 10 hours: 5 hours in each of the blocks 112.5–120 and 120–127.5.


Automation strategy and metrics, Frameworks and non-functional testing, and Leading teams through automation adoption for Band 6 quality assurance and Band 7 also start in hours 200.5–208, within their breakout time. See `materials/tracks/`.

## Activities

1. Read a pipeline run: which step failed, the log, the JUnit test report, and the screenshot and page source that the practice repository's `afterEach` hook saves into `test-results/` when a browser test fails.
2. Triage real failures with [ci-failure-triage-template.md](ci-failure-triage-template.md).
3. Band 3 and Band 4: work through [triage-exercise.md](triage-exercise.md).
4. Band 5, Band 6, Band 7 test management: set up the practice repository pipeline from `practice-repo/.github/workflows/ci.yml`, run it on a pull request, and make it block the merge on failure.
5. Band 7 test engineering: do the same on the team's repository, with test files split across parallel jobs (a job matrix), test selection, and a written quarantine policy.

## Evidence

**Evidence 13:** a CI pipeline that runs the person's suites on every pull request, publishes the JUnit report, screenshots, and page source, and blocks merging on failure, plus a written triage of real CI failures (product, test, or environment).

| Track | Evidence |
| --- | --- |
| Band 3, Band 4 quality assurance, Band 4 test engineering | Triage of 3 failures in an existing pipeline; no pipeline change required |
| Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test management | The pipeline on the practice repository, and 3 triaged failures |
| Band 7 test engineering | The pipeline on the team's repository, with parallel jobs and test selection, and a quarantine policy for flaky tests |

## Assessment

Gate 3 (hour 215.5) reviews Evidence 13 with Evidence 12. The Gate 3 Part D practical is "triage and fix a failing CI run".

## Resources

- [What is continuous integration automatic testing?](https://testingexamples.github.io/en-001/what-is-continuous-integration-testing/)
- [What is DevOps for automatic testing?](https://testingexamples.github.io/en-001/what-is-devops-for-automatic-testing/)
- Selenium documentation, headless Chrome and browser options: <https://www.selenium.dev/documentation/webdriver/browsers/chrome/>
- Mocha reporters and parallel mode: <https://mochajs.org/#reporters> and <https://mochajs.org/#parallel-tests>
- GitHub Actions, running jobs in a matrix: <https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations>
- The practice pipeline: `practice-repo/.github/workflows/ci.yml`
- The organisation's CI documentation (Decision 2).
