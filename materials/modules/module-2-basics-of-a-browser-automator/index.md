# Module 2 Basics of a browser automator

20.5 hours, the same for every track. Signed off by the mentor with a walkthrough. Reviewed at Gate 0.

## Purpose

A browser automator does what a manual tester does in a browser, the same way every time. Module 2 gives each person a first working script that opens a page, finds things on it, checks them, and fills in and submits a form. Module 10 builds on it with resilient locators and a test framework, and Module 11 turns it into a real test.

The default automator is Selenium with JavaScript. A person may use another browser automator and language, with their mentor's agreement (Principle 9).

## Outcomes

- **Learning outcome 16:** write, run, and explain a browser automation script that requests a page, waits for it, selects elements by id, verifies text, clicks links, buttons, and select boxes, fills in form fields, and submits.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 2 Basics of a browser automator | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Hours 20–22.5: what a browser automator is; install `selenium-webdriver`; Selenium Manager and the Chrome driver | 2.5 hours | Core | Cohort |
| 2 | Hours 22.5–30: making a web request with `driver.get`, and waiting for the response with `driver.wait` and `until` | 2.5 hours | Core | Cohort |
| 3 | Hours 22.5–30: selecting page elements by id with `By.id`, and verifying page text with `getText` | 2.5 hours | Core | Cohort |
| 4 | Hours 22.5–30: check-in with the mentor | 1 hour | One to one | Person, mentor |
| 5 | Hours 22.5–30: practice on the fixture site | 1.5 hours | Practice | Pairs |
| 6 | Hours 30–37.5: clicking links and buttons, and choosing in select boxes with `Select` | 2.5 hours | Core | Cohort |
| 7 | Hours 30–37.5: filling in form fields with `sendKeys`, and submitting a form | 2.5 hours | Core | Cohort |
| 8 | Hours 30–37.5: closing the browser with `driver.quit`, always, in `finally` | 1 hour | Core | Cohort |
| 9 | Hours 30–37.5: write your walkthrough script | 2 hours | Practice | Each person |
| 10 | Hours 37.5–40.5: rehearse, then the walkthrough to the mentor | 2.5 hours | One to one | Person, mentor |

Each person's sessions add up to 20.5 hours.

## Activities

1. In a new folder, run `npm init -y`, set `"type": "module"` in `package.json`, and run `npm install selenium-webdriver`.
2. Start from this beginning, which requests the fixture page, waits for it, and verifies some text:

```javascript
import { Builder, Browser, By, until } from "selenium-webdriver";

const driver = await new Builder().forBrowser(Browser.CHROME).build();
try {
  await driver.get("https://testingexamples.github.io/en-001/practice/");
  const paragraph = await driver.wait(until.elementLocated(By.id("id-example-1")), 10000);
  const text = await paragraph.getText();
  console.log(text === "Id Example 1" ? "Text verified" : `Unexpected text: ${text}`);
} finally {
  await driver.quit();
}
```

3. Add each remaining step yourself, on the same page:
   - click the checkbox `#checkbox-example-1-id`
   - choose "bravo" in the select box `#select-example-1-id`
   - clear the text field `#text-example-1-id` and type your own text
   - click the Submit button, which submits the form `#form-1`
   - in a second run, click the link "Link Example 1", and check the new page's address.
4. Run the script on your own system with `node`. Then change one id on purpose, run it again, and read the error.

## Evidence

**Evidence 2:** a walkthrough to the mentor of a browser automation script, in Selenium with JavaScript or the automator and language the mentor agreed, against the testingexamples fixture site, that:

- makes a web request for a page, and waits for the response
- selects page elements by id, and verifies page text
- clicks a link, a button, and an option in a select box
- fills in form fields, and submits the form.

The person runs it on their own system and explains each step: what it finds, what it waits for, and what it checks.

## Assessment

The mentor signs off the walkthrough when the script runs on the person's own system, does every step, and the person can explain each one. Gate 0 (hour 88.5) records the sign-off.

| Walkthrough sign-off | Entry |
| --- | --- |
| Person | |
| Browser automator and language | |
| Request and wait; select by id; verify text | Yes / No |
| Click a link, a button, and a select box option | Yes / No |
| Fill in form fields and submit | Yes / No |
| Ran on the person's own system, and explained each step | Yes / No |
| Mentor, and date | |

## Resources

- Selenium documentation, "Getting started": <https://www.selenium.dev/documentation/webdriver/getting_started/>
- testingexamples Selenium JavaScript skill and demo: <https://github.com/testingexamples/selenium-javascript-skill>, <https://github.com/testingexamples/demo-selenium-javascript>
- The fixture site: <https://testingexamples.github.io/en-001/practice/>
