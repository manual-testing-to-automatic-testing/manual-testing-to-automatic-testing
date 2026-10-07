# Capstone brief: B6-QA

Evidence E10 for module M10. Weeks 20–24. Assessed at Gate 4.

| Field | Value |
| --- | --- |
| Track | B6-QA |
| Band | 6 |
| Assigned PCF role | Quality assurance test analyst (Senior quality assurance test analyst) |
| M10 depth | L, apply and lead or coach others |
| Automation target | Working |
| Presentation | 20 minutes, aimed at a non-technical audience |

## The capstone, from the spec

> A risk-based automation approach for the area, automated acceptance checks agreed with clinical users, and coaching a B4 or B5 colleague through their capstone.

## Scope

Your area of the product, and one colleague's capstone.

Agree the exact scope with the product owner and mentor at the start of week 20, using the [scope agreement](capstone-scope-agreement.md), your E1 analysis, and your E9 estimate.

## Deliverables

- [ ] A risk-based automation approach for the area: what to automate, at which layer, what stays manual, environments, data, and tools.
- [ ] Automated acceptance checks, turned from acceptance criteria agreed with clinical users (from L4), running in CI.
- [ ] A `spec/index.md` for the checks that agrees with the code.
- [ ] Traceability to hazards, agreed with the clinical safety officer.
- [ ] A coaching log (L1) for one B4 or B5 colleague through their capstone, with their feedback.
- [ ] A short residual risk report for the product owner and clinical safety officer.

## Acceptance

The product owner and the Gate 4 panel will look for:

- The approach is reviewed by the team and the head of test.
- Clinical users agree the acceptance checks reflect their needs.
- The checks pass in CI and fail when behaviour is wrong.
- The coached colleague's feedback is recorded.
- The product owner accepts the capstone.
- Synthetic data only, and no secrets in source control.
- You can explain every line you submitted.

## Support

Independent, with weekly mentor review.

## Presentation

20 minutes, plus questions, following the [presentation outline](presentation-outline.md). Include a live run: it is the Gate 4 Part D practical.

## Panel

Chair: a lead test engineer or test manager at least one band above you, not your mentor. A developer from another team. The training lead. The clinical safety officer reviews traceability evidence in writing.

## Gate 4 thresholds

At least 90% in each of Parts A, B, and C of the capability self-assessment; Part D Meets; no skill more than one level below expected; test engineering at your automation target; capstone accepted by the product owner. See the spec for the full rules.
