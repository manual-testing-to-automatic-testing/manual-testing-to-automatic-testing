# Read an existing suite

Evidence 12 for **Band 4 quality assurance** and **Band 7 test management**. Instead of writing a suite, read the example suite `practice-repo/tests/api/fhir.test.js` and explain it.

- **Band 4 quality assurance:** so you can run API tests, read their results, and raise good defects from them.
- **Band 7 test management:** so you can judge API test coverage across your teams, and ask the right questions in reviews.

Time: about 2 hours, in the hours 185.5–193 breakout, with the mentor.

## 1. Run it

1. Start the sandbox with `npm run fhir`, and look around by hand (see [fhir-sandbox-guide.md](fhir-sandbox-guide.md), sections 1 and 2). Stop it with Ctrl+C.
2. From `practice-repo/`, run `npm run test:api`. The tests start the sandbox for themselves.
3. Read the Mocha spec reporter's output: one line per test, with passes, failures, and skips.
4. Run it again with `FHIR_BASE_URL=http://localhost:9/fhir npm run test:api`, which points at a server that does not exist. What happens? Is that a product defect, a test defect, or an environment problem, and how can you tell from the message?

## 2. Map it

For each test in the suite, fill in one row:

| Test name | What it sends | What it checks | Which manual check it replaces | What it does not check |
| --- | --- | --- | --- | --- |
| create returns 201 and a server-assigned id | | | | |
| read returns the same patient | | | | |
| search by identifier finds the patient | | | | |
| update creates version 2 | | | | |
| create an observation for a loaded synthetic patient | | | | |
| read and update the observation | | | | |
| search by patient and LOINC code | | | | |
| each clinical code test | | | | |
| body temperature has a UCUM Celsius unit | | | | |
| a patient with identifier and birthDate conforms to the training profile | | | | |
| a patient without birthDate fails the training profile | | | | |
| an invalid gender code is rejected | | | | |
| reading a patient that does not exist returns 404 | | | | |

## 3. Answer

1. Where does the test data come from? Is any of it real?
2. Which tests would catch a patient being shown with the wrong date of birth? Which would not?
3. What does the profile validation test prove that a status code check alone would not?
4. Which test would you show a clinical safety officer as evidence for a hazard about wrong clinical codes?
5. Name two things a browser test of the same feature would catch that this suite cannot.
6. Name two things this suite catches faster or more precisely than a browser test.

## 4. Make one change (optional, with the mentor)

Change one expected LOINC code in a copy of the suite, run it, and read the failure message. Put it back.

## Band 7 test management extra

Write half a page for your teams: "What good API test coverage looks like for a FHIR service". Use what you learned from the suite. Bring it to Automation strategy and metrics.

## What the mentor checks

- The map is complete and correct.
- The answers show the person understands what is and is not covered.
- The person can explain a failure message.
