# Exercise sheet: every fixture on testingexamples.github.io

Evidence 8, part 1. Write one Selenium JavaScript script that does every exercise below against <https://testingexamples.github.io>.

The fixtures come from the site's contract, `testingexamples.github.io/spec/index.md`. That contract is stable: the ids, names, classes, and text below will not change without notice.

Save it on your own branch of the practice repository, for example as `walkthroughs/fixtures.js`, and run it with `node walkthroughs/fixtures.js`. Start from the walkthrough pattern in the `selenium-javascript-skill`:

```javascript
import { Browser, Builder, By, Select, until } from 'selenium-webdriver';

async function walkthrough() {
  // Selenium Manager finds Chrome and downloads a matching driver.
  const driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://testingexamples.github.io');
    // Wait until the fixtures are on the page before you look for them.
    await driver.wait(until.elementLocated(By.id('id-example-1')), 10_000);
    // ... exercises go here ...
  } finally {
    await driver.quit();
  }
}

walkthrough().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Every WebDriver call returns a Promise, so `await` each one. For each exercise, log what you found, for example with `console.log(await element.getText())`. In Module 9 you turn this walkthrough into a real Mocha test with assertions.

## 1. Id examples

```html
<p id="id-example-1">Id Example 1</p>
<p id="id-example-2">Id Example 2</p>
<p id="id-example-3">Id Example 3</p>
```

- [ ] 1.1 Locate `#id-example-1` and log its text.
- [ ] 1.2 Locate all three by id and log each text.

## 2. Name examples

```html
<p name="name-example-1">Name Example 1</p>
<p name="name-example-2">Name Example 2</p>
<p name="name-example-3">Name Example 3</p>
```

- [ ] 2.1 Locate it with `By.name('name-example-1')` and log its text.
- [ ] 2.2 Locate the other two by name.

## 3. Class examples

```html
<p class="class-example-1">Class Example 1</p>
<p class="class-example-2">Class Example 2</p>
<p class="class-example-3">Class Example 3</p>
```

- [ ] 3.1 Locate it with `By.className('class-example-1')` and log its text.
- [ ] 3.1a Locate the same element with `By.css('.class-example-1')`.
- [ ] 3.2 Locate the other two by class.

## 4. Link examples

```html
<p><a href="https://1.example.com">Link Example 1</a></p>
<p><a href="https://2.example.com">Link Example 2</a></p>
<p><a href="https://3.example.com">Link Example 3</a></p>
```

- [ ] 4.1 Locate the link with text `Link Example 1`, using `By.linkText('Link Example 1')`.
- [ ] 4.2 Locate the same link with `By.partialLinkText('Example 1')`. Why is a partial match riskier?
- [ ] 4.3 Log the `href` of each of the three links with `getAttribute('href')`. Do not click them: they go to example domains.

## 5. Ordered list example

```html
<ol id="ol-example-1">
 <li id="ol-example-1-li-1">alfa</li>
 <li id="ol-example-1-li-2">bravo</li>
 <li id="ol-example-1-li-3">charlie</li>
</ol>
```

- [ ] 5.1 Locate the list by id, then count its items with `driver.findElements(By.css('#ol-example-1 li'))`.
- [ ] 5.2 Log the text of each item, in order.
- [ ] 5.3 Locate every item whose text is `bravo` with `By.xpath("//li[text()='bravo']")`. How many matches are there, and why? (Hint: look at the unordered list.)

## 6. Unordered list example

```html
<ul id="ul-example-1">
 <li id="ul-example-1-li-1">alfa</li>
 <li id="ul-example-1-li-2">bravo</li>
 <li id="ul-example-1-li-3">charlie</li>
</ul>
```

- [ ] 6.1 Locate the list by id and count its items.
- [ ] 6.2 Locate `bravo` inside the unordered list only, by searching inside the list element: `(await driver.findElement(By.id('ul-example-1'))).findElement(By.xpath(".//li[text()='bravo']"))`.
- [ ] 6.3 `findElement` throws `NoSuchElementError` when nothing matches; `findElements` returns an empty array. Use `findElements` to check that `#ul-example-1` has no fourth item.

## 7. Form input examples

The form has id `form-1`.

### 7.1 Text

```html
<label for="text-example-1-id">Text Example 1</label>
<input type="text" id="text-example-1-id" name="text-example-1-name" value="Text Example 1 Value">
```

- [ ] 7.1.1 Locate the input by id and log its starting value (`getAttribute('value')`).
- [ ] 7.1.2 Locate the same input by name: `By.name('text-example-1-name')`.
- [ ] 7.1.3 `clear()` it, type `hello` with `sendKeys('hello')`, and log the new value.

### 7.2 Checkbox

```html
<label for="checkbox-example-1-id">Checkbox Example 1</label>
<input type="checkbox" id="checkbox-example-1-id" name="checkbox-example-1-name" value="1" />
```

- [ ] 7.2.1 Click it, and log `isSelected()`.
- [ ] 7.2.2 Click it again, and log `isSelected()` again.

### 7.3 Radio

```html
<input type="radio" id="radio-example-1-option-1-id" name="radio-example-1-name" value="1" />1
<input type="radio" id="radio-example-1-option-2-id" name="radio-example-1-name" value="2" />2
<input type="radio" id="radio-example-1-option-3-id" name="radio-example-1-name" value="3" />3
```

- [ ] 7.3.1 Click option 1, and log which options are selected.
- [ ] 7.3.2 Click option 3. Log again. What happened to option 1, and why?

### 7.4 Select

```html
<select id="select-example-1-id" name="select-example-1-name">
  <option id="select-example-1-option-1-id" value="a">alfa</option>
  <option id="select-example-1-option-2-id" value="b">bravo</option>
  <option id="select-example-1-option-3-id" value="c">charlie</option>
</select>
```

Use the `Select` helper, not a plain click: `const select = new Select(await driver.findElement(By.id('select-example-1-id')))`.

- [ ] 7.4.1 Select by index 0 (`selectByIndex(0)`), and log the value of `getFirstSelectedOption()` (expect `a`).
- [ ] 7.4.2 Select by value `b` (`selectByValue('b')`), and log the value.
- [ ] 7.4.3 Select by visible text `charlie` (`selectByVisibleText('charlie')`), and log the value.

### 7.5 Submit

```html
<input type="submit" value="Submit">
```

- [ ] 7.5.1 Locate the submit button by XPath: `By.xpath("//input[@type='submit']")`.
- [ ] 7.5.2 Locate it by CSS: `By.css('input[type="submit"]')`.
- [ ] 7.5.3 Locate it by CSS with its value: `By.css('#form-1 input[value="Submit"]')`.
- [ ] 7.5.4 Which of the three locators would you choose for a real test, and why? Write one sentence.

## 8. Selenium IDE

- [ ] 8.1 Install the Selenium IDE extension in Chrome (<https://www.selenium.dev/selenium-ide/>). Record a session on <https://testingexamples.github.io>: type in the text input, click the checkbox, and select `bravo`.
- [ ] 8.2 Export the recording as JavaScript Mocha. Copy the code into your script. Rewrite it by hand so every line has a clear name and a comment, replace any pauses with explicit waits, and explain every line to your mentor.

## 9. Reflect

- [ ] 9.1 Which locators would break if a developer changed the page's styling? Which would survive?
- [ ] 9.2 This page is static, so most steps work without waits. Which steps would need an explicit wait on a real product page, and which `until` condition would you use?

## Track notes

- **Band 3 and Band 4 quality assurance (with support):** you may complete this by pairing with your mentor. You drive for at least sections 1, 4, and 7.
- **Band 4 test engineering, Band 5, Band 6 (independently):** complete on your own; ask for review.
- **Band 7 test engineering (lead or coach):** complete on your own, then lead the locator strategy clinic using sections 5, 6, and 7.5.
- **Band 7 test management (with support):** complete with support. Focus on section 7.5.4 and section 9: they are the questions you will ask your teams.
