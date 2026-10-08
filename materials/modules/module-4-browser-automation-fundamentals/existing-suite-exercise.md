# Existing suite exercise

Evidence 4, part 3: a small change to `demo-selenium-javascript`, an existing Selenium suite that someone else wrote, run successfully.

Tracks: Band 4 test engineering, Band 5 quality assurance, Band 6 quality assurance, Band 6 test engineering, Band 7 test engineering, and Band 7 test management with support.

Most of the automation you will meet at work was written by someone else. This exercise is about reading such code, running it, and making one small, safe change, without rewriting it in your own style.

## Set up

1. Clone the demo: `git clone https://github.com/testingexamples/demo-selenium-javascript`
2. Install: `npm install`. Selenium Manager downloads the Chrome driver the first time it runs.
3. Run it: `node src/demo.js`. Its `npm test` script is a placeholder, so run the file directly.
4. Watch Chrome open the fixture practice page, then read the printed HTML output.

## Read

Open `src/demo.js`. Find each of these, and write one line about what it does, and how the practice repository does the same thing:

| # | Find | What it does | In the practice repository |
| --- | --- | --- | --- |
| 1 | `new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build()` | | |
| 2 | The `Options` set at the top of the file | | |
| 3 | `driver.get(...)` | | |
| 4 | `driver.findElement(By.id("id-example-1"))` | | |
| 5 | `By.name`, `By.className`, `By.linkText`, and `By.xpath` | | |
| 6 | `sendKeys(...)` on the text input | | |
| 7 | `click()` on the checkbox and the radio button | | |
| 8 | `new Select(...)` and `selectByIndex(0)` | | |
| 9 | `driver.quit()` in the `finally` block | | |

Then answer:

- Does the demo assert anything, or only print? Is it a test or a walkthrough?
- The demo has no explicit waits. Why does it work on this page, and when would the same code become flaky?
- What would you have to change to run it in CI?

## Change

Make **one small change** to `src/demo.js`. Choose one:

- **Option A:** locate the ordered list item `#ol-example-1-li-2`, and print its text (`bravo`).
- **Option B:** count the items in `#ul-example-1` with `driver.findElements(By.css("#ul-example-1 li"))`, and print how many there are (3).
- **Option C:** click the second radio button, `#radio-example-1-option-2-id`, and print whether it is selected (`isSelected()`).

Wait explicitly for the element you use, with `driver.wait(until.elementLocated(...))`. Then add a real assertion for your change, using the `assert` already imported in the file:

```javascript
const item = await driver.wait(until.elementLocated(By.id("ol-example-1-li-2")), 10000);
assert.equal(await item.getText(), "bravo");
```

Run the demo again. Then change the expected value on purpose, run it, and check that it fails. Put it back.

## Submit

1. Commit on a branch in your clone (or in the practice repository, if your mentor has copied the demo there).
2. Open a pull request, or show the diff to your mentor.
3. In the description, say which option you chose and paste the output.

## Explain waiting (Band 5 and above)

Write the one-page explanation for Evidence 4 part 2: how Selenium waits. Cover:

- `findElement` fails straight away if the element is not there yet.
- Explicit waits: `driver.wait` with `until` conditions, such as `until.elementLocated`, `until.elementIsVisible`, and `until.elementTextIs`.
- Implicit waits, and why the practice repository keeps them at 0 and waits explicitly instead.
- Why `sleep` is never the answer: it is too slow when the page is fast, and too short when the page is slow.
- The habit that stops flaky tests: wait for the condition the test needs, then act or assert.

## Track notes

- **Band 4 test engineering, Band 5 quality assurance, Band 6 quality assurance (S):** complete with support.
- **Band 6 test engineering, Band 7 test engineering (I):** complete independently, and choose option B or C.
- **Band 7 test management (S):** complete with support. The goal is to be able to talk credibly with teams about the suites they already own.
