import { strict as assert } from 'node:assert';
import { formatName } from '../../src/katas/01-format-name.js';

it('formats family name in capitals, then given name', () => {
  assert.equal(formatName('Alex', 'Testpatient'), 'TESTPATIENT, Alex');
});

it('trims and collapses spaces', () => {
  assert.equal(formatName('  Alex   Jo ', ' Testpatient '), 'TESTPATIENT, Alex Jo');
});

it('keeps apostrophes, hyphens, and diacritics', () => {
  assert.equal(formatName('Siân', "O'Tëst-Núñez"), "O'TËST-NÚÑEZ, Siân");
});

it('copes with a missing given or family name', () => {
  assert.equal(formatName('', 'Testpatient'), 'TESTPATIENT');
  assert.equal(formatName('Alex', ''), 'Alex');
});
