import { test, expect } from '@playwright/test';
import { ageInYears } from '../../src/katas/09-age';

test('counts whole years', () => {
  expect(ageInYears('1985-04-12', '2026-10-07')).toBe(41);
});

test('the day before a birthday is one year younger', () => {
  expect(ageInYears('1985-10-08', '2026-10-07')).toBe(40);
  expect(ageInYears('1985-10-07', '2026-10-07')).toBe(41);
});

test('a newborn is 0', () => {
  expect(ageInYears('2026-10-01', '2026-10-07')).toBe(0);
});

test('a centenarian', () => {
  expect(ageInYears('1921-02-28', '2026-10-07')).toBe(105);
});

test('rejects a date before birth', () => {
  expect(() => ageInYears('2026-10-08', '2026-10-07')).toThrow(RangeError);
});
