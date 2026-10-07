# Suite-health report

Evidence E9, part 2, for B5-QA and above. One page. It shows whether your suite is healthy, using simple flow metrics: measure what is actually moving, not how busy people look.

## Suite

| Field | Value |
| --- | --- |
| Suite | |
| Repository | |
| Period covered | from ______ to ______ (at least 2 weeks) |
| Number of tests | unit ___, API ___, browser ___ |

## Metrics

| Metric | How to measure | Value | Trend |
| --- | --- | --- | --- |
| **Defect to regression test** | For each defect fixed in the period: days from the defect being reported to a regression test for it existing in the suite. Report the median. | days | |
| **Quarantined or skipped tests** | Count tests marked `skip`, `fixme`, or quarantined, at the end of the period. Each needs an owner and a deadline. | | |
| **Suite run time** | Median CI run time for the full suite. | minutes | |
| **Failure causes** | For every CI failure in the period: product defect, test defect, or environment problem (from your M7 triage records). | product ___ / test ___ / environment ___ | |
| **Flaky rate** | Tests that failed and then passed with no change, divided by all test runs. | % | |
| **Manual regression time saved** (optional) | From E1: manual minutes per release for cases now automated. | minutes per release | |

## Quarantine list

| Test | Quarantined on | Owner | Deadline | Cause |
| --- | --- | --- | --- | --- |
| | | | | |

## What the numbers say

Three short points:

1. ______
2. ______
3. ______

## One action

The single change that would most improve this suite's health, with an owner and a date:

______

## Why this matters

A growing pile of skipped, quarantined, or flaky tests is work in progress that is not moving. It is testing debt, and it is measurable. "Time from a defect report to a regression test" is a concrete cycle time: if it is long, the same defect can come back unnoticed.

## Track notes

- **B5-QA (S):** cover your own tests from E5 and E6, with support.
- **B6-QA, B6-TE (I):** cover your area's suite.
- **B7-TE, B7-TM (L):** cover the team's suite, and propose which metrics the team should track every month. B7-TM brings this to L2 Automation strategy and metrics.
