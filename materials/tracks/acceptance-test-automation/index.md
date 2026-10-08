# Acceptance test automation

**Track:** Band 6 quality assurance. **Programme hours:** 90 to 127.5.

**Outcomes:** Practitioner in business and user acceptance testing, applied to automation: turn acceptance criteria into automated checks, plan user acceptance testing with clinicians, and report residual risk.

**Evidence:** folded into the Band 6 quality assurance capstone (Module 13).

## Exercise: from acceptance criteria to automated checks, with clinicians

### Step 1: Choose a feature (hours 150–157.5)

With the product owner, choose a feature in the capstone area that clinical users will accept, with 5 to 10 acceptance criteria.

### Step 2: Rewrite the criteria as scenarios (hours 150–157.5)

Rewrite each acceptance criterion as one or more Given-When-Then scenarios. Make vague criteria concrete: "the clinician can find the patient quickly" becomes "Given a synthetic patient with the family name Example, When the clinician searches for Example, Then the patient appears in the first page of results within 2 seconds".

### Step 3: Review with clinical users (hours 157.5–165)

Hold a 45-minute session with one or two clinical users and the product owner:

- read each scenario aloud in plain language
- ask: is this what you need? What is missing? What would be unsafe?
- agree each scenario, change it, or mark it for manual acceptance.

Record who agreed what. AI may help draft scenarios, but people must confirm the AI understood the real need (testingexamples, "How does artificial intelligence help automatic testing?").

### Step 4: Decide the layer and automate (hours 165–180)

For each agreed scenario, decide: automate at the API layer, automate in the browser, or keep for manual acceptance by clinicians (for example usability and clinical judgement). Automate the chosen ones with the Band 6 quality assurance automation target (Working), linking each test to its scenario in `spec/index.md`.

### Step 5: Plan user acceptance testing (hours 172.5–180)

Use the UAT plan below. The automated checks run first, so clinicians' scarce time goes to what only people can judge.

### Step 6: Report readiness (hours 180–187.5)

Write a one-page readiness report for the product owner and clinical safety officer: what the automated checks show, what clinicians accepted, the defects open, and the residual risks.

## UAT plan template

| Field | Entry |
| --- | --- |
| Feature and release | |
| Acceptance criteria and scenarios | Link |
| Automated checks that run before UAT | Link to suite and latest CI run |
| Clinical participants and roles | |
| Clinical time needed, and how it is secured | |
| Environment and synthetic data | |
| Scenarios for manual acceptance | |
| Entry criteria (for example: automated checks green, no open critical defects) | |
| Exit criteria (for example: all scenarios accepted or risks agreed) | |
| How defects are raised and triaged | |
| Hazards and safety controls covered | Link to traceability matrix |
| Dates | |
| Sign-off by | Product owner, clinical lead, clinical safety officer |
