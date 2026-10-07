import { test, expect } from '@playwright/test';
import { formatName } from '../../src/katas/01-format-name';

test('formats family name in capitals, then given name', () => {
  expect(formatName('Alex', 'Testpatient')).toBe('TESTPATIENT, Alex');
});

test('trims and collapses spaces', () => {
  expect(formatName('  Alex   Jo ', ' Testpatient ')).toBe('TESTPATIENT, Alex Jo');
});

test('keeps apostrophes, hyphens, and diacritics', () => {
  expect(formatName('Siân', "O'Tëst-Núñez")).toBe("O'TËST-NÚÑEZ, Siân");
});

test('copes with a missing given or family name', () => {
  expect(formatName('', 'Testpatient')).toBe('TESTPATIENT');
  expect(formatName('Alex', '')).toBe('Alex');
});
