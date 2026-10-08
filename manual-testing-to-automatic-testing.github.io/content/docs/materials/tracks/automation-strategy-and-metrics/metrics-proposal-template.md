# Metrics proposal: <area name>

| Field | Entry |
| --- | --- |
| Author | |
| Track | Band 6 quality assurance / Band 7 test engineering / Band 7 test management |
| Area covered | |
| Version and date | |

## 1. Purpose

What decisions these metrics will help people make. A metric that informs no decision is not worth collecting.

## 2. Principles

- Measure what is actually moving, not how busy people look.
- Prefer flow and outcome measures over activity counts, such as "number of tests written".
- Collect from existing tools where possible.
- Never use these metrics to rate individuals.

## 3. Proposed metrics

Start from these and choose the ones that fit:

| Metric | Definition | Why it matters | Source | Owner | Baseline | Target | Decision it supports |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Defect to regression test cycle time | Time from a defect being reported to an automated regression test existing for it | Shows how quickly lessons become protection | Defect tracker and git history | | | | |
| Manual regression hours per release | Hours of manual regression testing for each release | Shows the payback of automation | Test plans or timesheets | | | | |
| Automated coverage of the regression pack | Share of "automate" cases from the Module 5 analysis now automated | Tracks the strategy's progress | Module 5 analysis and repository | | | | |
| Pyramid shape | Number of tests at unit, API and integration, and browser layers | Shows whether tests are being pushed down | Repository | | | | |
| Suite run time | Time for the pull request suite to run in CI | Slow suites get skipped | CI | | | | |
| Quarantined or skipped tests | Count, and how long each has been quarantined | A growing pile is testing debt, work in progress that is not moving | Repository and CI | | | | |
| CI failure causes | Share of failures by product, test, or environment | Shows where to invest | CI triage notes | | | | |
| Escaped defects | Defects found after release, by severity | Outcome of the whole test approach | Incident and defect records | | | | |
| Traceability coverage | Share of hazard log controls with at least one automated test | Safety case evidence | Traceability matrix | | | | |

## 4. Collection and reporting

How often each metric is collected, where it is shown, and who reviews it.

## 5. Risks of these metrics

How each could be gamed or misread, and how to prevent that.

## 6. Review

When the metrics themselves will be reviewed, and how a metric is retired.
