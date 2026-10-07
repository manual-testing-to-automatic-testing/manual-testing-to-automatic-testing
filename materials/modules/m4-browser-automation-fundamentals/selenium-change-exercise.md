# Selenium change exercise

Evidence E4, part 3: one new locator added to `demo-selenium-typescript`, run successfully.

Tracks: B4-TE, B5-QA, B6-QA, B6-TE, B7-TE, B7-TM.

Many organisations still have Selenium suites. You need to be able to read one and make a small, safe change. You are not expected to write new Selenium suites.

## Set up

1. Clone the demo: `git clone https://github.com/testingexamples/demo-selenium-typescript`
2. Follow its `README.md` to install: `npm install`.
3. Run it: `npm test` (which runs `ts-node src/demo.ts`).
4. Watch Chrome open the fixture site, then read the printed HTML output.

On macOS, the first run of a manually downloaded `chromedriver` may show an "Apple could not verify" warning. See the `selenium-typescript-skill` common pitfalls.

## Read

Open `src/demo.ts`. Find each of these, and write one line about what it does:

| # | Find | What it does |
| --- | --- | --- |
| 1 | `new Builder().forBrowser(Browser.CHROME)` | |
| 2 | `driver.get("https://testingexamples.github.io")` | |
| 3 | `driver.findElement(By.id("id-example-1"))` | |
| 4 | `By.name`, `By.className`, `By.linkText`, `By.xpath` | |
| 5 | `text.sendKeys("hello")` | |
| 6 | `checkbox.click()` | |
| 7 | the `Select` helper for the select input | |
| 8 | `driver.quit()` in the `finally` block | |

Then answer:

- Does the demo assert anything, or only print? Is it a test or a walkthrough?
- Where would you need an explicit wait (`WebDriverWait`) if the page loaded slowly?

## Change

Add **one new locator** to `src/demo.ts`. Choose one:

- **Option A:** find the ordered list item `#ol-example-1-li-2` with `By.id`, and print its text (`bravo`).
- **Option B:** find all items in `#ul-example-1` with `driver.findElements(By.css('#ul-example-1 li'))`, and print how many there are (3).
- **Option C:** find the second radio button, `#radio-example-1-option-2-id`, click it, and print whether it is selected (`isSelected()`).

Then add a real assertion for your new locator, using the `assert` already imported in the file:

```typescript
assert.equal(await element.getText(), 'bravo');
```

Run the demo again. Then change the expected value on purpose, run it, and check that it fails. Put it back.

## Submit

1. Commit on a branch in your clone (or in the practice repository, if your mentor has copied the demo there).
2. Open a pull request, or show the diff to your mentor.
3. In the description, say which option you chose and paste the output.

## Compare (B5 and above)

Write the one-page comparison for E4 part 2: how Playwright and Selenium wait. Cover:

- Playwright: auto-waiting before actions, actionability checks, and web-first assertions that retry.
- Selenium: `findElement` fails straight away if the element is not there; explicit waits with `WebDriverWait` and `until` conditions.
- Why `sleep` is never the answer: it is too slow when the page is fast, and too short when the page is slow.
- Which is less likely to give you a flaky test, and why.

## Track notes

- **B4-TE, B5-QA (S):** complete with support.
- **B6-QA, B6-TE (I):** complete independently.
- **B7-TE (I for LO11):** complete independently, and choose option B or C.
- **B7-TM:** complete with support. The goal is to be able to talk credibly with teams who own Selenium suites.
