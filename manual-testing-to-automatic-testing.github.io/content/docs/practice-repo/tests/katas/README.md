# Katas (Module 5)

Small programming exercises with unit tests. Each kata is a source file in
[`../../src/katas/`](../../src/katas/) and a test file here. Run them with:

```sh
npm run test:katas
```

## How to use them

1. Read the test file first: it is the specification.
2. Delete or empty the function body in the source file, keeping its signature.
3. Run `npm run test:katas` and watch the tests fail.
4. Write the function until every test passes.
5. Add at least one test of your own that the existing tests miss.
6. Open a pull request (Module 6) and ask your mentor to review it.

## Which katas each track does

The spec sets the number of katas for each track (Evidence 5).

| Kata | Topic                                                | Band 3 (5) | Band 4, Band 7 test management (8) | Band 5, Band 6 (10) | Band 7 test engineering (10 harder) |
| ---- | ---------------------------------------------------- | ---------- | ---------------------------------- | ------------------- | ----------------------------------- |
| 01   | Format a name, including apostrophes and diacritics  | ✓          | ✓                                  | ✓                   |                                     |
| 02   | Is a form field blank?                               | ✓          | ✓                                  | ✓                   |                                     |
| 03   | Count word occurrences                               |            | ✓                                  | ✓                   | ✓                                   |
| 04   | Temperature conversion                               | ✓          | ✓                                  | ✓                   | ✓                                   |
| 05   | Body mass index, with input checks                   |            | ✓                                  | ✓                   | ✓                                   |
| 06   | Validate a date of birth (test-shaped data)          | ✓          | ✓                                  | ✓                   | ✓                                   |
| 07   | NHS number modulus 11 check digit (test-shaped data) | ✓          | ✓                                  | ✓                   | ✓                                   |
| 08   | Defect priority from a risk matrix                   |            | ✓                                  | ✓                   | ✓                                   |
| 09   | Age in whole years                                   |            |                                    | ✓                   | ✓                                   |
| 10   | Summarise test results                               |            |                                    | ✓                   | ✓                                   |
| 11   | Parse a Gherkin scenario (harder)                    |            |                                    |                     | ✓                                   |
| 12   | Retry with exponential backoff (harder)              |            |                                    |                     | ✓                                   |

Band 3 participants pair with their mentor on every kata. Katas 06 and 07 are
the two that check test-shaped data, which the spec requires of every track,
so every track does both.
