# Mentor

What a mentor does in the training programme from manual testing to automatic testing, why the programme has mentors, who can be one, and how much time it takes.

## Purpose of mentoring in this programme

Most participants have never written code. The modules teach the skills, but people learn to automate by doing it next to someone who already can, who answers the small questions straight away, reads their code, and tells them honestly what good looks like. The mentor is that person.

The mentor:

- **gets people started:** the first steps of programming, browser automation, and AI assistants are where people most often give up
- **keeps the standard:** real assertions, explicit waits, clear names, and reviewed pull requests, from the first script
- **turns practice into habit:** pairing, review, and role practice in every block of learning
- **prepares people for gates:** so that each gate shows what the person can really do
- **is not the assessor of record:** the line manager rates the person, and the gate reviewers decide. The mentor helps the person get there, and moderates when the person and manager disagree.

## Who can be a mentor

- At least one band above the participant.
- At or above the participant's automation target in test engineering. See the [track guides](tracks/index.md).
- For Band 7 tracks, a Band 8a or higher lead, or an external mentor if none is available.
- Not the participant's line manager.
- One mentor supports **up to 3 participants**.

The training lead names each participant's mentor before hour 0, because the mentor's first session is at the very start.

## What the mentor does, stage by stage

| Programme hours | Stage | What the mentor does |
| --- | --- | --- |
| 0–60 | The basics: [Module 1](modules/module-1-basics-of-a-programming-language/index.md), [Module 2](modules/module-2-basics-of-a-browser-automator/index.md), [Module 3](modules/module-3-basics-of-an-ai-assistant/index.md) | A 30-minute start; a 1-hour check-in in each module; a 1-hour walkthrough at the end of each module, and the walkthrough sign-off (Evidence 1 to 3). Agrees any other language, browser automator, or AI assistant the person wants to use for the basics. |
| 88 | Gate 0 and [Module 6 Induction](modules/module-6-induction/index.md) | Joins induction; helps set up the practice repository; moderates self and manager ratings if they differ by more than one level. |
| 88–133 | [Module 8 Programming foundations](modules/module-8-programming-foundations/index.md) and [Module 9 Version control](modules/module-9-version-control/index.md) | Pairs on katas with Band 3, Band 4, and Band 5 participants in hours 95.5–110.5; reviews katas and pull requests; prepares the person for Gate 1. |
| 133–268 | Modules 10 to 16 | Reviews pull requests; runs [Role foundations](tracks/role-foundations/index.md) practice; supervises Part D practicals where possible ([Part D practicals](gates/part-d-practicals.md)); agrees the capstone scope with the product owner at hour 230.5, and reviews the capstone in every 7.5-hour block. |
| 268–308 | [Module 17 Lean Six Sigma Green Belt](modules/module-17-lean-six-sigma-green-belt/index.md) | Supports the Green Belt project; for Band 3 and Band 4, may lead the team project the person takes part in; reviews the project with the training lead and the product owner. |
| After Gate 4 | Gate 5 follow-up | No set time. |

At every gate, the mentor helps the person prepare their evidence, but does not chair the Gate 4 panel for their own participants.

## Time commitment

Per participant, from the [spec's roles and responsibilities](../spec/index.md#roles-and-responsibilities) and the [resource estimate](planning/resource-estimate.md):

| Programme hours | Rate | Hours |
| --- | --- | --- |
| 0–60, the basics | A 30-minute start, then a 1-hour check-in and a 1-hour walkthrough in each of Modules 1 to 3 | 6.5 |
| 88–133 | 1.5 hours per 7.5 learning hours (6 blocks) | 9 |
| 133–268 | 1 hour per 7.5 learning hours (18 blocks) | 18 |
| 268–308 | Green Belt project support and review | About 5 |
| **Total** | | **About 38.5 per participant** |

At the default pace of 7.5 learning hours a week, that is about 1 hour a week for each participant over about 41 weeks, and more in the weeks of the basics and of the first programming modules. A mentor with 3 participants gives about 115 hours over the programme, about 3 hours a week. Agree this time with the mentor's own line manager before hour 0.

With the optional extension to 368 hours for Band 3 and Band 4, add about 8 hours. If a gate is not met, the person gets extra learning hours with extra mentor time, agreed with the training lead.

## Mentor checklist

- [ ] Agree the time with your own line manager.
- [ ] Read your participants' [track guides](tracks/index.md) and the [modules](modules/index.md).
- [ ] Get the [practice repository](../practice-repo/README.md) working on your own machine: `npm ci`, then `npm test`.
- [ ] Hold the 30-minute start with each participant in hours 0–7.5.
- [ ] Sign off each participant's three basics walkthroughs before Gate 0.
- [ ] Pair, review pull requests, and run Role foundations practice in every 7.5 hours of learning.
- [ ] Prepare each participant for each gate, including the [Part D practicals](gates/part-d-practicals.md).
- [ ] Agree the capstone scope at hour 230.5, and support the Green Belt project.

## Related

- [Line manager](manager.md)
- [Calibration guide](gates/calibration-guide.md)
- [Gates overview](gates/index.md)
- [Resource estimate](planning/resource-estimate.md)
