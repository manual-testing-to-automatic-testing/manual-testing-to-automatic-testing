# Kata guide

Evidence 8 for Module 8. Each kata is a JavaScript source file in `practice-repo/src/katas/`, such as `07-nhs-number.js`, with its Mocha tests in `practice-repo/tests/katas/`, such as `07-nhs-number.test.js`. To do a kata, empty the function body (keep its signature), then write the code until the tests pass, and add at least one test of your own. `practice-repo/tests/katas/README.md` has the same steps.

## How to do a kata

1. Read the description.
2. Write one unit test for the simplest case. Run it. Watch it fail.
3. Write just enough code to make it pass.
4. Add another test for another case. Repeat.
5. When the tests pass, tidy the code (refactor) and run the tests again.
6. Commit, and (from hour 113.5) open a pull request for the mentor to review.

Run the tests from the practice repository folder:

```sh
npm run test:katas
```

Your tests must fail when the code is wrong. Check this once for each kata: break the code on purpose, see the test fail, then put it back.

## Kata list

There are 12 katas in the practice repository. Each track does a set. This table is copied from `practice-repo/tests/katas/README.md`; if they ever disagree, the practice repository is right.

| Kata | Topic                                                | Band 3 (5) | Band 4, Band 7 test management (8) | Band 5, Band 6 (10) | Band 7 test engineering (10 harder) |
| ---- | ---------------------------------------------------- | ------ | ------------- | ----------- | ----------------- |
| 01   | Format a name, including apostrophes and diacritics  | ✓      | ✓             | ✓           |                   |
| 02   | Is a form field blank?                               | ✓      | ✓             | ✓           |                   |
| 03   | Count word occurrences                               |        | ✓             | ✓           | ✓                 |
| 04   | Temperature conversion                               | ✓      | ✓             | ✓           | ✓                 |
| 05   | Body mass index, with input checks                   |        | ✓             | ✓           | ✓                 |
| 06   | Validate a date of birth (test-shaped data)          | ✓      | ✓             | ✓           | ✓                 |
| 07   | NHS number modulus 11 check digit (test-shaped data) | ✓      | ✓             | ✓           | ✓                 |
| 08   | Defect priority from a risk matrix                   |        | ✓             | ✓           | ✓                 |
| 09   | Age in whole years                                   |        |               | ✓           | ✓                 |
| 10   | Summarise test results                               |        |               | ✓           | ✓                 |
| 11   | Parse a Gherkin scenario (harder)                    |        |               |             | ✓                 |
| 12   | Retry with exponential backoff (harder)              |        |               |             | ✓                 |

Katas 06 and 07 check test-shaped data (a date of birth and an NHS number), so every set includes at least two, as the spec requires. Katas 11 and 12 are the harder ones for Band 7 test engineering.

## Depth by track

- **Band 3 (read and discuss):** pair with the mentor on each kata. The mentor may type; you explain what each line does and write at least one test yourself for each kata.
- **Band 4, Band 5, Band 7 test management (with support):** write the code and tests yourself, with the mentor on hand.
- **Band 6, Band 7 test engineering (independently):** work independently. Ask for review, not help.

## What reviewers look for

- Tests exist for normal cases, edge cases, and invalid input.
- Test names say what they check.
- Each test fails when the code is wrong.
- The code is readable: clear names, no dead code.
- The person can explain every line.

## NHS number check digit (kata 07)

Use only made-up numbers. Never use a real person's NHS number.

1. Multiply each of the first 9 digits by a weight: 10 for the first digit, 9 for the second, down to 2 for the ninth.
2. Add the results.
3. Divide by 11 and take the remainder.
4. Subtract the remainder from 11. The result is the check digit.
5. If the result is 11, the check digit is 0. If it is 10, the number is invalid.
6. The number is valid if the check digit equals the 10th digit.

Use numbers in the 999 range, which is set aside for testing, that pass the check. The FHIR sandbox's synthetic patients use the same range.
