# Given-When-Then template

Use this to turn a manual test case into a plain-language scenario that a product owner, a tester, and a developer can all agree on before anyone writes code.

**Given** some starting state, **When** something happens, **Then** some outcome is true. This comes from behaviour-driven development (BDD). The plain-text syntax is called Gherkin.

The point is not to replace test code. It gives the team one shared sentence. The code underneath is what proves the sentence stays true.

## Template

Copy one block per scenario.

```gherkin
Feature: <the feature, in the user's words>

  # Source: <manual test case id from Evidence 4>
  # Hazard: <hazard log id, if any>
  # Reviewed by product owner: <name, date>

  Scenario: <one behaviour, in a short sentence>
    Given <the starting state>
    And <more starting state, if needed>
    When <the one action the user takes>
    Then <the outcome the user sees>
    And <another outcome, if needed>
```

## Rules for good scenarios

1. **One behaviour per scenario.** If you need two Whens, you probably have two scenarios.
2. **Use the user's words**, not the screen's code. "When I search for a patient by NHS number", not "When I click `#btn-search`".
3. **Every Then must be checkable.** Each Then becomes at least one assertion. "Then it works" is not checkable. "Then I see the patient's name and date of birth" is.
4. **Use synthetic data.** Never a real patient's details.
5. **Say what matters clinically.** If the scenario protects a safety control, name the hazard.
6. **Keep the Given short.** Set-up belongs in fixtures, not in long lists of steps.

## From manual case to scenario

| Manual test case | Given-When-Then |
| --- | --- |
| Pre-conditions | Given |
| Steps | When (usually one action, sometimes a short sequence) |
| Expected results | Then, one line per result |
| Test data | Named in Given, held in a fixture or data builder |

## From scenario to code

Comment each line of code with the step it belongs to, so a reader can trace the sentence into the code. See the [worked example](worked-example.md).

## Review checklist for the product owner

- [ ] The scenario describes behaviour that matters to users.
- [ ] The Then lines are what "working" means to you.
- [ ] Nothing important is missing.
- [ ] The data is synthetic.
