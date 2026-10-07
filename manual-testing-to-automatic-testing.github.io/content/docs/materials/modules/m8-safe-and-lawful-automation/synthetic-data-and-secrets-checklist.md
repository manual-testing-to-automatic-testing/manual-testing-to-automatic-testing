# Synthetic data and secrets checklist

Evidence E8 for M8. Complete for every repository that holds your tests. Keep the completed checklist with your evidence.

## Synthetic data

- [ ] Every patient record used by my tests is synthetic. None is copied, sampled, or "anonymised" from real records.
- [ ] NHS numbers are from the `999` range reserved for testing, and pass the modulus 11 check.
- [ ] Names, addresses, and dates of birth are made up. None belongs to a real person I know of.
- [ ] Synthetic records are tagged as synthetic where the format allows (for example FHIR `meta.tag` code `synthetic`).
- [ ] My data includes at least **three rare or edge clinical cases**. Mine are:
  1. ______
  2. ______
  3. ______
- [ ] Data is built by a generator or data builder (for example Synthea, or a `syntheticPatient()` builder with overrides), or is an agreed fixed set held in the repository.
- [ ] Each test creates or owns its own data, so tests do not depend on each other.
- [ ] Screenshots, videos, and traces from my tests show only synthetic data.

Ideas for rare and edge cases: very old or newborn patients, gender `unknown`, names with apostrophes, hyphens, or diacritics, deceased patients, very long names, missing optional fields, the same name and date of birth for two different patients, extreme but valid clinical values.

## Secrets

- [ ] No passwords, tokens, API keys, or certificates are in the code, test data, or commit history.
- [ ] Credentials come from environment variables or the CI service's secret store.
- [ ] Test accounts are test-only accounts, with the least access the tests need.
- [ ] CI logs do not print secrets. (CI services usually mask stored secrets. Check anyway.)
- [ ] `.env` files are in `.gitignore`.

## Scan

- [ ] I ran the secrets scan in the practice pipeline (`practice-repo/.github/workflows/ci.yml`), or the organisation's equivalent, on each repository.
- [ ] I searched the repository for personal data patterns, for example 10-digit numbers that are not in the `999` range.

| Repository | Scan tool | Date | Result | Link |
| --- | --- | --- | --- | --- |
| | | | | |

## Controls that keep it clean

Write two or three sentences: what stops someone adding real data or a secret later? For example: the secrets scan runs on every pull request and blocks the merge; data builders are the only way tests create patients; reviewers check new test data.

______

## If you find a problem

If you find real personal data or a secret: stop, do not push, and report it at once to the information governance lead and your line manager, following the organisation's data breach process. Removing it from the latest commit is not enough: it stays in git history.
