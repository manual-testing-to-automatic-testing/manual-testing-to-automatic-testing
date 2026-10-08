# Accessibility check

Every resource in the [reading list](reading-list.md) is checked before the cohort starts, following Universal Design for Instruction (spec, "Inclusion and reasonable adjustments"). A resource that fails a check needs an alternative format, or a replacement, before it is used.

## Checklist for each resource

| # | Check | How |
| --- | --- | --- |
| 1 | **Screen reader** | Navigate the resource with a screen reader (for example VoiceOver or NVDA). Headings, links, tables, and code blocks are announced sensibly. |
| 2 | **Keyboard only** | Every link, control, and video player works without a mouse. Focus is visible. |
| 3 | **Contrast** | Text, including code blocks, meets WCAG 2.2 AA contrast (4.5:1 for normal text). Check light and dark themes. |
| 4 | **Zoom and reflow** | Readable at 200% zoom with no loss of content, and at 400% with no horizontal scrolling for prose. |
| 5 | **Captions and transcripts** | Every video has accurate captions. A transcript exists or can be provided. |
| 6 | **Alternative formats** | The content is available in at least one other format: text for video, a downloadable or printable version for web pages, or a summary from the mentor. |
| 7 | **Plain language** | Jargon is explained, or the session explains it. |
| 8 | **Images and diagrams** | Meaningful images have text alternatives. Diagrams are explained in text. |
| 9 | **Code samples** | Code is real text, not an image, so it can be read aloud, copied, and enlarged. |
| 10 | **Tools** | Tools used in the resource (editor, browser, CI) work with the assistive technology people use. |

Status values: **not yet checked**, **passed**, **passed with alternative** (say which), **failed** (say what replaces it).

## Automated scan

[accessibility-scan-results.md](accessibility-scan-results.md) holds the latest automated axe-core scan of every web resource in the reading list. To re-run it before each cohort:

```sh
cd scripts/accessibility-scan
npm install
npx playwright install chromium
npm run scan
```

The scan is an organiser's tool, run by the training lead, not by participants. Re-run it before each cohort, and whenever the reading list changes.

The scan supports checks 3 and 8 only, so every status below stays **not yet checked** until a person completes the manual checks. Findings from the 2026-10-07 scan of the JavaScript and Selenium reading list that need action before the cohort starts:

- **testingexamples.github.io fixture page:** form fields without labels (`label`, `select-name`). The fixture markup is a fixed contract, so do not change it for the course. Instead, tell screen reader users which fields are which, and give them the exercise sheet in [modules/module-8-browser-automation-fundamentals/exercise-sheet.md](modules/module-8-browser-automation-fundamentals/exercise-sheet.md), which names every fixture.
- **testingexamples Given-When-Then page and the fixture spec on GitHub:** scrollable code blocks cannot be reached by keyboard (`scrollable-region-focusable`). Provide the code as text files, or report the issue to the site's maintainer.
- **roles-skills.github.io:** colour contrast failures on 14 elements (`color-contrast`). Offer the self-assessment TSV files in `instruments/` as the alternative format, and report the issue to the site's maintainer.
- **loinc.org and iso.org:** blocked the automated browser (HTTP 403). Check them by hand.

## Resources

| Module | Resource | Status | Checked by | Date | Notes |
| --- | --- | --- | --- | --- | --- |
| Module 4 | roles-skills reference website | not yet checked | | | |
| Module 4 | roles-skills self-assessment guide | not yet checked | | | |
| Module 4 | UK GDaD PCF website | not yet checked | | | |
| Module 4 | Programme specification | not yet checked | | | |
| Module 4 | Capability self-assessment instrument (`instruments/`) | not yet checked | | | Must also work when completed in conversation |
| Module 5 | What is automatic testing? | not yet checked | | | |
| Module 5 | What is the purpose of automatic testing? | not yet checked | | | |
| Module 5 | What is the automatic testing pyramid? | not yet checked | | | Check any pyramid diagram has a text description |
| Module 5 | What is browser automatic testing? | not yet checked | | | |
| Module 5 | What is continuous integration automatic testing? | not yet checked | | | |
| Module 5 | How does Six Sigma lead manual testing into automatic testing? | not yet checked | | | |
| Module 5 | Automation candidate analysis template (TSV) | not yet checked | | | Check in the spreadsheet tools people use |
| Module 6 | Structured JavaScript course (Decision 3) | not yet checked | | | Videos need captions |
| Module 6 | MDN JavaScript Guide, and using Promises | not yet checked | | | |
| Module 6 | Mocha and Node.js `assert` documentation | not yet checked | | | |
| Module 6 | What are related concepts for automatic testing? | not yet checked | | | |
| Module 6 | How to start learning automatic testing? | not yet checked | | | |
| Module 6 | Visual Studio Code and its documentation | not yet checked | | | Check screen reader mode and high-contrast themes |
| Module 6 | Kata guide and kata files | not yet checked | | | |
| Module 7 | Pro Git book | not yet checked | | | |
| Module 7 | The team's git hosting service (pull requests, review) | not yet checked | | | |
| Module 8 | Fixture site | not yet checked | | | |
| Module 8 | Fixture contract | not yet checked | | | |
| Module 8 | Selenium JavaScript skill | not yet checked | | | |
| Module 8 | Selenium JavaScript demo | not yet checked | | | |
| Module 8 | Selenium JavaScript demo, and the existing suite exercise | not yet checked | | | |
| Module 8 | Selenium documentation: WebDriver, locators, waits, select lists | not yet checked | | | |
| Module 8 | Selenium IDE browser extension | not yet checked | | | Recording happens in a browser extension panel: check it with a screen reader and keyboard only, and plan an alternative, such as writing the steps by hand with the mentor |
| Module 8 | Exercise sheet | not yet checked | | | |
| Module 9 | Given-When-Then Examples | not yet checked | | | |
| Module 9 | NHS Wales worked example and spec | not yet checked | | | |
| Module 9 | Selenium documentation: page object models | not yet checked | | | |
| Module 9 | Failure evidence in `test-results/` (screenshots, page source, console logs) | not yet checked | | | Screenshots are images: the page source and Mocha messages are the text alternative |
| Module 9 | Given-When-Then template and worked example | not yet checked | | | |
| Module 10 | HL7 FHIR R4 specification | not yet checked | | | |
| Module 10 | HAPI FHIR (background only) | not yet checked | | | |
| Module 10 | MDN: using the Fetch API | not yet checked | | | |
| Module 10 | LOINC | not yet checked | | | |
| Module 10 | FHIR sandbox guide | not yet checked | | | |
| Module 10 | Read-an-existing-suite exercise | not yet checked | | | |
| Module 11 | What is DevOps for automatic testing? | not yet checked | | | |
| Module 11 | Selenium documentation: Chrome options; Mocha reporters; GitHub Actions job matrix | not yet checked | | | |
| Module 11 | The organisation's CI service | not yet checked | | | Check pipeline logs and reports with a screen reader |
| Module 11 | CI failure triage template and triage exercise | not yet checked | | | |
| Module 12 | Clinical risk management process and hazard log | not yet checked | | | |
| Module 12 | Information governance policy | not yet checked | | | |
| Module 12 | Synthea | not yet checked | | | |
| Module 12 | `@axe-core/webdriverjs` documentation | not yet checked | | | |
| Module 12 | Traceability matrix template (TSV) | not yet checked | | | |
| Module 12 | Synthetic data and secrets checklist | not yet checked | | | |
| Module 13 | What metrics help automatic testing? | not yet checked | | | Check any embedded video has captions |
| Module 13 | How does artificial intelligence help automatic testing? | not yet checked | | | |
| Module 13 | Selenium documentation: waits (flaky tests) | not yet checked | | | |
| Module 13 | Flaky-test investigation and suite-health report templates | not yet checked | | | |
| Module 14 | Capstone briefs, scope agreement, presentation outline | not yet checked | | | |
| Module 15 | How does Six Sigma lead manual testing into automatic testing? | not yet checked | | | |
| Module 15 | Certification body's Green Belt course materials and exam (Decision 8) | not yet checked | | | Ask the body for its accessible formats and exam adjustments |
| Module 15 | Green Belt project charter template | not yet checked | | | |

## When a check fails

1. Record what failed in the Notes column.
2. Find an alternative: another format, another resource with the same content, or a mentor-led session.
3. If a person's reasonable adjustment depends on it, tell the training lead before the module starts.
4. Recheck at the 6-monthly maintenance review.
