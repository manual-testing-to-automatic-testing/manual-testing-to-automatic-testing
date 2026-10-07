# Capstone brief: B3

Evidence E10 for module M10. Training days 20 to 24. Assessed at Gate 4.

| Field | Value |
| --- | --- |
| Track | B3 |
| Band | 3 |
| Assigned PCF role | Quality assurance test analyst or Test engineer, associate level |
| M10 depth | S, apply with support |
| Automation target | Awareness |
| Presentation | 10 minutes, aimed at a non-technical audience |

## The capstone, from the spec

> Triage one week of CI results and raise defects; write 5 Given-When-Then scenarios; make 2 reviewed changes to existing tests.

## Scope

One week of CI results for your team's existing automated suite, and 5 manual cases from your E1 sample that are marked to automate.

Agree the exact scope with the product owner and mentor at the start of training day 20, using the [scope agreement](capstone-scope-agreement.md), your E1 analysis, and your E9 estimate.

## Deliverables

- [ ] A triage record (M7 template) for every failure in one week of CI runs, with defects raised for product defects.
- [ ] 5 Given-When-Then scenarios, reviewed and agreed by the product owner, with synthetic data named.
- [ ] 2 changes to existing tests, each through a pull request reviewed by a developer or the mentor. For example, updating an expected value after an agreed change, or replacing a brittle locator.
- [ ] Traceability rows (M8 template) for the 5 scenarios, where they protect a hazard.

## Acceptance

The product owner and the Gate 4 panel will look for:

- Every failure in the week is triaged with the right kind and a reason.
- Each scenario has checkable Then lines and is agreed by the product owner.
- Both changes are merged and the suite is green after them.
- Synthetic data only, and no secrets in source control.
- You can explain every line you submitted.

## Support

The mentor may pair with you on the code changes. You make the triage decisions and write the scenarios.

## Presentation

10 minutes, plus questions, following the [presentation outline](presentation-outline.md). Include a live run: it is the Gate 4 Part D practical.

## Panel

Chair: a lead test engineer or test manager at least one band above you, not your mentor. A developer from another team. The training lead. The clinical safety officer reviews traceability evidence in writing.

## Gate 4 thresholds

At least 90% in each of Parts A, B, and C of the capability self-assessment; Part D Meets; no skill more than one level below expected; test engineering at your automation target; capstone accepted by the product owner. See the spec for the full rules.
