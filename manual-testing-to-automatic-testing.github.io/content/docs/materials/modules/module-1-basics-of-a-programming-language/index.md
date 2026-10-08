# Module 1 Basics of a programming language

Hours 0–20, 20 hours, the same for every track. Signed off by the mentor with a walkthrough. Reviewed at Gate 0.

## Purpose

Every later module reads and writes code. Module 1 gives each person a first, unhurried pass at a programming language, so that code stops being a wall of symbols and becomes something they can read aloud, run, and explain. Module 8 builds on it with unit tests, katas, and the team's standards.

The default language is JavaScript, which the rest of the programme uses. A person may learn the basics in another language they prefer, with their mentor's agreement (Principle 9).

## Outcomes

- Read, run, and explain a simple program with variables, functions, conditionals, and loops, in JavaScript or another language.
- You have Node.js or equivalent on your system and can run it.
- You have Visual Studio Code or equivalent on your own system and can run it.

## Session plan

| # | Session | Duration | Format | Who |
| --- | --- | --- | --- | --- |
| 1 | Start with the mentor: the programme, the three basics modules, and how a walkthrough works | 30 minutes | One to one | Person, mentor |
| 2 | Install Node.js on your own system and try it | 1 hour | Practice | Each person, with the mentor |
| 3 | Install Visual Studio Code on your own system and try it | 1 hour | Practice | Each person, with the mentor |
| 4 | Values, variables, and printing results | 1 hour | Core | Cohort |
| 5 | Functions: parameters, return values, and calling them | 1 hour | Core | Cohort |
| 6 | Conditionals: `if`, `else`, comparisons, and true and false | 1 hour | Core | Cohort |
| 7 | Loops: `for`, `for...of`, and `while` | 1 hour | Core | Cohort |
| 8 | Arrays | 1 hour | Core | Cohort |
| 9 | Objects | 1 hour | Core | Cohort |
| 10 | Practice: write and run small programs of your own, with mentor help | 6.5 hours | Practice | Each person, with the mentor |
| 11 | Code commenting, including using AI for annotation and explanation | 1 hour | Core | Cohort |
| 12 | Check-in with the mentor | 1 hour | One to one | Person, mentor |
| 13 | Reading other people's short functions aloud, and predicting what they print | 1 hour | Practice | Pairs |
| 14 | Write and run your walkthrough function | 1 hour | Practice | Each person |
| 15 | The walkthrough to the mentor | 1 hour | One to one | Person, mentor |

Each person's sessions add up to 20 hours.

## Activities

1. Install Node.js (the long-term support version) and Visual Studio Code. Run `node --version`.
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

**Evidence 1:** a walkthrough to the mentor of a simple function, in JavaScript or the language the mentor agreed, that uses variables, functions, conditionals, and loops. The person runs it on their own system and explains it line by line: what each variable holds, what each conditional decides, and how many times each loop runs.

## Assessment

The mentor signs off the walkthrough when the person can run the code and explain every line without help. If not, they agree what to practise and repeat the walkthrough within the module's hours. Gate 0 (hour 88) records the sign-off.

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
