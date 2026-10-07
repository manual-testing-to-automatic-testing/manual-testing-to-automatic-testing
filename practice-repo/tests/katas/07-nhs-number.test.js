import { strict as assert } from 'node:assert';
import { isValidNhsNumber, isTestRangeNhsNumber } from '../../src/katas/07-nhs-number.js';

// All numbers here are synthetic, from the 999 test range.
it('accepts valid test-range numbers', () => {
  for (const n of ['9990010005', '9990011370', '9990012741']) {
    assert.equal(isValidNhsNumber(n), true, n);
  }
});

it('accepts spaces in the usual 3-3-4 format', () => {
  assert.equal(isValidNhsNumber('999 001 0005'), true);
});

it('rejects a wrong check digit', () => {
  assert.equal(isValidNhsNumber('9990010006'), false);
});

it('rejects numbers whose check digit would be 10', () => {
  // 999000000x: weighted sum gives check 10, so no 10th digit can be valid.
  for (let d = 0; d <= 9; d++) {
    assert.equal(isValidNhsNumber(`999000000${d}`), false);
  }
});

it('rejects the wrong length and non-digits', () => {
  assert.equal(isValidNhsNumber('999001000'), false);
  assert.equal(isValidNhsNumber('99900100055'), false);
  assert.equal(isValidNhsNumber('99900100O5'), false);
});

it('identifies the test range', () => {
  assert.equal(isTestRangeNhsNumber('9990010005'), true);
});
