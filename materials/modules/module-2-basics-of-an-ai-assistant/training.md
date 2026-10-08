# Basics of an AI assistant

The training content for [Module 2 Basics of an AI assistant](index.md): 20 hours, the same for every track, ending with a walkthrough to your mentor.

By the end, you can use an AI assistant to get training advice, plan your own continuing professional development, compare and contrast concepts, explain source code, and convert between user stories, Given-When-Then scenarios, and Selenium JavaScript. Above all, you can check every answer it gives you.

The default assistant is **Google Gemini AI Mode**: AI Mode in Google Search, which answers with links to its sources. You may use another AI assistant if your mentor agrees and the organisation's AI use policy allows it. Everything on this page works with any assistant.

## How to use this page

Work through the lessons in order. Each one has:

- **Time:** the hours in the [session plan](index.md#session-plan).
- **You will:** what you can do at the end of the lesson.
- **Key ideas:** what to understand.
- **Try it:** prompts to type, and what to look for in the answers.
- **Exercise:** your own work, which goes in your prompt log.
- **Check yourself:** questions to answer without the assistant.

Keep a **prompt log** from the first lesson: a document with each prompt you typed, a short note on the answer, and what you checked or corrected. You show it to your mentor in the walkthrough. A plain text file or a table like this is enough:

| Date | Lesson | Prompt | What the answer got right | What I checked or corrected |
| --- | --- | --- | --- | --- |
| | | | | |

| Lesson | Time |
| --- | --- |
| [1. What an AI assistant is, and the rules](#lesson-1-what-an-ai-assistant-is-and-the-rules) | 2 hours |
| [2. Prompting](#lesson-2-prompting) | 3 hours |
| [3. Asking for training advice](#lesson-3-asking-for-training-advice) | 1.5 hours |
| [4. Planning your continuing professional development](#lesson-4-planning-your-continuing-professional-development) | 2 hours |
| [5. Comparing and contrasting concepts](#lesson-5-comparing-and-contrasting-concepts) | 1.5 hours |
| [6. Explaining source code](#lesson-6-explaining-source-code) | 1.5 hours |
| Check-in with your mentor | 1 hour |
| [7. From user story to Given-When-Then](#lesson-7-from-user-story-to-given-when-then) | 2 hours |
| [8. From Given-When-Then to Selenium JavaScript, and back](#lesson-8-from-given-when-then-to-selenium-javascript-and-back) | 3 hours |
| [9. Your walkthrough](#lesson-9-your-walkthrough) | 2.5 hours |
| **Total** | **20 hours** |

## Lesson 1: What an AI assistant is, and the rules

**Time:** 2 hours.

**You will:** explain what an AI assistant does well and badly, and follow the rules for what never goes into a prompt.

### Key ideas

An AI assistant is built on a **large language model**: a program trained on a very large amount of text to predict what text comes next. When you ask it a question, it writes the answer that its training makes most likely. That is why it is fluent, fast, and often useful, and also why it can be wrong.

What AI assistants do well:

- explaining a concept in plain words, at the level you ask for
- giving a first draft: a plan, a list, a test scenario, some code
- offering several options to choose from
- rewording, summarising, and converting from one format to another
- answering follow-up questions without getting tired of them.

What AI assistants do badly:

- **Making things up.** An assistant can invent a fact, a function name, a book, or a reference, and state it confidently. This is often called a *hallucination*.
- **Being out of date.** It may describe an old version of a tool, such as an old Selenium method that has since been removed.
- **Agreeing too easily.** If you push back, it may agree with you even when you are wrong.
- **Not knowing your context.** It does not know your team, your product, your organisation's rules, or this programme, unless you tell it.
- **Not running anything.** Unless it says so and shows you the result, it has not run the code it wrote.

AI Mode in Google Search shows links to the pages it used. Use them: open the sources, and check that they say what the answer says.

### The rules

These rules come from the programme's Principle 13 and Principle 15, and from your organisation's AI use policy. Follow them every time.

1. **Never put real patient data into a prompt.** Not names, NHS numbers, dates of birth, addresses, conditions, test results, or anything else about a real patient, even "just one example".
2. **Never put personal data into a prompt**, about colleagues, yourself beyond what you choose to share, or anyone else.
3. **Never put credentials into a prompt:** passwords, tokens, keys, connection strings, or session cookies.
4. **Never put confidential code or documents into a prompt.** In this module, use only the fixture site, the practice repository, the testingexamples demos, and your own Module 0 and Module 1 work.
5. **You are responsible for what you use.** You must be able to explain every line you submit, whoever or whatever wrote it first.
6. **Check before you trust.** Treat every answer as a draft from a fast, confident colleague who is sometimes wrong.

If you are not sure whether something may go into a prompt, the answer is no. Ask your mentor.

### Try it

Open your AI assistant and type:

> I'm a manual software tester starting to learn test automation. In five bullet points, what are AI assistants good at and bad at, for someone like me? Then list three things I should never paste into an AI assistant at work.

Compare the answer with the lists above. Note anything it missed or got wrong.

### Exercise

1. Read your organisation's AI use policy. Write down, in your own words, three things it allows and three things it forbids.
2. Start your prompt log, with the prompt above as its first entry.

### Check yourself

- Why can an AI assistant state something false with confidence?
- Name four kinds of information that never go into a prompt.
- What do you do when an answer has links to sources?

## Lesson 2: Prompting

**Time:** 3 hours.

**You will:** write clear prompts, and improve an answer with follow-up prompts.

### Key ideas

A prompt is everything you tell the assistant. The clearer it is, the better the answer. A good prompt has four parts:

| Part | What it says | Example |
| --- | --- | --- |
| **Context** | Who you are, and the situation | "I'm a manual tester at Band 4, learning JavaScript for the first time." |
| **Goal** | What you want | "Explain what a loop is." |
| **Format** | How you want the answer | "In under 150 words, with one short JavaScript example." |
| **Examples** | What good looks like, if you can show it | "Like this: a variable is a labelled box that holds a value." |

You do not need all four every time, but the first answer is usually better when you give context, goal, and format.

#### A weak prompt and a strong prompt

Weak:

> explain selenium

Strong:

> I'm a manual tester learning browser automation with Selenium and JavaScript. Explain what Selenium does, in plain English, in under 200 words. Then show me the three lines of JavaScript that open a web page in Chrome, and explain each line.

The strong prompt gives context (who you are and what you use), a goal (explain Selenium and show opening a page), and a format (plain English, a word limit, three lines with explanations).

#### Follow-up prompts

The first answer is a draft. Improve it with follow-ups:

| To | Follow-up prompt |
| --- | --- |
| Simplify | "Explain that again for someone who has never written code." |
| Shorten | "Cut that to five bullet points." |
| Go deeper | "Say more about the second point, with an example." |
| Get options | "Give me three different ways to do this, and when each is best." |
| Correct it | "That method doesn't exist in Selenium 4. Use a method that does, and say which version you mean." |
| Make it check itself | "List anything in your answer you are not sure is correct." |
| Ask for sources | "Which official documentation says this? Give the page." |
| Change the format | "Put that in a table with columns for term, meaning, and example." |

If a conversation goes badly, start a new one with a better first prompt. Long conversations can drift.

#### Prompts that save you time

- **Ask for questions first:** "Before you answer, ask me any questions you need to give a good answer."
- **Ask for a role:** "Act as an experienced test automation mentor reviewing my plan."
- **Ask for a level:** "Assume I know manual testing well but have never programmed."

### Try it

1. Type the weak prompt "explain selenium". Note the answer.
2. Type the strong prompt above. Compare the two answers.
3. Use three follow-ups from the table on the strong answer. Note what each changed.

### Exercise

Write a strong prompt, using context, goal, and format, for each of these, and log each prompt and its answer:

1. What is the difference between a manual test and an automated test?
2. What does `npm install` do?
3. What is an HTML `id`, and why do testers like them?

For one of them, use at least three follow-ups to improve the answer, and log each one.

### Check yourself

- What are the four parts of a good prompt?
- When should you start a new conversation rather than add a follow-up?
- What follow-up asks the assistant to show its own doubts?

## Lesson 3: Asking for training advice

**Time:** 1.5 hours.

**You will:** ask an AI assistant for training advice, and judge it against this programme.

### Key ideas

An assistant can suggest what to practise, explain a topic in another way, or recommend resources. But it does not know this programme, your track, or your gaps, unless you tell it. Its advice is a second opinion. Your track guide, your mentor, and your individual learning plan come first.

Red flags in training advice:

- a book, course, or website that you cannot find
- a tool or version that is not the one the programme uses
- a plan that is far too big for the time you have
- advice that contradicts your mentor or the programme.

### Try it

> I'm a manual tester at Band 5 in a health care software team, learning test automation with JavaScript and Selenium. I have 7.5 hours a week for learning. Over the next 20 hours I'll be learning the basics of using an AI assistant, and after that, programming foundations in JavaScript. What should I practise, hour by hour, to get the most from those 20 hours? Keep it to one short table.

Then:

> Which of these suggestions would be risky in a health care setting, and why?

### Exercise

1. Ask for advice on one thing you found hard in Module 0 or Module 1.
2. Compare the advice with your [track guide](../../tracks/index.md) and the module pages. Mark each suggestion: **agree**, **disagree**, or **ask my mentor**.
3. Check every resource the assistant names. Does it exist? Is it current?
4. Log it all.

### Check yourself

- What comes before an AI assistant's advice, in this programme?
- Name two red flags in training advice.

## Lesson 4: Planning your continuing professional development

**Time:** 2 hours.

**You will:** draft a plan for your own continuing professional development with an AI assistant, and make it yours.

### Key ideas

**Continuing professional development** is how you keep growing in your role: the skills you build, how, and by when. In this programme, your development is measured against your band, your UK GDaD PCF role, and your role's skills, in the capability self-assessment. At Gate 0, you agree an **individual learning plan** with your line manager. The plan you draft in this lesson is your starting point for that meeting.

Good development goals are **specific, measurable, achievable, relevant, and time-bound**. For example:

- Weak: "Get better at automation."
- Strong: "By hour 150, write and run three automated browser tests for my team's referral form, reviewed by a developer, so that I meet my track's automation target in test engineering."

The assistant can help you find the words and the structure. It cannot tell you your real gaps: those come from your self-assessment and your manager.

### Try it

> Help me draft a development plan for the next 12 months. I'm a [your band and UK GDaD PCF role, for example: Band 4 associate quality assurance test analyst]. My goals are to [your goals, for example: write automated browser tests, and get better at planning tests]. I'm on a 280-hour training programme that covers JavaScript, Selenium, continuous integration, safe testing in health care, and a Lean Six Sigma Green Belt. Give me four goals, each specific, measurable, achievable, relevant, and time-bound, in a table with columns: goal, why it matters, how I'll do it, evidence, and by when.

Do not include your name, your organisation's name, or anything about patients or colleagues.

### Exercise

1. Draft the plan with the assistant.
2. Edit it until every goal is true for you, and in your words. Delete anything you would not really do.
3. Map each goal to a part of the self-assessment: Part A (your band), Part B (your UK GDaD PCF role), or Part C (your skills). Your track's page lists every item.
4. Save the plan, and bring it to your individual learning plan meeting at Gate 0.

| Goal | Why it matters | How I'll do it | Evidence | By when | Self-assessment part |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

### Check yourself

- What makes a development goal strong?
- Where do your real gaps come from: the assistant, or the self-assessment?

## Lesson 5: Comparing and contrasting concepts

**Time:** 1.5 hours.

**You will:** use an assistant to compare and contrast two concepts, and check its claims against a source you trust.

### Key ideas

Comparing two ideas side by side is one of the fastest ways to understand both. Ask for a table: what each is, when to use it, strengths, weaknesses, and an example. Then check the table against a trusted source, such as the [testingexamples articles](https://testingexamples.github.io/) or official documentation.

Pairs worth comparing in this programme:

- manual regression testing and automated regression testing
- a test plan and a test strategy
- unit tests, integration tests, and end-to-end tests
- explicit waits and fixed sleeps, in browser automation
- verification and validation
- a defect, a failure, and an error.

### Try it

> Compare manual regression testing and automated regression testing, for a health care software team. Use a table with rows for: what it is, cost to start, cost to repeat, speed, what it catches well, what it misses, and when to choose it. Then give one sentence on why most teams use both.

Then:

> Which rows of that table are opinions rather than facts?

### Exercise

1. Choose two pairs from the list. Compare each with the assistant.
2. For each table, find one trusted source, and mark each row **confirmed**, **wrong**, or **opinion**.
3. In your own words, write three sentences on the most surprising difference.
4. Log both.

### Check yourself

- Why is a comparison table a good format to ask for?
- What do you do with a row you cannot confirm?

## Lesson 6: Explaining source code

**Time:** 1.5 hours.

**You will:** ask an assistant to explain code, and check each part of the explanation against the code itself.

### Key ideas

An assistant is good at explaining code line by line, and at answering "what does this do?". It can still be wrong: it may describe what the code *usually* does, rather than what *this* code does, or invent a function that is not there. The code is the truth. Run it to check.

Only paste code you are allowed to share: in this module, your own Module 0 function, your Module 1 script, and the practice repository.

### Try it

Paste your Module 0 function, or this one, and ask:

```javascript
function countResults(results) {
  let passed = 0;
  let failed = 0;
  for (const result of results) {
    if (result === "pass") {
      passed = passed + 1;
    } else {
      failed = failed + 1;
    }
  }
  return { passed, failed };
}
```

> Explain this JavaScript function line by line, for someone who is new to programming. Then tell me what it returns for ["pass", "fail", "pass", "skip"], and why.

Run it with `node` and that input. Does the result match the explanation? A careful reader notices that `"skip"` counts as failed, because anything that is not `"pass"` goes to the `else`. Did the assistant say so?

### Exercise

1. Paste your Module 1 script, and ask for a step-by-step explanation.
2. Mark each sentence of the explanation **right** or **wrong**, by reading the code and running it.
3. Ask: "What could make this script fail on a slow network?" Check whether the answer mentions waiting.
4. Log it, with the sentences you marked wrong and why.

### Check yourself

- What is the truth: the code, or the explanation?
- What code may you paste into an assistant in this module?

## Lesson 7: From user story to Given-When-Then

**Time:** 2 hours.

**You will:** turn a user story into Given-When-Then scenarios with an assistant, and correct them.

### Key ideas

A **user story** says who wants what, and why:

> As a **patient**, I want to **book an appointment online**, so that **I do not have to phone the surgery**.

**Acceptance criteria** say when the story is done. A **Given-When-Then** scenario is one acceptance criterion written as an example, in a format called **Gherkin**:

```gherkin
Feature: Online appointment booking

  Scenario: A patient books the first free appointment
    Given a patient is signed in
    And there is a free appointment tomorrow at 9:00
    When the patient books the appointment tomorrow at 9:00
    Then the appointment is shown as booked
    And the patient is sent a confirmation
```

- **Given** sets up the situation.
- **When** is the one action the scenario is about.
- **Then** is the result you can see and check.
- **And** continues the step above it.

A **Scenario Outline** runs the same steps with different data:

```gherkin
  Scenario Outline: A patient cannot book an appointment in the past
    Given a patient is signed in
    When the patient tries to book an appointment on <date>
    Then the patient sees the message "<message>"

    Examples:
      | date      | message                            |
      | yesterday | You cannot book a past appointment |
      | last week | You cannot book a past appointment |
```

#### What good scenarios look like

- One behaviour per scenario.
- Written in the language of the user and the business, not of the screen: "books the appointment", not "clicks the blue button".
- A **Then** that you can observe and check.
- No real patient data: use made-up, clearly synthetic examples.
- Short: usually three to seven steps.

### Try it

> Here is a user story: "As a patient, I want to book an appointment online, so that I do not have to phone the surgery." Write four Given-When-Then scenarios in Gherkin: one main success scenario, one where no appointments are free, one for an appointment in the past, and one where the patient cancels. Follow these rules: one behaviour per scenario, business language rather than screen details, an observable Then, and only made-up data.

Then:

> Review your own scenarios against those rules, and fix any that break them.

### Exercise

1. Review each scenario yourself against the rules above. Correct at least one thing the assistant got wrong or could do better.
2. Ask for one more scenario that the assistant did not think of. Decide whether it is worth keeping.
3. Log the scenarios before and after your corrections.

### Check yourself

- What do Given, When, and Then each do?
- Why write "books the appointment" rather than "clicks the Book button"?
- When do you use a Scenario Outline?

## Lesson 8: From Given-When-Then to Selenium JavaScript, and back

**Time:** 3 hours.

**You will:** turn a scenario into a Selenium JavaScript script with an assistant, run it, fix it, and turn the code back into a scenario and a user story.

### Key ideas

An assistant can write a first draft of automation code quickly. Its most common mistakes are predictable, so look for them:

| Mistake | What it looks like | What to do instead |
| --- | --- | --- |
| Guessed locators | `By.id("submitBtn")`, when the page has no such id | Give the assistant the page's real ids, and check each one |
| Fixed sleeps | `await driver.sleep(3000)` | Wait for a stated condition: `driver.wait(until.elementLocated(...))` |
| Missing `await` | `driver.get(url);` | Every Selenium call returns a promise: `await driver.get(url);` |
| Old methods | `findElementById`, or other removed methods | Use `driver.findElement(By.id(...))`, and check the Selenium documentation |
| No real check | `console.log(text)` | An assertion that fails when the behaviour is wrong: `assert.equal(text, "bravo")` |
| Browser left open | No `driver.quit()` | `try` and `finally { await driver.quit(); }` |

The fixture site is the practice page for this programme. Its elements have stable ids, so use them:

| Element | id |
| --- | --- |
| A paragraph with the text "Id Example 1" | `id-example-1` |
| A text field | `text-example-1-id` |
| A checkbox | `checkbox-example-1-id` |
| A select box, with options alfa, bravo, and charlie | `select-example-1-id` |
| The form, with a Submit button | `form-1` |

### Try it

Start with a scenario about the practice page:

```gherkin
Feature: Practice form

  Scenario: A tester fills in the practice form
    Given I am on the practice page
    When I choose "bravo" in the select box
    And I type "hello" into the text field
    Then the select box shows "bravo"
    And the text field contains "hello"
```

Give the assistant the scenario, the page, and the ids:

> Write a Selenium JavaScript script, as an ES module for Node.js, using selenium-webdriver 4 and node:assert/strict, for this Gherkin scenario: [paste the scenario]. The page is https://testingexamples.github.io/en-001/practice/. Use these element ids: select box "select-example-1-id", text field "text-example-1-id". Rules: await every Selenium call; wait for the page with driver.wait and until.elementLocated, never sleep; check each Then with assert; close the browser in a finally block; put each Gherkin step as a comment above its code.

A good answer looks like this:

```javascript
import assert from "node:assert/strict";
import { Builder, Browser, By, Select, until } from "selenium-webdriver";

const driver = await new Builder().forBrowser(Browser.CHROME).build();
try {
  // Given I am on the practice page
  await driver.get("https://testingexamples.github.io/en-001/practice/");
  const selectElement = await driver.wait(until.elementLocated(By.id("select-example-1-id")), 10000);

  // When I choose "bravo" in the select box
  const select = new Select(selectElement);
  await select.selectByVisibleText("bravo");

  // And I type "hello" into the text field
  const textField = await driver.findElement(By.id("text-example-1-id"));
  await textField.clear();
  await textField.sendKeys("hello");

  // Then the select box shows "bravo"
  const chosen = await select.getFirstSelectedOption();
  assert.equal(await chosen.getText(), "bravo");

  // And the text field contains "hello"
  assert.equal(await textField.getAttribute("value"), "hello");

  console.log("Scenario passed");
} finally {
  await driver.quit();
}
```

Check the assistant's code against the table of mistakes, line by line, **before** you run it. Then run it with `node`. If it fails, read the error, and fix the code yourself, or ask the assistant with the exact error message.

Then make it fail on purpose: change `"bravo"` in the Then step to `"charlie"`, run it, and check that the assertion fails. Put it back. A check that cannot fail is not a check.

#### And back

> Here is a Selenium JavaScript script: [paste your working script]. Write the Gherkin scenario it tests, and then the user story it most likely belongs to.

Compare the scenario it writes with the one you started with. Differences show either a gap in your code or a gap in the assistant's reading of it.

### Exercise

1. Convert one of your Lesson 7 scenarios, or the practice form scenario, into Selenium JavaScript with the assistant.
2. Check the code against the table of mistakes. Fix every one you find, and log it.
3. Run it on your own system. Make one assertion fail on purpose, then put it back.
4. Convert the working code back into a scenario and a user story.
5. Log the round trip: story, scenarios, code, and the scenario and story that came back.

### Check yourself

- Name four common mistakes in AI-written Selenium code.
- Why give the assistant the page's real ids?
- How do you know that an assertion really checks something?

## Lesson 9: Your walkthrough

**Time:** 2.5 hours: about 1.5 hours to rehearse, and a 1-hour walkthrough with your mentor.

**You will:** show your mentor that you can do every part of this module, on your own system.

### What to show

Show your mentor your prompt log, and, live in your AI assistant, each of these:

| # | Show | From |
| --- | --- | --- |
| 1 | A clear prompt, and follow-up prompts that improve the answer | Lesson 2 |
| 2 | Asking for training advice, and how you judged it | Lesson 3 |
| 3 | Your draft continuing professional development plan, in your own words | Lesson 4 |
| 4 | A comparison of two concepts, with the rows you checked | Lesson 5 |
| 5 | An explanation of a piece of source code, checked against the code | Lesson 6 |
| 6 | A user story turned into Given-When-Then scenarios, with your corrections | Lesson 7 |
| 7 | Those scenarios turned into Selenium JavaScript that runs, and back again | Lesson 8 |
| 8 | Where you checked and corrected the assistant, and that no prompt held patient data, personal data, credentials, or confidential code | Every lesson |

### How to prepare

1. Read your prompt log from the start. Pick your best example for each row of the table.
2. Rehearse the walkthrough once, out loud, in about 45 minutes.
3. Be ready for your mentor to ask "how do you know that is right?" about any answer. Have your check ready.

### The sign-off

Your mentor signs off **Evidence 2** on the [sign-off sheet](index.md#assessment) when you can do each step on your own system, show where you checked and corrected the assistant, and every prompt has followed the rules. If something is not ready, you agree with your mentor what to practise, and show it again within the module's hours. Gate 0 records the sign-off.

## Prompt library

Copy and adapt these. Replace the parts in square brackets.

| Use | Prompt |
| --- | --- |
| Explain a concept | "I'm a manual tester learning [topic]. Explain [concept] in plain English, in under [number] words, with one example from software testing." |
| Simplify | "Explain that again for someone who has never written code." |
| Check itself | "List anything in your answer you are not sure is correct, and why." |
| Sources | "Which official documentation supports this? Give the pages." |
| Training advice | "I'm a [band and role] with [hours] hours a week for learning [topic]. What should I practise in the next [hours] hours? One short table." |
| Development plan | "Help me draft four development goals for the next [months] months, as a [band and role], each specific, measurable, achievable, relevant, and time-bound, in a table." |
| Compare | "Compare [A] and [B] for [context], in a table with rows for: what it is, when to use it, strengths, weaknesses, and an example." |
| Explain code | "Explain this [language] code line by line for a beginner, then say what it returns for [input]: [code]" |
| Story to scenarios | "Write [number] Given-When-Then scenarios in Gherkin for this user story: [story]. One behaviour each, business language, an observable Then, made-up data only." |
| Scenario to code | "Write Selenium JavaScript for this scenario: [scenario]. Page: [address]. Element ids: [ids]. Await every call, wait for conditions and never sleep, assert each Then, and quit the browser in finally." |
| Code to scenario | "Write the Gherkin scenario this code tests, then the user story it belongs to: [code]" |
| Fix an error | "This code fails with this error: [exact error]. Explain the cause, then show the smallest fix." |

## Glossary

| Term | Meaning |
| --- | --- |
| AI assistant | A program you talk to in plain language, which answers using a large language model. |
| Large language model | A program trained on a very large amount of text to predict the next words. |
| Prompt | Everything you tell the assistant, in one message. |
| Follow-up prompt | A later message that improves or changes an earlier answer. |
| Hallucination | A confident answer that is false, such as an invented fact or function. |
| Prompt log | Your record of prompts, answers, and what you checked. |
| Continuing professional development | How you keep growing in your role: what you learn, how, and by when. |
| User story | Who wants what, and why: "As a ..., I want ..., so that ...". |
| Acceptance criteria | What must be true for a user story to be done. |
| Given-When-Then | A way of writing an acceptance criterion as an example: the situation, the action, and the result. |
| Gherkin | The plain-text format for Given-When-Then scenarios, with Feature, Scenario, Given, When, Then, And, and Examples. |
| Scenario Outline | A scenario that runs once for each row of an Examples table. |
| Locator | How automation finds an element on a page, such as `By.id("text-example-1-id")`. |
| Assertion | A check in code that fails when the result is wrong, such as `assert.equal(actual, expected)`. |
| Explicit wait | Waiting for a stated condition, such as an element appearing, rather than for a fixed time. |

## Further reading

- [Module 2 Basics of an AI assistant](index.md): the module page, session plan, and sign-off sheet.
- [Module 0 Basics of a programming language](../module-0-basics-of-a-programming-language/index.md) and [Module 1 Basics of a browser automator](../module-1-basics-of-a-browser-automator/index.md): the code you explain in Lesson 6.
- The fixture site: <https://testingexamples.github.io/en-001/practice/>
- Selenium documentation: <https://www.selenium.dev/documentation/>
- Cucumber's Gherkin reference: <https://cucumber.io/docs/gherkin/reference/>
- Your organisation's AI use policy.
