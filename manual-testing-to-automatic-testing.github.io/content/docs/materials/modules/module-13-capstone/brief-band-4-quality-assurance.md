# Capstone brief: Band 4 quality assurance

Evidence 13 for Module 13. Hours 202.5–240. Assessed at Gate 4.

| Field | Value |
| --- | --- |
| Track | Band 4 quality assurance |
| Band | 4 |
| UK GDaD PCF role | Quality assurance test analyst |
| Module 13 depth | Apply with support |
| Automation target | Awareness, with simple tests |
| Presentation | 10 minutes, aimed at a non-technical audience |

## The capstone, from the spec

> Automate 5 manual cases with support, with a spec, running in CI.

## Scope

5 manual cases from your Evidence 4 sample marked `automate-browser`, on your team's test environment.

Agree the exact scope with the product owner and mentor at hour 202.5, using the [scope agreement](capstone-scope-agreement.md), your Evidence 4 analysis, and your Evidence 12 estimate.

## Deliverables

- [ ] 5 Selenium browser tests with real assertions and explicit waits, using a page object.
- [ ] A `spec/index.md` that agrees with the code.
- [ ] The tests running in CI on every pull request.
- [ ] Synthetic data only.
- [ ] Traceability rows (Module 11 template) for tests that protect a hazard.
- [ ] A short README: how to run the tests.

## Acceptance

The product owner and the Gate 4 panel will look for:

- All 5 tests pass in CI.
- Each test is shown to fail when the behaviour is wrong.
- Spec and code agree.
- The product owner accepts the tests as covering the 5 cases.
- Synthetic data only, and no secrets in source control.
- You can explain every line you submitted.

## Support

A mentor review every 7.5 hours of learning, and pairing when stuck. You write the code.

## Presentation

10 minutes, plus questions, following the [presentation outline](presentation-outline.md). Include a live run: it is the Gate 4 Part D practical.

## Panel

Chair: a lead test engineer or test manager at least one band above you, not your mentor. A developer from another team. The training lead. The clinical safety officer reviews traceability evidence in writing.

## Gate 4 thresholds

At least 90% in each of Parts A, B, and C of the capability self-assessment; Part D Meets; no skill more than one level below expected; test engineering at your automation target; capstone accepted by the product owner. See the spec for the full rules.
