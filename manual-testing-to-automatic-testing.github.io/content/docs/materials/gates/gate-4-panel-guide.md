# Gate 4 panel guide

Gate 4 (training day 24) decides whether a person completes the programme. The panel reviews the full capability self-assessment, the Part D practical, and evidence E8 to E10.

## The panel

Three people:

- **Chair:** a lead test engineer or test manager at least one band above the person, and not their mentor. For B7 tracks, the chair is the head of test or a lead from outside the person's area.
- **A developer** from another team.
- **The training lead.**

The clinical safety officer reviews the traceability parts of E8 and E10 **in writing**, before the panel meets.

Each panel member needs about 3 hours per person: 1.5 hours reading beforehand, 1 hour for the session, and 30 minutes to agree and record the result.

## Before the session

The training lead sends the panel, at least 5 working days before:

- [ ] the person's track guide (`materials/tracks/<track>/index.md`)
- [ ] the completed and calibrated instrument for Gate 4, and the Gate 3 one for comparison
- [ ] evidence E8 (safe and lawful automation), E9 (quality engineering), and E10 (capstone)
- [ ] track module evidence: L1 coaching log, L2 strategy and metrics, L4 or L5 outputs, as the track requires
- [ ] the clinical safety officer's written review of traceability
- [ ] the product owner's acceptance of the capstone
- [ ] the ILP and earlier gate review forms
- [ ] reasonable adjustments to apply.

## The session (60 minutes)

| Time | Item |
| --- | --- |
| 5 minutes | Chair welcomes the person, explains the session and that it is developmental only. |
| 10 or 20 minutes | Capstone presentation, aimed at a non-technical audience: 10 minutes for B3 and B4, 20 minutes for B5 to B7. |
| 15 minutes | Part D practical: live run, explanation, and one small change the panel asks for (see [Part D practicals](part-d-practicals.md#gate-4-training-day-24-live-run-and-explanation-of-the-capstone)). |
| 15 to 25 minutes | Questions (see below). |
| 5 minutes | The person's own reflection: what changed most, and what they will work on next. |

## Questions to ask

Choose from these, tuned to the track:

- **Automation choices (LO1):** Which manual tests did you keep manual, and why?
- **Pyramid:** Which test did you move below the UI, and what did that gain?
- **Real assertions (Principle 12):** Show me a test that would fail if this behaviour were wrong.
- **Spec and code (Principle 12):** Where does your `spec/index.md` describe this test?
- **CI (LO7):** Tell me about a CI failure you triaged. Was it the product, the test, or the environment?
- **Safety (LO8, LO9):** Which hazard does this test protect? What would a clinical safety officer see as evidence?
- **Data:** How do you know there is no real patient data or secret in this repository?
- **Flaky tests (LO10):** What would you do if this test started failing one run in ten?
- **AI (Principle 15):** Did you use an AI assistant? Explain this line it helped with.
- **Role, not just automation (LO13):** Pick one Part B item you moved from Not yet to Meets. What do you now do differently?
- **B6 and B7:** How did you coach others (L1)? What did they learn?
- **B6-QA:** How were acceptance checks agreed with clinical users (L4)?
- **B7-TE:** How do others use your framework? What did the performance test tell you about clinical demand?
- **B7-TM:** Which metric would you use to decide whether automation is working, and what would you do if it got worse?

## Deciding

The panel checks every Gate 4 threshold:

- [ ] Parts A, B, and C each at least 90%, using agreed ratings
- [ ] Part D: Meets
- [ ] No skill more than one level below expected
- [ ] Test engineering at the automation target for the track
- [ ] Capstone accepted by the product owner
- [ ] Overall capability index at least 90% (LO13)

The panel may change an agreed rating only where the session shows clear evidence against it. It records each change and its reason on the [gate review form](gate-review-form.md).

- **All thresholds met:** the person completes the programme. Gate 5, about six months after Gate 4, confirms the capability holds.
- **Not met:** up to 3 extra training days on the items below threshold, with a written plan and extra mentor time, and one repeat of the panel. If the repeat is not met, the person, line manager, and training lead agree a next step.

## What the panel does not decide

- The panel does not decide band, pay, or role. Nobody changes band because of this programme.
- A panel result never starts a capability, performance, or conduct procedure.

## Feedback

The chair gives the person spoken feedback on the day, with at least two strengths and the top gaps, and written feedback within 5 working days.
