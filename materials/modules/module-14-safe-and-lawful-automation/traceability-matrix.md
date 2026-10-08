# Traceability matrix

Evidence 14 for Module 14. Use the spreadsheet [traceability-matrix.tsv](traceability-matrix.tsv). Agree it with the clinical safety officer (CSO).

The matrix links each automated test to the hazard it protects against, the safety control it checks, and where its results are kept as evidence. It lets the CSO show, in the clinical safety case, that a control is tested on every change.

## Columns

| Column | What to write |
| --- | --- |
| `test_id` | A stable id for the test, for example `UI-PAT-001` or the test's file and name |
| `test_file` | Path to the test file |
| `test_name` | The test's name, exactly as in the code |
| `layer` | `unit`, `api`, or `browser` |
| `manual_case_id` | The manual case it replaces, from Evidence 7, if any |
| `hazard_id` | Hazard log id |
| `hazard` | Short hazard description, for example "Wrong patient's record shown" |
| `safety_control` | The control the test checks, for example "Search results show NHS number and date of birth" |
| `what_the_test_proves` | One line: which assertion checks the control |
| `what_it_does_not_prove` | One line: the limit of the test |
| `runs_in` | Where it runs, for example "CI on every pull request" |
| `evidence_location` | Where results are kept: the CI run, report artifact, and retention period |
| `last_passed` | Date and run link of the last pass |
| `cso_sign_off` | CSO name and date, once agreed |
| `notes` | Anything else |

## Rules

1. One row per test and hazard pair. A test may protect more than one hazard. A hazard may have more than one test.
2. A hazard with a control and **no** automated test is a gap. List it at the bottom with `test_id` set to `NONE`, and say whether it is tested manually.
3. A test that protects no hazard is fine. It does not need a row here.
4. Keep the matrix next to the tests, in the repository, and update it in the same pull request that changes a test.
5. Never put patient data in the matrix.

## Evidence the safety case needs

Agree with the CSO what form the evidence takes. Typical answer:

- the CI run link and date
- the JUnit test report artifact for that run, kept for the agreed retention period
- the test name and the assertion that checks the control
- the version of the software tested.

## Peer review (Band 6 quality assurance, Band 7 test engineering, Band 7 test management)

Review one other person's matrix. Check:

- [ ] Every row's test exists and has the name given.
- [ ] Each `what_the_test_proves` matches a real assertion in the code.
- [ ] Gaps are listed honestly.
- [ ] The evidence location is somewhere the CSO can actually reach.
- [ ] Nothing in the matrix is personal data.
