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

- **testingexamples.github.io fixture page:** form fields without labels (`label`, `select-name`). The fixture markup is a fixed contract, so do not change it for the course. Instead, tell screen reader users which fields are which, and give them the exercise sheet in [modules/m4-browser-automation-fundamentals/exercise-sheet.md](modules/m4-browser-automation-fundamentals/exercise-sheet.md), which names every fixture.
- **testingexamples Given-When-Then page and the fixture spec on GitHub:** scrollable code blocks cannot be reached by keyboard (`scrollable-region-focusable`). Provide the code as text files, or report the issue to the site's maintainer.
- **roles-skills.github.io:** colour contrast failures on 14 elements (`color-contrast`). Offer the self-assessment TSV files in `instruments/` as the alternative format, and report the issue to the site's maintainer.
- **loinc.org and iso.org:** blocked the automated browser (HTTP 403). Check them by hand.

## Resources

| Module | Resource | Status | Checked by | Date | Notes |
| --- | --- | --- | --- | --- | --- |
| M0 | roles-skills reference website | not yet checked | | | |
| M0 | roles-skills self-assessment guide | not yet checked | | | |
| M0 | UK GDaD PCF website | not yet checked | | | |
| M0 | Programme specification | not yet checked | | | |
| M0 | Capability self-assessment instrument (`instruments/`) | not yet checked | | | Must also work when completed in conversation |
| M1 | What is automatic testing? | not yet checked | | | |
| M1 | What is the purpose of automatic testing? | not yet checked | | | |
| M1 | What is the automatic testing pyramid? | not yet checked | | | Check any pyramid diagram has a text description |
| M1 | What is browser automatic testing? | not yet checked | | | |
| M1 | What is continuous integration automatic testing? | not yet checked | | | |
| M1 | How does Six Sigma lead manual testing into automatic testing? | not yet checked | | | |
| M1 | Automation candidate analysis template (TSV) | not yet checked | | | Check in the spreadsheet tools people use |
| M2 | Structured JavaScript course (D3) | not yet checked | | | Videos need captions |
| M2 | MDN JavaScript Guide, and using Promises | not yet checked | | | |
| M2 | Mocha and Node.js `assert` documentation | not yet checked | | | |
| M2 | What are related concepts for automatic testing? | not yet checked | | | |
| M2 | How to start learning automatic testing? | not yet checked | | | |
| M2 | Visual Studio Code and its documentation | not yet checked | | | Check screen reader mode and high-contrast themes |
| M2 | Kata guide and kata files | not yet checked | | | |
| M3 | Pro Git book | not yet checked | | | |
| M3 | The team's git hosting service (pull requests, review) | not yet checked | | | |
| M4 | Fixture site | not yet checked | | | |
| M4 | Fixture contract | not yet checked | | | |
| M4 | Selenium JavaScript skill | not yet checked | | | |
| M4 | Selenium JavaScript demo | not yet checked | | | |
| M4 | Playwright JavaScript demo, and the Playwright reading exercise | not yet checked | | | |
| M4 | Selenium documentation: WebDriver, locators, waits, select lists | not yet checked | | | |
| M4 | Selenium IDE browser extension | not yet checked | | | Recording happens in a browser extension panel: check it with a screen reader and keyboard only, and plan an alternative, such as writing the steps by hand with the mentor |
| M4 | Exercise sheet | not yet checked | | | |
| M5 | Given-When-Then Examples | not yet checked | | | |
| M5 | NHS Wales worked example and spec | not yet checked | | | |
| M5 | Selenium documentation: page object models | not yet checked | | | |
| M5 | Failure evidence in `test-results/` (screenshots, page source, console logs) | not yet checked | | | Screenshots are images: the page source and Mocha messages are the text alternative |
| M5 | Given-When-Then template and worked example | not yet checked | | | |
| M6 | HL7 FHIR R4 specification | not yet checked | | | |
| M6 | HAPI FHIR (background only) | not yet checked | | | |
| M6 | MDN: using the Fetch API | not yet checked | | | |
| M6 | LOINC | not yet checked | | | |
| M6 | FHIR sandbox guide | not yet checked | | | |
| M6 | Read-an-existing-suite exercise | not yet checked | | | |
| M7 | What is DevOps for automatic testing? | not yet checked | | | |
| M7 | Selenium documentation: Chrome options; Mocha reporters; GitHub Actions job matrix | not yet checked | | | |
| M7 | The organisation's CI service | not yet checked | | | Check pipeline logs and reports with a screen reader |
| M7 | CI failure triage template and triage exercise | not yet checked | | | |
| M8 | Clinical risk management process and hazard log | not yet checked | | | |
| M8 | Information governance policy | not yet checked | | | |
| M8 | Synthea | not yet checked | | | |
| M8 | `@axe-core/webdriverjs` documentation | not yet checked | | | |
| M8 | Traceability matrix template (TSV) | not yet checked | | | |
| M8 | Synthetic data and secrets checklist | not yet checked | | | |
| M9 | What metrics help automatic testing? | not yet checked | | | Check any embedded video has captions |
| M9 | How does artificial intelligence help automatic testing? | not yet checked | | | |
| M9 | Selenium documentation: waits (flaky tests) | not yet checked | | | |
| M9 | Flaky-test investigation and suite-health report templates | not yet checked | | | |
| M10 | Capstone briefs, scope agreement, presentation outline | not yet checked | | | |
| M11 | How does Six Sigma lead manual testing into automatic testing? | not yet checked | | | |
| M11 | Certification body's Green Belt course materials and exam (D8) | not yet checked | | | Ask the body for its accessible formats and exam adjustments |
| M11 | Green Belt project charter template | not yet checked | | | |

## When a check fails

1. Record what failed in the Notes column.
2. Find an alternative: another format, another resource with the same content, or a mentor-led session.
3. If a person's reasonable adjustment depends on it, tell the training lead before the module starts.
4. Recheck at the 6-monthly maintenance review.
