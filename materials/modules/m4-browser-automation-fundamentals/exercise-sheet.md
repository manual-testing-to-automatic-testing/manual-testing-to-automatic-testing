# Exercise sheet: every fixture on testingexamples.github.io

Evidence E4, part 1. Write one Playwright TypeScript script that does every exercise below against <https://testingexamples.github.io>.

The fixtures come from the site's contract, `testingexamples.github.io/spec/index.md`. That contract is stable: the ids, names, classes, and text below will not change without notice.

Start with `practice-repo/tests/ui/` and the walkthrough pattern from the `playwright-typescript-skill`:

```typescript
import { chromium, Browser, Page, Locator } from 'playwright';

async function walkthrough(): Promise<void> {
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();
  try {
    await page.goto('https://testingexamples.github.io');
    // ... exercises go here ...
  } finally {
    await browser.close();
  }
}

walkthrough().catch((err: Error): void => {
  console.error(err);
  process.exit(1);
});
```

For each exercise, log what you found, for example with `console.log(await locator.textContent())`. In M5 you turn this walkthrough into a real test with assertions.

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

- [ ] 2.1 Locate `[name="name-example-1"]` and log its text.
- [ ] 2.2 Locate the other two by name.

## 3. Class examples

```html
<p class="class-example-1">Class Example 1</p>
<p class="class-example-2">Class Example 2</p>
<p class="class-example-3">Class Example 3</p>
```

- [ ] 3.1 Locate `.class-example-1` and log its text.
- [ ] 3.2 Locate the other two by class.

## 4. Link examples

```html
<p><a href="https://1.example.com">Link Example 1</a></p>
<p><a href="https://2.example.com">Link Example 2</a></p>
<p><a href="https://3.example.com">Link Example 3</a></p>
```

- [ ] 4.1 Locate the link with text `Link Example 1`, using `page.locator('a', { hasText: 'Link Example 1' })`.
- [ ] 4.2 Locate the same link by role: `page.getByRole('link', { name: 'Link Example 1' })`.
- [ ] 4.3 Log the `href` of each of the three links. Do not click them: they go to example domains.

## 5. Ordered list example

```html
<ol id="ol-example-1">
 <li id="ol-example-1-li-1">alfa</li>
 <li id="ol-example-1-li-2">bravo</li>
 <li id="ol-example-1-li-3">charlie</li>
</ol>
```

- [ ] 5.1 Locate the list by id and count its items.
- [ ] 5.2 Log the text of each item, in order.
- [ ] 5.3 Locate the second item by role: `page.getByRole('listitem').filter({ hasText: 'bravo' })`. How many matches are there, and why? (Hint: look at the unordered list.)

## 6. Unordered list example

```html
<ul id="ul-example-1">
 <li id="ul-example-1-li-1">alfa</li>
 <li id="ul-example-1-li-2">bravo</li>
 <li id="ul-example-1-li-3">charlie</li>
</ul>
```

- [ ] 6.1 Locate the list by id and count its items.
- [ ] 6.2 Locate `bravo` inside the unordered list only, by chaining: `page.locator('#ul-example-1').getByText('bravo')`.

## 7. Form input examples

The form has id `form-1`.

### 7.1 Text

```html
<label for="text-example-1-id">Text Example 1</label>
<input type="text" id="text-example-1-id" name="text-example-1-name" value="Text Example 1 Value">
```

- [ ] 7.1.1 Locate the input by id and log its starting value (`inputValue()`).
- [ ] 7.1.2 Locate the same input by label: `page.getByLabel('Text Example 1')`.
- [ ] 7.1.3 Fill it with `hello` and log the new value.

### 7.2 Checkbox

```html
<label for="checkbox-example-1-id">Checkbox Example 1</label>
<input type="checkbox" id="checkbox-example-1-id" name="checkbox-example-1-name" value="1" />
```

- [ ] 7.2.1 Check it, and log `isChecked()`.
- [ ] 7.2.2 Uncheck it, and log `isChecked()` again.

### 7.3 Radio

```html
<input type="radio" id="radio-example-1-option-1-id" name="radio-example-1-name" value="1" />1
<input type="radio" id="radio-example-1-option-2-id" name="radio-example-1-name" value="2" />2
<input type="radio" id="radio-example-1-option-3-id" name="radio-example-1-name" value="3" />3
```

- [ ] 7.3.1 Check option 1, and log which options are checked.
- [ ] 7.3.2 Check option 3. Log again. What happened to option 1, and why?

### 7.4 Select

```html
<select id="select-example-1-id" name="select-example-1-name">
  <option id="select-example-1-option-1-id" value="a">alfa</option>
  <option id="select-example-1-option-2-id" value="b">bravo</option>
  <option id="select-example-1-option-3-id" value="c">charlie</option>
</select>
```

- [ ] 7.4.1 Select by index 0, and log the value (expect `a`).
- [ ] 7.4.2 Select by value `b`, and log the value.
- [ ] 7.4.3 Select by label `charlie`, and log the value.

### 7.5 Submit

```html
<input type="submit" value="Submit">
```

- [ ] 7.5.1 Locate the submit button by XPath: `page.locator('xpath=//input[@type="submit"]')`.
- [ ] 7.5.2 Locate it by CSS: `page.locator('input[type="submit"]')`.
- [ ] 7.5.3 Locate it by role: `page.getByRole('button', { name: 'Submit' })`.
- [ ] 7.5.4 Which of the three locators would you choose for a real test, and why? Write one sentence.

## 8. Codegen

- [ ] 8.1 Run `npx playwright codegen https://testingexamples.github.io`. Fill the text input, check the checkbox, and select `bravo`.
- [ ] 8.2 Copy the generated code into your script. Rewrite it by hand so every line has a clear name and a comment. Explain every line to your mentor.

## 9. Reflect

- [ ] 9.1 Which locators would break if a developer changed the page's styling? Which would survive?
- [ ] 9.2 Where did Playwright wait for you without you writing any wait?

## Track notes

- **B3 and B4-QA (S):** you may complete this by pairing with your mentor. You drive for at least sections 1, 4, and 7.
- **B4-TE, B5, B6 (I):** complete on your own; ask for review.
- **B7-TE (L):** complete on your own, then lead the locator strategy clinic using sections 5, 6, and 7.5.
- **B7-TM (S):** complete with support. Focus on section 7.5.4 and section 9: they are the questions you will ask your teams.
