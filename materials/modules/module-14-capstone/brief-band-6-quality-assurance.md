# Capstone brief: Band 6 quality assurance

Evidence 14 for Module 14. Hours 202.5–240. Assessed at Gate 4.

| Field | Value |
| --- | --- |
| Track | Band 6 quality assurance |
| Band | 6 |
| UK GDaD PCF role | Quality assurance test analyst (Senior quality assurance test analyst) |
| Module 14 depth | Apply and lead or coach others |
| Automation target | Working |
| Presentation | 20 minutes, aimed at a non-technical audience |

## The capstone, from the spec

> A risk-based automation approach for the area, automated acceptance checks agreed with clinical users, and coaching a Band 4 or Band 5 colleague through their capstone.

## Scope

Your area of the product, and one colleague's capstone.

Agree the exact scope with the product owner and mentor at hour 202.5, using the [scope agreement](capstone-scope-agreement.md), your Evidence 5 analysis, and your Evidence 13 estimate.

## Deliverables

- [ ] A risk-based automation approach for the area: what to automate, at which layer, what stays manual, environments, data, and tools.
- [ ] Automated acceptance checks, turned from acceptance criteria agreed with clinical users (from Acceptance test automation), running in CI.
- [ ] A `spec/index.md` for the checks that agrees with the code.
- [ ] Traceability to hazards, agreed with the clinical safety officer.
- [ ] A coaching log (Coaching others in automation) for one Band 4 or Band 5 colleague through their capstone, with their feedback.
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

Independent, with a mentor review every 7.5 hours of learning.

## Presentation

20 minutes, plus questions, following the [presentation outline](presentation-outline.md). Include a live run: it is the Gate 4 Part D practical.

## Panel

Chair: a lead test engineer or test manager at least one band above you, not your mentor. A developer from another team. The training lead. The clinical safety officer reviews traceability evidence in writing.

## Gate 4 thresholds

At least 90% in each of Parts A, B, and C of the capability self-assessment; Part D Meets; no skill more than one level below expected; test engineering at your automation target; capstone accepted by the product owner. See the spec for the full rules.
