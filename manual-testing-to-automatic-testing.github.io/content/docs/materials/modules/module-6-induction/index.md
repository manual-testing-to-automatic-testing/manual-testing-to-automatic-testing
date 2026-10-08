# Module 6 Induction and baseline

8 hours, after the three basics modules (Module 1 to Module 3). Gate 0.

## Purpose

You, your line manager, and the training lead agree where you start, which track you join, and how you will be supported. Module 6 sets a formal, evidenced baseline.

## Outcomes

- A calibrated baseline on the full capability self-assessment (Parts A to C).
- A track, an individual learning plan, and a signed learning agreement.
- A working development environment.

Module 6 supports Learning outcome 13 (fully meet your own band and UK GDaD PCF role).

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 6 Induction and baseline | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Programme welcome: aims, tracks, gates, the "same band, full capability" principle, developmental-only gates | 1 hour | Core | Cohort, training lead, head of test |
| 2 | How to self-assess honestly: evidence, "rate what you do regularly", a gap is not a failing | 1 hour | Core | Cohort, training lead |
| 3 | Self-assessment working time, with your mentor available | 2 hours | Individual | You |
| 4 | Manager independent rating (the manager's time, not your) | 1.5 hours | Individual | Line manager |
| 5 | Calibration meeting | 1 hour | One to one | You, your line manager, your mentor if needed |
| 6 | Diagnostic coding exercise (unscored) | 1 hour | Individual | You, your mentor |
| 7 | Environment set-up pairing | 1 hour | Pairing | You, your mentor |
| 8 | Individual learning plan and learning agreement meeting, which also starts Role foundations | 1 hour | One to one | You, your line manager, training lead |

Your sessions add up to 6.5 hours. The last hour of the first 7.5 hours starts Module 7.

## Activities

1. **Welcome and briefing.** Explain the programme, the eight tracks, the six gates, and Principle 14: gate results never start capability or performance procedures.
2. **Self-assessment.** You complete the full capability self-assessment, with a short, specific example as evidence for each "Meets". The instrument is in `instruments/`, built from the roles-skills reference. People may complete it in writing or in conversation with their mentor.
3. **Manager rating.** The line manager rates independently, without seeing the self-ratings.
4. **Calibration.** Agree each rating. Where the two differ by more than one level, the evidence decides. If you still disagree, your mentor or the training lead moderates.
5. **Track placement.** You are placed by your band and UK GDaD PCF role. Apply the mapping rule from the spec where there is no reference role level. For Band 3, agree the expected job evaluation factor levels from your job description, with a total of 216 to 270 points.
6. **Diagnostic.** A short, unscored coding exercise. Its only use is to tune Module 8 pacing and to decide whether Band 3 and Band 4 people take the 380-hour option.
7. **Environment set-up.** Install Node.js, Google Chrome, VS Code with the ESLint extension, and git. No Docker is needed. Check access to the team's repository and CI.
8. **Individual learning plan and learning agreement.**

### Diagnostic coding exercise

Unscored. 1 hour. The mentor sits alongside and notes where you get stuck.

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

**Evidence 6**, for every track:

- the full capability self-assessment (Parts A to C), with evidence, and the manager's independent rating, calibrated at Gate 0
- your track, and any mapping decision
- an individual learning plan: the gaps that matter most from Parts A to C, an action, owner, and date for each, the automation target, reasonable adjustments, and preferred learning formats
- a signed learning agreement: protected time, mentor, and gate dates
- a working development environment: Node.js, Google Chrome, VS Code with the ESLint extension, git, and access to the team's repository and CI.

Use the templates in this folder:

- [individual-learning-plan.md](individual-learning-plan.md)
- [learning-agreement.md](learning-agreement.md)
- [environment-checklist.md](environment-checklist.md)

## Assessment

Gate 0 (hour 88.5). Baseline only: no threshold. Gate 0 records the mentor's sign-offs of the three basics walkthroughs (Evidence 1 to 3), and passes when the individual learning plan is agreed and signed. The individual learning plan uses the continuing professional development plan the person drafted in Module 3.

## Resources

- The roles-skills reference pages for your role and band: <https://roles-skills.github.io>
- The roles-skills self-assessment guide: `~/git/agenda-for-change/guides/self-assessment/index.md`
- The programme specification: [../../../spec/index.md](../../../spec/index.md)
