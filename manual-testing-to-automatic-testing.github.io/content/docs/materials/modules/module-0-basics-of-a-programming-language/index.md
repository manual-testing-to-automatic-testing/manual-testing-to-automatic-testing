# Module 0 Basics of a programming language

Hours 0–20, 20 hours, the same for every track. Signed off by the mentor with a walkthrough. Reviewed at Gate 0.

## Purpose

Every later module reads and writes code. Module 0 gives each person a first, unhurried pass at a programming language, so that code stops being a wall of symbols and becomes something they can read aloud, run, and explain. Module 5 builds on it with unit tests, katas, and the team's standards.

The default language is JavaScript, which the rest of the programme uses. A person may learn the basics in another language they prefer, with their mentor's agreement (Principle 9).

## Outcomes

- **Learning outcome 15:** read, run, and explain a simple program with variables, functions, conditionals, and loops, in JavaScript or another language.

## Depth by track

| Module | Band 3 | Band 4 quality assurance | Band 4 test engineering | Band 5 quality assurance | Band 6 quality assurance | Band 6 test engineering | Band 7 test engineering | Band 7 test management |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Module 0 Basics of a programming language | Independent | Independent | Independent | Independent | Independent | Independent | Independent | Independent |

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Start with the mentor: the programme, the three basics modules, and how a walkthrough works | 30 minutes | One to one | Person, mentor |
| 2 | Set up Node.js, Visual Studio Code, and git on your own system, and run your first `node hello.js` | 2 hours | Practice | Each person, with the mentor |
| 3 | Values, variables, and printing results | 2.5 hours | Core | Cohort |
| 4 | Functions: parameters, return values, and calling them | 2.5 hours | Core | Cohort |
| 5 | Conditionals: `if`, `else`, comparisons, and true and false | 2.5 hours | Core | Cohort |
| 6 | Loops: `for`, `for...of`, and `while` | 2.5 hours | Core | Cohort |
| 7 | Arrays and objects | 1.5 hours | Core | Cohort |
| 8 | Check-in with the mentor | 1 hour | One to one | Person, mentor |
| 9 | Reading other people's short functions aloud, and predicting what they print | 2 hours | Practice | Pairs |
| 10 | Write and run your walkthrough function | 2 hours | Practice | Each person |
| 11 | The walkthrough to the mentor | 1 hour | One to one | Person, mentor |

Each person's sessions add up to 20 hours.

## Activities

1. Install Node.js (the long-term support version), Visual Studio Code, and git. Run `node --version`.
2. Write and run small programs that use each of: variables, a function, an `if` and `else`, a loop, an array, and an object.
3. Read three short functions written by someone else. Before running each one, say what it will print. Then run it and check.
4. Write the function for your walkthrough. For example, a function that takes a list of test results and returns how many passed and failed, using a loop and a conditional:

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

console.log(countResults(["pass", "fail", "pass"]));
```

5. Run it on your own system with `node`, and change the input to check it does what you expect.

## Evidence

**Evidence 0:** a walkthrough to the mentor of a simple function, in JavaScript or the language the mentor agreed, that uses variables, functions, conditionals, and loops. The person runs it on their own system and explains it line by line: what each variable holds, what each conditional decides, and how many times each loop runs.

## Assessment

The mentor signs off the walkthrough when the person can run the code and explain every line without help. If not, they agree what to practise and repeat the walkthrough within the module's hours. Gate 0 (hour 60) records the sign-off.

| Walkthrough sign-off | Entry |
| --- | --- |
| Person | |
| Language | |
| What the function does | |
| Ran on the person's own system | Yes / No |
| Explained variables, functions, conditionals, and loops | Yes / No |
| Mentor, and date | |

## Resources

- MDN's JavaScript guide: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- Node.js, "Introduction to Node.js": <https://nodejs.org/en/learn/getting-started/introduction-to-nodejs>
- The practice repository's first katas, for reading only: [practice-repo/tests/katas/](../../../practice-repo/tests/katas/README.md)
