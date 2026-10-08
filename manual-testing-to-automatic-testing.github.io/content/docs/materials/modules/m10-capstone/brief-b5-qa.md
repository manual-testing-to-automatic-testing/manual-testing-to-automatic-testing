# Capstone brief: B5-QA

Evidence E10 for module M10. Hours 142.5–180. Assessed at Gate 4.

| Field | Value |
| --- | --- |
| Track | B5-QA |
| Band | 5 |
| UK GDaD PCF role | Quality assurance test analyst |
| M10 depth | I, apply independently |
| Automation target | Working, with support |
| Presentation | 20 minutes, aimed at a non-technical audience |

## The capstone, from the spec

> Automation candidate analysis for the area, and 10 cases automated at browser and API layers, with traceability, with some support.

## Scope

Your own area of the product.

Agree the exact scope with the product owner and mentor at hour 142.5, using the [scope agreement](capstone-scope-agreement.md), your E1 analysis, and your E9 estimate.

## Deliverables

- [ ] An updated automation candidate analysis (E1) for the whole area.
- [ ] 10 automated tests across browser and API layers, chosen by risk from the analysis.
- [ ] A `spec/index.md` that agrees with the code.
- [ ] The tests running in CI.
- [ ] Synthetic data, including rare or edge cases.
- [ ] A traceability matrix agreed with the clinical safety officer.
- [ ] A README: how to run and extend the tests.

## Acceptance

The product owner and the Gate 4 panel will look for:

- The analysis covers every manual regression case in the area.
- All 10 tests pass in CI and fail when behaviour is wrong.
- The layer for each test is justified.
- Spec and code agree.
- The product owner accepts the capstone.
- Synthetic data only, and no secrets in source control.
- You can explain every line you submitted.

## Support

Some support: a mentor review every 7.5 hours of learning, and help on request.

## Presentation

20 minutes, plus questions, following the [presentation outline](presentation-outline.md). Include a live run: it is the Gate 4 Part D practical.

## Panel

Chair: a lead test engineer or test manager at least one band above you, not your mentor. A developer from another team. The training lead. The clinical safety officer reviews traceability evidence in writing.

## Gate 4 thresholds

At least 90% in each of Parts A, B, and C of the capability self-assessment; Part D Meets; no skill more than one level below expected; test engineering at your automation target; capstone accepted by the product owner. See the spec for the full rules.
