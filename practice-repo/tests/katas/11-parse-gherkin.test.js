import { strict as assert } from 'node:assert';
import { parseScenario } from '../../src/katas/11-parse-gherkin.js';

it('parses a scenario with And steps', () => {
  const scenario = parseScenario(`
    # A comment
    Scenario: Search for help
      Given I am on the home page
      When I search for "help"
      Then I see "Search Results"
      And I see "Your search for \\"help\\""
  `);
  assert.equal(scenario.name, 'Search for help');
  assert.deepEqual(
    scenario.steps.map((s) => s.keyword),
    ['Given', 'When', 'Then', 'Then'],
  );
  assert.deepEqual(scenario.steps[1], { keyword: 'When', text: 'I search for "help"' });
});

it('rejects And as the first step', () => {
  assert.throws(() => parseScenario('Scenario: x\nAnd something'), SyntaxError);
});

it('rejects a missing Scenario line', () => {
  assert.throws(() => parseScenario('Given something'), /missing "Scenario:" line/);
});
