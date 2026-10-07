# Gate review form

Complete one form per person per gate. Attach the completed instrument file (the track's file in `instruments/`, such as `instruments/band-5-quality-assurance-test-analyst.tsv`, with agreed ratings) and link the evidence. Thresholds are in the [gates overview](index.md).

Gate results are developmental only. They never start a capability, performance, or conduct procedure by themselves.

## 1. Details

| Field | Entry |
| --- | --- |
| Participant | |
| Band | |
| Assigned PCF role and role level | |
| Track | B3 / B4-QA / B4-TE / B5-QA / B6-QA / B6-TE / B7-TE / B7-TM |
| Mapping decision (if any, D6) | |
| Gate | 0 / 1 / 2 / 3 / 4 / 5 |
| Date | |
| Repeat of an earlier attempt? | No / Yes (date of first attempt: ) |
| Reviewers | |
| Reasonable adjustments applied | |

## 2. Capability index

Use agreed ratings. Meets counts as 1, Partly as 0.5, Not yet as 0. `scripts/capability_index.py` calculates these from the completed instrument file.

| Part | Items | Meets | Partly | Not yet | Index (%) | Index at last gate (%) | Threshold (%) | Met? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A Band (21 dimensions) | 21 | | | | | | | |
| B PCF role aspects | | | | | | | | |
| C Skills | | | | | | | | |
| **Overall** (mean of A, B, C) | — | — | — | — | | | 90 at Gate 4 (LO13) | |

## 3. Part D practical

| Field | Entry |
| --- | --- |
| Practical (from [Part D practicals](part-d-practicals.md)) | |
| Time allowed | 30 / 60 minutes |
| Supervisor | |
| Result | Meets / Partly / Not yet |
| Notes | |
| Threshold at this gate | Partly or better (Gates 1, 2) / Meets (Gates 3, 4, 5) |
| Met? | |

## 4. Conditions

Tick only the row for this gate.

| Gate | Condition | Met? | Notes |
| --- | --- | --- | --- |
| Gate 0 | ILP agreed and signed | | |
| Gate 1 | No item lower than at Gate 0 without an agreed reason | | |
| Gate 2 | Clinical risk management and information governance meet expectations | | |
| Gate 3 | Test engineering at least one level below the automation target, or at it | | |
| Gate 4 | No skill more than one level below expected | | |
| Gate 4 | Test engineering at the automation target | | |
| Gate 4 | Capstone accepted by the product owner | | |
| Gate 5 | Plan agreed for any remaining gaps, aiming for 100% by the next annual appraisal | | |

## 5. Module evidence

| Evidence | Due at this gate? | Link | Reviewed by | Comment |
| --- | --- | --- | --- | --- |
| E0 Induction and baseline | Gate 0 | | | |
| E1 Automation candidate analysis | Gate 1 | | | |
| E2 Programming exercises | Gate 1 | | | |
| E3 Pull requests | Gate 1 | | | |
| E4 Browser automation script | Gate 2 | | | |
| E5 Real test suite and Given-When-Then | Gate 2 | | | |
| E6 API and FHIR tests | Gate 3 | | | |
| E7 CI pipeline and triage | Gate 3 | | | |
| E8 Safe and lawful automation | Gate 4 | | | |
| E9 Quality engineering | Gate 4 | | | |
| E10 Capstone | Gate 4 | | | |
| Track module evidence (L1 to L5) | As the track requires | | | |

## 6. Calibration notes

| Item id | Self rating | Manager rating | Agreed rating | Evidence that decided it | Moderated? |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

Record every item where self and manager ratings differed by more than one level.

## 7. Decision

- [ ] **Gate met.** Continue to the next stage.
- [ ] **Gate not met.** Up to 3 extra training days on the items below threshold, with the written plan below and extra mentor time. Repeat date: ______
- [ ] **Repeated gate not met.** Next step agreed (tick one): 32-training-day extension / different automation target / more R1 support / pause the programme / other: ______

### Extra training days plan (if not met)

| Item below threshold | Action | Owner | Extra mentor time | Due |
| --- | --- | --- | --- | --- |
| | | | | |

## 8. ILP update

| Change to the ILP | Reason |
| --- | --- |
| | |

The top 3 gaps for the next gate period:

1.
2.
3.

## 9. Strengths

Items rated above expectation (negative gaps), including an automation target above the role's expectation. These are strengths. They do not change band or role.

## 10. Signatures

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| Participant | | | |
| Line manager | | | |
| Mentor | | | |
| Training lead (Gates 0, 3, 5, and moderation) | | | |
| Panel chair (Gate 4) | | | |

The participant's signature confirms they have seen this form, not that they agree. Add any comment from the participant here:
