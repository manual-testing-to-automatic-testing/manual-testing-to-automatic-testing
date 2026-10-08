# Capstone brief: Band 6 test engineering

Evidence 10 for Module 10. Hours 142.5–180. Assessed at Gate 4.

| Field | Value |
| --- | --- |
| Track | Band 6 test engineering |
| Band | 6 |
| UK GDaD PCF role | Test engineer |
| Module 10 depth | Apply independently |
| Automation target | Working |
| Presentation | 20 minutes, aimed at a non-technical audience |

## The capstone, from the spec

> An automated regression suite for a product slice of 15–30 manual cases: plan, browser and API tests, spec, synthetic data, CI, traceability, and handover README.

## Scope

A product slice with 15 to 30 manual regression cases.

Agree the exact scope with the product owner and mentor at hour 142.5, using the [scope agreement](capstone-scope-agreement.md), your Evidence 1 analysis, and your Evidence 9 estimate.

## Deliverables

- [ ] A short test plan: scope, risks, layers, what stays manual, and the Evidence 9 estimate.
- [ ] Browser tests for the critical user journeys, and API or integration tests for everything that can be checked below the UI.
- [ ] A `spec/index.md` that agrees with the code.
- [ ] Synthetic data.
- [ ] The suite in CI, blocking merges on failure.
- [ ] A traceability matrix agreed with the clinical safety officer.
- [ ] A handover README that lets another tester run and extend the suite.
- [ ] At least two pull requests reviewed by developers on the team.

## Acceptance

The product owner and the Gate 4 panel will look for:

- The suite runs green in CI and every test fails when behaviour is wrong.
- Spec and code agree.
- Synthetic data only.
- The product owner accepts the suite.
- The team agrees to maintain it.
- Synthetic data only, and no secrets in source control.
- You can explain every line you submitted.

## Support

Independent, with a mentor review every 7.5 hours of learning.

## Presentation

20 minutes, plus questions, following the [presentation outline](presentation-outline.md). Include a live run: it is the Gate 4 Part D practical.

## Panel

Chair: a lead test engineer or test manager at least one band above you, not your mentor. A developer from another team. The training lead. The clinical safety officer reviews traceability evidence in writing.

## Gate 4 thresholds

At least 90% in each of Parts A, B, and C of the capability self-assessment; Part D Meets; no skill more than one level below expected; test engineering at your automation target; capstone accepted by the product owner. See the spec for the full rules.
