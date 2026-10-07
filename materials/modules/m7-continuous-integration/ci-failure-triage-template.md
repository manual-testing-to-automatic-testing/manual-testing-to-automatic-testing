# CI failure triage template

Use one block per failed CI run. A CI failure is like a defect report: say what failed, why, and what you did.

Every failure is one of three kinds:

| Kind | Meaning | Usual action |
| --- | --- | --- |
| **Product defect** | The software is wrong. The test did its job. | Raise a defect with steps, data, and the trace. Do not change the test. |
| **Test defect** | The test is wrong: a bad locator, a wrong expected value, shared state, timing. | Fix the test. If it is flaky, quarantine it with an owner and a deadline until fixed. |
| **Environment problem** | Something around the test failed: the test environment, network, a partner system, an expired certificate, CI capacity. | Raise it with the owner of the environment. Re-run only after the cause is known. |

Never re-run a failure until it goes green without knowing why it failed. A failure that goes away on re-run is still a signal.

## Triage record

| Field | Value |
| --- | --- |
| Date | |
| Pipeline and run link | |
| Branch or pull request | |
| Failed test(s) | |
| Failing step | |
| Error message (short) | |
| Evidence looked at | Log / HTML report / trace / screenshot / video |
| **Kind** | Product defect / Test defect / Environment problem |
| Why you think so | |
| Action taken | |
| Defect or ticket raised | |
| Owner | |
| Re-run result, after action | |
| Time from failure to triage | |

## Questions to ask

1. Did it fail on this change only, or on other branches too? (Other branches too: suspect environment.)
2. Does it fail every time, or sometimes? (Sometimes: suspect a flaky test or environment.)
3. What does the trace show at the failing step? Is the element there? Is the value wrong?
4. Did the code under test change in this pull request?
5. Did the test change in this pull request?
6. Is any external service, certificate, or account involved?

## Worked examples

| Failure | Kind | Why |
| --- | --- | --- |
| `expect(locator).toHaveText('About Us')` received `About us` after a content change | Product defect, or agreed change | The page text changed. Ask the product owner which is right. If the change was intended, update the test and the spec together. |
| `locator.click: Timeout` on `#btn-save`, after a developer renamed the button | Test defect | The locator depends on an id that changed. Use a role locator and ask for a stable test id. |
| `net::ERR_CERT_DATE_INVALID` on a live third-party site | Environment problem | The site's TLS certificate expired. Not a code problem. The testingexamples NHS Wales demo hit exactly this. |
| Passes alone, fails when run in parallel | Test defect | Tests share data. Give each test its own synthetic data. |
