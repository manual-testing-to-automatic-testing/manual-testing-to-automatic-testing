# Spec: testingexamples fixture contract

## Summary

This suite uses Selenium and Mocha, in JavaScript, to check the fixture section of the home page of <https://testingexamples.github.io>, a deliberately stable page for practising browser automation. It is the worked example for Modules 10 and 11 of the training programme: it locates elements by id, name, class name, link text, CSS, and XPath, acts on every form input, waits explicitly for every element, and makes real assertions about each with `node:assert/strict`.

## Scope

This spec covers `tests/ui/fixtures.test.js` and its page object `tests/ui/pages/fixture-page.js` only: the 11 tests they run, the exact selectors and strings they check, and the criteria for the suite to pass.

Out of scope: the rest of the site (header, navigation, footer, articles, and other locales), which can change freely without affecting the fixture contract.

## Principles and rules

- `tests/ui/fixtures.test.js` is the implementation. This file is the specification. They must agree exactly. If they ever disagree, that is a defect in one of them: fix it before doing anything else.
- Every selector comes from the fixture contract in `testingexamples.github.io/spec/index.md`. If the contract changes, change the page object, then this spec.
- Every test makes real assertions with `node:assert/strict`. Selenium does not wait by itself, so the page object waits explicitly for every element with `driver.wait(until.elementLocated(...))`, and clicks only once the element is in view and on top. No fixed sleeps.
- The browser is quit in an `after` hook, whatever happens.
- The site is a public fixture built for this purpose, so running this suite in CI is acceptable. Do not run it in a tight loop.

## Detail

Every test starts by opening `https://testingexamples.github.io/` and waiting for `#form-1`.

1. **Id examples have the expected text**
   - Assert `#id-example-1`, `#id-example-2`, and `#id-example-3` have text exactly `Id Example 1`, `Id Example 2`, and `Id Example 3`.

2. **Name examples have the expected text**
   - Assert `[name="name-example-1"]` to `-3` have text exactly `Name Example 1` to `Name Example 3`.

3. **Class examples have the expected text**
   - Assert `.class-example-1` to `-3` have text exactly `Class Example 1` to `Class Example 3`.

4. **Link examples point to the expected hrefs**
   - Locate each link by link text `Link Example 1` to `Link Example 3`.
   - Assert each `href` attribute, as written in the HTML (`getDomAttribute`), is exactly `https://1.example.com`, `https://2.example.com`, and `https://3.example.com`.

5. **Ordered list has alfa, bravo, charlie in order**
   - Assert the `li` items of `#ol-example-1` have texts exactly `alfa`, `bravo`, `charlie`, in that order.

6. **Unordered list has alfa, bravo, charlie**
   - Assert `#ul-example-1` has exactly 3 `li` items, with texts `alfa`, `bravo`, `charlie`.

7. **Text input starts with its default value and can be filled**
   - Given the input `#text-example-1-id` has value `Text Example 1 Value`
   - When it is cleared and `hello` is typed
   - Then its value is `hello`.

8. **Checkbox starts unchecked and can be checked**
   - Given the checkbox `#checkbox-example-1-id` is not selected
   - When it is clicked
   - Then it is selected.

9. **Radio buttons are mutually exclusive**
   - When `#radio-example-1-option-1-id` is clicked, then it is selected.
   - When `#radio-example-1-option-2-id` is then clicked, then option 2 is selected and option 1 is not.

10. **Select has alfa first and can select charlie**
    - Using Selenium's `Select` helper, assert the options of `#select-example-1-id` have texts exactly `alfa`, `bravo`, `charlie`.
    - Assert the first selected option's value is `a`.
    - When the option with visible text `charlie` is selected, then the selected option's value is `c`.

11. **Submit button is found by XPath**
    - Assert XPath `//input[@type="submit"]` finds an element with value `Submit`.

## Acceptance criteria

- All 11 tests pass against the live <https://testingexamples.github.io> site, in Chrome.
- The suite runs in the CI `ui` job on every pull request.
- Verified on 2026-10-07: 11 passed, headless, in about 4 seconds, three runs in a row.

## Related topics

- [../../README.md](../../README.md)
- [../index.md](../index.md): the template this spec follows.

## Sources

- <https://testingexamples.github.io>
- The fixture contract: `testingexamples.github.io/spec/index.md`, in <https://github.com/testingexamples/testingexamples.github.io>
- <https://www.selenium.dev/documentation/webdriver/waits/>
- <https://mochajs.org/>
