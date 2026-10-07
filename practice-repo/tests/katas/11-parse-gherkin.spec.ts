import { test, expect } from '@playwright/test';
import { parseScenario } from '../../src/katas/11-parse-gherkin';

test('parses a scenario with And steps', () => {
  const scenario = parseScenario(`
    # A comment
    Scenario: Search for help
      Given I am on the home page
      When I search for "help"
      Then I see "Search Results"
      And I see "Your search for \\"help\\""
  `);
  expect(scenario.name).toBe('Search for help');
  expect(scenario.steps.map((s) => s.keyword)).toEqual(['Given', 'When', 'Then', 'Then']);
  expect(scenario.steps[1]).toEqual({ keyword: 'When', text: 'I search for "help"' });
});

test('rejects And as the first step', () => {
  expect(() => parseScenario('Scenario: x\nAnd something')).toThrow(SyntaxError);
});

test('rejects a missing Scenario line', () => {
  expect(() => parseScenario('Given something')).toThrow('missing "Scenario:" line');
});
