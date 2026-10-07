# L4 Acceptance test automation

**Track:** B6-QA. **Training days:** 13 to 17.

**Outcomes:** Practitioner in business and user acceptance testing, applied to automation: turn acceptance criteria into automated checks, plan user acceptance testing with clinicians, and report residual risk.

**Evidence:** folded into the B6-QA capstone (M10).

## Exercise: from acceptance criteria to automated checks, with clinicians

### Step 1: Choose a feature (training day 13)

With the product owner, choose a feature in the capstone area that clinical users will accept, with 5 to 10 acceptance criteria.

### Step 2: Rewrite the criteria as scenarios (training day 13)

Rewrite each acceptance criterion as one or more Given-When-Then scenarios. Make vague criteria concrete: "the clinician can find the patient quickly" becomes "Given a synthetic patient with the family name Example, When the clinician searches for Example, Then the patient appears in the first page of results within 2 seconds".

### Step 3: Review with clinical users (training day 14)

Hold a 45-minute session with one or two clinical users and the product owner:

- read each scenario aloud in plain language
- ask: is this what you need? What is missing? What would be unsafe?
- agree each scenario, change it, or mark it for manual acceptance.

Record who agreed what. AI may help draft scenarios, but people must confirm the AI understood the real need (testingexamples, "How does artificial intelligence help automatic testing?").

### Step 4: Decide the layer and automate (training days 15 to 16)

For each agreed scenario, decide: automate at the API layer, automate in the browser, or keep for manual acceptance by clinicians (for example usability and clinical judgement). Automate the chosen ones with the B6-QA automation target (Working), linking each test to its scenario in `spec/index.md`.

### Step 5: Plan user acceptance testing (training day 16)

Use the UAT plan below. The automated checks run first, so clinicians' scarce time goes to what only people can judge.

### Step 6: Report readiness (training day 17)

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
