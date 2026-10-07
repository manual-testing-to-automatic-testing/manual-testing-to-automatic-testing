# Capstone brief: B4-TE

Evidence E10 for module M10. Weeks 20–24. Assessed at Gate 4.

| Field | Value |
| --- | --- |
| Track | B4-TE |
| Band | 4 |
| Assigned PCF role | Test engineer |
| M10 depth | S, apply with support |
| Automation target | Awareness, with maintained tests |
| Presentation | 10 minutes, aimed at a non-technical audience |

## The capstone, from the spec

> Automate 10 cases, including 2 API tests, and maintain an existing suite for 4 weeks.

## Scope

10 manual cases from your E1 sample, at least 2 at the API layer, and your team's existing automated suite for weeks 20 to 24.

Agree the exact scope with the product owner and mentor at the start of week 20, using the [scope agreement](capstone-scope-agreement.md), your E1 analysis, and your E9 estimate.

## Deliverables

- [ ] 10 automated tests: browser tests with a page object, and at least 2 API tests.
- [ ] A `spec/index.md` that agrees with the code.
- [ ] The tests running in CI.
- [ ] A maintenance log for the existing suite for 4 weeks: each failure triaged, each fix made through a pull request.
- [ ] Synthetic data, and traceability rows for tests that protect a hazard.
- [ ] A README: how to run and extend the tests.

## Acceptance

The product owner and the Gate 4 panel will look for:

- All 10 tests pass in CI and fail when behaviour is wrong.
- The existing suite stayed green, or every failure was triaged and acted on.
- Spec and code agree.
- The product owner accepts the tests.
- Synthetic data only, and no secrets in source control.
- You can explain every line you submitted.

## Support

Work under supervision, as the role requires: the mentor reviews every pull request.

## Presentation

10 minutes, plus questions, following the [presentation outline](presentation-outline.md). Include a live run: it is the Gate 4 Part D practical.

## Panel

Chair: a lead test engineer or test manager at least one band above you, not your mentor. A developer from another team. The training lead. The clinical safety officer reviews traceability evidence in writing.

## Gate 4 thresholds

At least 90% in each of Parts A, B, and C of the capability self-assessment; Part D Meets; no skill more than one level below expected; test engineering at your automation target; capstone accepted by the product owner. See the spec for the full rules.
