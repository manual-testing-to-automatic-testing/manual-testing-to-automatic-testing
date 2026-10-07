import { strict as assert } from 'node:assert';
import { validateDateOfBirth } from '../../src/katas/06-date-of-birth.js';

const today = new Date(Date.UTC(2026, 9, 7)); // 2026-10-07

it('accepts a normal date of birth', () => {
  assert.deepEqual(validateDateOfBirth('1985-04-12', today), { valid: true });
});

it('accepts today (a newborn)', () => {
  assert.deepEqual(validateDateOfBirth('2026-10-07', today), { valid: true });
});

it('accepts 29 February in a leap year', () => {
  assert.deepEqual(validateDateOfBirth('2024-02-29', today), { valid: true });
});

it('rejects 29 February in a non-leap year', () => {
  assert.deepEqual(validateDateOfBirth('2023-02-29', today), {
    valid: false,
    reason: 'not a real date',
  });
});

it('rejects the wrong format', () => {
  assert.deepEqual(validateDateOfBirth('12/04/1985', today), { valid: false, reason: 'format' });
});

it('rejects a date in the future', () => {
  assert.deepEqual(validateDateOfBirth('2026-10-08', today), {
    valid: false,
    reason: 'in the future',
  });
});

it('rejects a date more than 130 years ago', () => {
  assert.deepEqual(validateDateOfBirth('1896-10-06', today), { valid: false, reason: 'too old' });
});
