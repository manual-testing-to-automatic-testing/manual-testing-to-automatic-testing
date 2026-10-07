# Playwright reading exercise

Evidence E4, part 3: a small change to `demo-playwright-javascript`, run successfully.

Tracks: B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM.

The programme writes new tests with Selenium WebDriver. Many teams also have Playwright suites, so you need to be able to read one and make a small, safe change. You are not expected to write new Playwright suites.

## Set up

1. Clone the demo: `git clone https://github.com/testingexamples/demo-playwright-javascript`
2. Follow its `README.md` to install: `npm install`, then `npx playwright install chromium` to download Playwright's own browser.
3. Run it: `npm test` (which runs `node src/demo.js`).
4. Watch Chromium open the fixture page, then read the printed HTML output.

If your machine cannot download Playwright's browser, ask your mentor to run it with you on theirs, and do the reading part on yours.

## Read

Open `src/demo.js`. Find each of these, and write one line about what it does, and what the Selenium WebDriver equivalent is:

| # | Find | What it does | Selenium equivalent |
| --- | --- | --- | --- |
| 1 | `chromium.launch(...)` | | |
| 2 | `browser.newContext()` and `context.newPage()` | | |
| 3 | `page.goto(...)` | | |
| 4 | `page.locator('#id-example-1')` | | |
| 5 | `page.locator('[name="name-example-1"]')`, `page.locator('.class-example-1')` | | |
| 6 | `page.locator('a', { hasText: 'Link Example 1' })` | | |
| 7 | `page.locator('xpath=//input[@type="submit"]')` | | |
| 8 | `text.fill("hello")` | | |
| 9 | `checkbox.check()` and `radio.check()` | | |
| 10 | `selectElement.selectOption({ index: 0 })` | | |
| 11 | `browser.close()` in the `finally` block | | |

Then answer:

- Does the demo assert anything, or only print? Is it a test or a walkthrough?
- The demo has no waits. Why does it not need them in Playwright, when the same Selenium code might?

## Change

Make **one small change** to `src/demo.js`. Choose one:

- **Option A:** locate the ordered list item `#ol-example-1-li-2`, and print its text (`bravo`).
- **Option B:** count the items in `#ul-example-1` with `page.locator('#ul-example-1 li').count()`, and print how many there are (3).
- **Option C:** check the second radio button, `#radio-example-1-option-2-id`, and print whether it is checked (`isChecked()`).

Then add a real assertion for your change, using the `assert` already imported in the file:

```javascript
assert.equal(await page.locator('#ol-example-1-li-2').textContent(), 'bravo');
```

Run the demo again. Then change the expected value on purpose, run it, and check that it fails. Put it back.

## Submit

1. Commit on a branch in your clone (or in the practice repository, if your mentor has copied the demo there).
2. Open a pull request, or show the diff to your mentor.
3. In the description, say which option you chose and paste the output.

## Compare (B5 and above)

Write the one-page comparison for E4 part 2: how Selenium and Playwright wait. Cover:

- Selenium: `findElement` fails straight away if the element is not there yet; explicit waits with `driver.wait` and `until` conditions, such as `until.elementLocated` and `until.elementIsVisible`.
- Playwright: locators that auto-wait before actions, actionability checks, and assertions that retry.
- Why `sleep` is never the answer: it is too slow when the page is fast, and too short when the page is slow.
- Which is more likely to give you a flaky test if you are careless, and what habit stops it.

## Track notes

- **B4-TE, B5-QA (S):** complete with support.
- **B6-QA, B6-TE (I):** complete independently.
- **B7-TE (I for LO11):** complete independently, and choose option B or C.
- **B7-TM (S):** complete with support. The goal is to be able to talk credibly with teams who own Playwright suites.
