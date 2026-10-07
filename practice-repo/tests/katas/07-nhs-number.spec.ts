import { test, expect } from '@playwright/test';
import { isValidNhsNumber, isTestRangeNhsNumber } from '../../src/katas/07-nhs-number';

// All numbers here are synthetic, from the 999 test range.

test('accepts valid test-range numbers', () => {
  for (const n of ['9990010005', '9990011370', '9990012741']) {
    expect(isValidNhsNumber(n), n).toBe(true);
  }
});

test('accepts spaces in the usual 3-3-4 format', () => {
  expect(isValidNhsNumber('999 001 0005')).toBe(true);
});

test('rejects a wrong check digit', () => {
  expect(isValidNhsNumber('9990010006')).toBe(false);
});

test('rejects numbers whose check digit would be 10', () => {
  // 999000000x: weighted sum gives check 10, so no 10th digit can be valid.
  for (let d = 0; d <= 9; d++) {
    expect(isValidNhsNumber(`999000000${d}`)).toBe(false);
  }
});

test('rejects the wrong length and non-digits', () => {
  expect(isValidNhsNumber('999001000')).toBe(false);
  expect(isValidNhsNumber('99900100055')).toBe(false);
  expect(isValidNhsNumber('99900100O5')).toBe(false);
});

test('identifies the test range', () => {
  expect(isTestRangeNhsNumber('9990010005')).toBe(true);
});
