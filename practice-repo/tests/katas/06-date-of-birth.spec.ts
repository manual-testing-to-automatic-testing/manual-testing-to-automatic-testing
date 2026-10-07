import { test, expect } from '@playwright/test';
import { validateDateOfBirth } from '../../src/katas/06-date-of-birth';

const today = new Date(Date.UTC(2026, 9, 7)); // 2026-10-07

test('accepts a normal date of birth', () => {
  expect(validateDateOfBirth('1985-04-12', today)).toEqual({ valid: true });
});

test('accepts today (a newborn)', () => {
  expect(validateDateOfBirth('2026-10-07', today)).toEqual({ valid: true });
});

test('accepts 29 February in a leap year', () => {
  expect(validateDateOfBirth('2024-02-29', today)).toEqual({ valid: true });
});

test('rejects 29 February in a non-leap year', () => {
  expect(validateDateOfBirth('2023-02-29', today)).toEqual({
    valid: false,
    reason: 'not a real date',
  });
});

test('rejects the wrong format', () => {
  expect(validateDateOfBirth('12/04/1985', today)).toEqual({ valid: false, reason: 'format' });
});

test('rejects a date in the future', () => {
  expect(validateDateOfBirth('2026-10-08', today)).toEqual({
    valid: false,
    reason: 'in the future',
  });
});

test('rejects a date more than 130 years ago', () => {
  expect(validateDateOfBirth('1896-10-06', today)).toEqual({ valid: false, reason: 'too old' });
});
