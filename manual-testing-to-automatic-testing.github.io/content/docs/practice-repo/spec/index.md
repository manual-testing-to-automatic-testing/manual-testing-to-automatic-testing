# Spec: <suite name>

<!--
Template for a participant test suite. Copy this file to
spec/<suite-name>/index.md and fill it in BEFORE writing the tests.
Replace every <placeholder>. Delete these comments when done.
See spec/example/index.md for a filled-in example.
-->

## Summary

<!-- One paragraph: what this suite tests, with which tool, against which system, and why. -->

This suite uses Selenium WebDriver and Mocha, in JavaScript, to test <system or feature> on <environment>. It automates <number> manual test cases from <regression pack or source> that cover <user journey or risk>.

## Scope

<!-- What this spec covers, and what it does not. Name the test files. -->

This spec covers `<tests/.../file.test.js>` only: the scenarios it runs, the selectors and data it uses, and the criteria for it to pass.

Out of scope: <what is deliberately not tested here, and where it is tested instead, for example at the API layer, or manually>.

## Principles and rules

- `<tests/.../file.test.js>` is the implementation. This file is the specification. They must agree exactly. If they ever disagree, that is a defect in one of them: fix it before doing anything else.
- Every test makes real assertions, and each has been seen to fail when the behaviour is wrong.
- Only synthetic test data is used. Any NHS numbers are from the 999 test range.
- <Any other rule specific to this suite, for example "runs against the test environment only, never production".>

## Detail

<!--
One numbered item per test. For each: the Given-When-Then scenario, the
exact selectors, the exact data, and the exact expected results.
-->

1. **<Test name>**
   - Given <starting state>
   - When <action>
   - Then <expected outcome>
   - Selectors: `<selector>`
   - Data: `<data>`
   - Assert: <exact expected value or condition>
   - Manual test case: <id in the regression pack>
   - Hazards and safety controls: <hazard log ids, or "none">

2. **<Test name>**
   - ...

## Acceptance criteria

- All <number> tests above pass against <environment>.
- The suite runs in CI on every pull request.
- <Any timing or reliability criteria, for example "passes 50 times in a row with --repeat-each=50".>
- <Known issues that make it fail for reasons unrelated to the code, with dates.>

## Related topics

- [../README.md](../README.md)
- <Related specs, user stories, or defects>

## Sources

- <System under test URL or documentation>
- <Requirements, user stories, or interface specifications used>
