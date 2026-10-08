# Automation strategy: <area name>

| Field | Entry |
| --- | --- |
| Author | |
| Track | Band 6 quality assurance / Band 7 test engineering / Band 7 test management |
| Area covered | |
| Version and date | |
| Reviewed by | |

## 1. Summary

In three or four sentences: what this strategy changes, why, and what it will achieve in 12 months.

## 2. Context

- The products and services in scope, and who uses them.
- The current state: how many manual regression cases, how long a regression run takes, which automated tests exist at each layer (from the Module 1 analyses).
- Clinical and operational risks that matter most (from the hazard log).
- Constraints: environments, data, tools, people, regulation (for example IEC 62304).

## 3. Goals

| Goal | Measure | Baseline | Target | By when |
| --- | --- | --- | --- | --- |
| | | | | |

Link each measure to the [metrics proposal](metrics-proposal-template.md).

## 4. Principles

Start from these and adapt:

- Test by risk, including clinical risk.
- Push tests down the pyramid: unit, then API and integration, then a small number of browser tests for critical user journeys.
- Every automated test makes real assertions, and every suite has a spec that agrees with its code.
- Synthetic data only. No secrets in source control.
- Automated tests trace to hazards and safety controls, and their results are kept as safety case evidence.
- The whole team owns quality.

## 5. What to automate, and at which layer

| Area or journey | Risk | Layer | Keep manual? | Why |
| --- | --- | --- | --- | --- |
| | | Unit / API / Browser | | |

## 6. What stays manual

Exploratory, usability, accessibility judgement, and acceptance by clinical users. Say how manual and automated testing work together.

## 7. Tools and frameworks

Tools (default: JavaScript with Selenium and Mocha, the organisation's CI service), shared helpers or frameworks (see Frameworks and non-functional testing), and how existing suites in other tools are handled.

## 8. Pipelines

Which suites run on every pull request, which run nightly, and which block a merge or release. How flaky tests are quarantined, with an owner and a deadline.

## 9. Test data and environments

How synthetic data is generated and maintained, including rare and edge clinical cases. Which environments run which suites.

## 10. Traceability and evidence

How tests link to the hazard log, and how results are kept as evidence for the clinical safety case and, where relevant, medical device records.

## 11. People and skills

Who writes, reviews, and maintains automated tests. Skills needed and how they are built (link to this programme and to Leading teams through automation adoption for Band 7 test management).

## 12. Roadmap

| Quarter | Milestones |
| --- | --- |
| | |

## 13. Risks

| Risk | Mitigation | Owner |
| --- | --- | --- |
| | | |

## 14. Review

When and how this strategy will be reviewed, and by whom.
