# Health care foundations

Health care foundations runs in hours 7.5–60 for every track. Its purpose is that every person meets the expected levels in **understanding health and care services**, **clinical risk management**, and **information governance and data protection** by Gate 2 (spec Principle 13). Health care foundations is reflected in Part C ratings at Gate 2.

| Session | Programme hours | Led by | Length | Who |
| --- | --- | --- | --- | --- |
| 1 How the organisation's services support care | 7.5–15 | Band 7 test management participant, with a clinical colleague | 1.5 hours | All |
| 2 Information governance for testers | 15–22.5 | Information governance lead | 1.5 hours | All |
| 3 Clinical risk management for testers | 22.5–30 | Clinical safety officer | 1.5 hours | All |
| 4 Hazard workshop | 30–45 | Clinical safety officer | 1.5 hours | All, in small groups |
| 5 Shadowing a clinical or care user | Between hours 22.5 and 60, in normal working time | Line manager arranges | About 3.5 hours, outside the learning hours | All |
| 6 Wrap-up and Part C self-check | 52.5–60 | Training lead | 1 hour | All |

Health care foundations takes 7 learning hours in all (sessions 1, 2, 3, 4, and 6), within hours 7.5–60. Shadowing happens in normal working time, because it is part of knowing the work. The cohort total for the clinical safety officer is 3 hours here, within the spec's 6 hours per cohort, leaving about 3 hours for Module 8. The information governance lead gives 1.5 hours here and the rest of their 3 hours in Module 8.

## Session 1: How the organisation's services support care

**Outcomes:** describe the main parts of the health and care system and the services the organisation supports; explain the clinical and care workflows the person's product supports; recognise when a change could affect patient care.

**Plan:**

1. (20 minutes) The health and care system in outline, and where the organisation's services fit.
2. (30 minutes) A clinical colleague walks through one real care pathway the organisation supports, and where digital services touch it.
3. (30 minutes) Small groups: each person maps their own product onto the pathway and marks one point where a defect could affect care.
4. (10 minutes) Common clinical terms testers should use correctly.

**Leader note:** the Band 7 test management participant leads this session, as their track requires. The training lead reviews the plan with them in hours 0–7.5.

## Session 2: Information governance for testers

**Outcomes:** follow the rules for personal and health information; recognise and report a data breach or near miss; apply data protection principles to test data and pipelines.

**Plan:**

1. (20 minutes) Data protection principles, confidentiality, and why test environments never hold real patient data.
2. (20 minutes) Synthetic and de-identified data: the difference, and why this programme uses synthetic data only.
3. (20 minutes) Secrets: what counts, why they never go in source control, and how CI handles them.
4. (20 minutes) Scenarios: real patient data found in a test environment, a screenshot in a defect report showing a real record, an access token in a commit. What do you do?
5. (10 minutes) How to report a breach or near miss.

## Session 3: Clinical risk management for testers

**Outcomes:** explain how health IT systems can harm patients; report a possible clinical safety issue through the right route; follow the clinical risk management process; provide test evidence for a clinical safety case.

**Plan:**

1. (15 minutes) How health IT can harm patients: wrong, missing, or delayed information; the wrong patient's record.
2. (25 minutes) The organisation's clinical risk management process, hazard log, and safety case.
3. (25 minutes) What test evidence a safety case needs, and how automated regression tests protect safety controls over time.
4. (15 minutes) Reading the hazard log for each person's product.
5. (10 minutes) How to raise a clinical safety concern.

## Session 4: Hazard workshop

**Outcomes:** take part in a hazard workshop and contribute to a hazard log.

**Plan:**

1. (10 minutes) The clinical safety officer chooses a real, small change to one of the cohort's products.
2. (35 minutes) Small groups, mixed bands: identify hazards for the change, their causes, and their effects on patients.
3. (25 minutes) For each hazard: the existing controls, and which tests (manual or automated) give evidence that the controls work.
4. (20 minutes) Groups present; the clinical safety officer agrees which hazards go in the log.

**Output:** each person records one hazard and its test evidence in their learning log. This seeds the Module 8 traceability matrix.

## Session 5: Shadowing a clinical or care user

**Outcomes:** explain the workflow the person's product supports, from the user's point of view.

**Arrangements:** in normal working time, outside the learning hours, the line manager arranges about 3.5 hours with a clinical or care user of the person's product, with the user's agreement and following the organisation's rules for visiting clinical areas. The person must not see, record, or copy patient data beyond what the visit requires.

**Questions to take:**

- When and why do you use the product?
- What happens if it is slow, wrong, or unavailable?
- What workarounds do you use?
- What would you most want tested?

**Output:** a half-page note in the learning log, with one idea for a test or a risk to raise.

## Session 6: Wrap-up and Part C self-check

Each person rates themselves on the three skills with evidence from Health care foundations, and their mentor checks the evidence. Anyone not yet at the expected level agrees an individual learning plan action to close the gap before Gate 2.
