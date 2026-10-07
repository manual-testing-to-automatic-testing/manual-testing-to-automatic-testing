# Environment checklist

Complete in the M0 set-up pairing session. The mentor ticks each item when it works on the person's machine.

| # | Item | How to check | Done |
| --- | --- | --- | --- |
| 1 | Node.js installed, at the version pinned in `practice-repo/` | `node -v` | [ ] |
| 2 | npm installed | `npm -v` | [ ] |
| 3 | git installed and configured with name and work email | `git config --get user.name` | [ ] |
| 4 | VS Code installed | Opens | [ ] |
| 5 | VS Code ESLint extension installed | Problems panel shows lint results for a `.js` file | [ ] |
| 6 | Practice repository cloned | `git clone` succeeds | [ ] |
| 7 | Dependencies installed | `npm install` succeeds in `practice-repo/` | [ ] |
| 8 | Google Chrome installed | Opens; Selenium Manager downloads the matching driver on the first test run | [ ] |
| 9 | First tests run | `npm run test:katas` and `npm run test:ui` pass in `practice-repo/` | [ ] |
| 10 | FHIR sandbox starts, for M6 | `npm run fhir` prints its address; stop it with Ctrl+C. Node.js only: no Docker | [ ] |
| 11 | Access to the team's repository | Can clone and open a pull request | [ ] |
| 12 | Access to the team's test environments | Can sign in with a test account | [ ] |
| 13 | Access to the team's CI service | Can see pipeline runs | [ ] |
| 14 | Accessibility settings set as the person prefers | For example screen reader, zoom, high-contrast theme | [ ] |

If an item cannot be done on training day 1, record it in the ILP with an owner and date.
