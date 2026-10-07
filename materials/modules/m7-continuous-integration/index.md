# M7 Continuous integration and DevOps

Weeks 16–17. Reviewed at Gate 3.

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
| 1 | Week 16: what CI is; reading a pipeline run, its logs, report, and traces | 2 hours | Core | Cohort |
| 2 | Week 16: failure triage: product defect, test defect, or environment problem | 1.5 hours | Core | Cohort |
| 3 | Week 16: pipeline configuration: caching, browsers, secrets, environment variables | 1.5 hours | Core | Cohort |
| 4 | Week 17: keeping pipelines fast; test selection and sharding | 1 hour | Core | Cohort |
| 5 | Week 17: flaky tests: quarantine with an owner and a deadline, never silent skips | 1 hour | Core | Cohort |
| 6 | Week 17: DevOps: feature flags, canary releases, monitoring as a complement to pre-release testing | 1 hour | Core | Cohort |
| 7 | Week 16–17: triage exercise on an existing pipeline | 3 hours | Breakout | B3, B4-QA, B4-TE, with mentor |
| 8 | Week 16–17: build the practice pipeline, and triage | 4 hours | Breakout | B5-QA, B6-QA, B6-TE, B7-TM |
| 9 | Week 16–17: team pipeline with sharding, test selection, and quarantine policy | 6 hours | Breakout | B7-TE, with the team |

L2, L3, and L5 for B6-QA and B7 also start in week 16. See `materials/tracks/`.

## Activities

1. Read a pipeline run: which step failed, the log, the HTML report, and the trace.
2. Triage real failures with [ci-failure-triage-template.md](ci-failure-triage-template.md).
3. B3 and B4: work through [triage-exercise.md](triage-exercise.md).
4. B5, B6, B7-TM: set up the practice repository pipeline from `practice-repo/.github/workflows/ci.yml`, run it on a pull request, and make it block the merge on failure.
5. B7-TE: do the same on the team's repository, with sharding, test selection, and a written quarantine policy.

## Evidence

**E7:** a CI pipeline that runs the person's suites on every pull request, publishes reports and traces, and blocks merging on failure, plus a written triage of real CI failures (product, test, or environment).

| Track | Evidence |
| --- | --- |
| B3, B4-QA, B4-TE | Triage of 3 failures in an existing pipeline; no pipeline change required |
| B5-QA, B6-QA, B6-TE, B7-TM | The pipeline on the practice repository, and 3 triaged failures |
| B7-TE | The pipeline on the team's repository, with sharding and test selection, and a quarantine policy for flaky tests |

## Assessment

Gate 3 (week 18) reviews E7 with E6. The Gate 3 Part D practical is "triage and fix a failing CI run".

## Resources

- [What is continuous integration automatic testing?](https://testingexamples.github.io/locales/en-001/what-is-continuous-integration-testing/)
- [What is DevOps for automatic testing?](https://testingexamples.github.io/locales/en-001/what-is-devops-for-automatic-testing/)
- Playwright continuous integration: <https://playwright.dev/docs/ci>
- Playwright sharding: <https://playwright.dev/docs/test-sharding>
- The practice pipeline: `practice-repo/.github/workflows/ci.yml`
- The organisation's CI documentation (Decision D2).
