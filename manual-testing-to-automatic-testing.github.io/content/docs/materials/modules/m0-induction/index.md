# M0 Induction and baseline

Hours 0–7.5, about 6.5 hours. Gate 0.

## Purpose

Each person, their line manager, and the training lead agree where the person starts, which track they join, and how they will be supported. M0 sets a formal, evidenced baseline.

## Outcomes

- A calibrated baseline on the full capability self-assessment (Parts A to C).
- A track, an individual learning plan (ILP), and a signed learning agreement.
- A working development environment.

M0 supports LO13 (fully meet the person's own band and PCF role).

## Depth by track

| Module | B3 | B4-QA | B4-TE | B5-QA | B6-QA | B6-TE | B7-TE | B7-TM |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| M0 Induction and baseline | I | I | I | I | I | I | I | I |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Programme welcome: aims, tracks, gates, the "same band, full capability" principle, developmental-only gates | 1 hour | Core | Cohort, training lead, head of test |
| 2 | How to self-assess honestly: evidence, "rate what you do regularly", a gap is not a failing | 30 minutes | Core | Cohort, training lead |
| 3 | Self-assessment working time, with the mentor available | 2 hours | Individual | Each person |
| 4 | Manager independent rating (the manager's time, not the participant's) | 1.5 hours | Individual | Line manager |
| 5 | Calibration meeting | 1 hour | One to one | Person, line manager, mentor if needed |
| 6 | Diagnostic coding exercise (unscored) | 30 minutes | Individual | Each person, mentor |
| 7 | Environment set-up pairing | 1 hour | Pairing | Each person, mentor |
| 8 | ILP and learning agreement meeting, which also starts R1 role foundations | 30 minutes | One to one | Person, line manager, training lead |

The participant's sessions add up to 6.5 hours. The last hour of the first 7.5 hours starts M1.

## Activities

1. **Welcome and briefing.** Explain the programme, the eight tracks, the six gates, and Principle 14: gate results never start capability or performance procedures.
2. **Self-assessment.** The person completes the full capability self-assessment, with a short, specific example as evidence for each "Meets". The instrument is in `instruments/`, built from the roles-skills reference. People may complete it in writing or in conversation with their mentor.
3. **Manager rating.** The line manager rates independently, without seeing the self-ratings.
4. **Calibration.** Agree each rating. Where the two differ by more than one level, the evidence decides. If they still disagree, the mentor or training lead moderates.
5. **Track placement.** Place the person by band and assigned PCF role. Apply the mapping rule from the spec where there is no reference role level. For Band 3, agree the expected job evaluation factor levels from the person's job description, with a total of 216 to 270 points.
6. **Diagnostic.** A short, unscored coding exercise. Its only use is to tune M2 pacing and to decide whether B3 and B4 people take the 280-hour option.
7. **Environment set-up.** Install Node.js, Google Chrome, VS Code with the ESLint extension, and git. No Docker is needed. Check access to the team's repository and CI.
8. **ILP and learning agreement.**

### Diagnostic coding exercise

Unscored. 30 minutes. The mentor sits alongside and notes where the person gets stuck.

1. Open a terminal. Make a folder. List its contents.
2. In VS Code, create `hello.js` that prints your team's name, and run it with `node hello.js`.
3. Change it to print the numbers 1 to 5.
4. Change it to print only the even numbers.
5. Read this code and say, in your own words, what it does:

   ```javascript
   function isAdult(age) {
     return age >= 18;
   }
   console.log(isAdult(17));
   ```

The mentor records: comfort with the terminal, editing, running code, and reading code. Most people at Bands 3 and 4 will not finish. That is expected.

## Evidence

**E0**, for every track:

- the full capability self-assessment (Parts A to C), with evidence, and the manager's independent rating, calibrated at Gate 0
- the person's track, and any mapping decision
- an individual learning plan: the gaps that matter most from Parts A to C, an action, owner, and date for each, the automation target, reasonable adjustments, and preferred learning formats
- a signed learning agreement: protected time, mentor, and gate dates
- a working development environment: Node.js, Google Chrome, VS Code with the ESLint extension, git, and access to the team's repository and CI.

Use the templates in this folder:

- [individual-learning-plan.md](individual-learning-plan.md)
- [learning-agreement.md](learning-agreement.md)
- [environment-checklist.md](environment-checklist.md)

## Assessment

Gate 0 (hour 0). Baseline only: no threshold. Gate 0 passes when the ILP is agreed and signed.

## Resources

- The roles-skills reference pages for the person's role and band: <https://roles-skills.github.io>
- The roles-skills self-assessment guide: `~/git/agenda-for-change/guides/self-assessment/index.md`
- The programme specification: [../../../spec/index.md](../../../spec/index.md)
