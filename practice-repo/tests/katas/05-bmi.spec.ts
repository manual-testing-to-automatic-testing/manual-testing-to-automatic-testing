import { test, expect } from '@playwright/test';
import { bmi } from '../../src/katas/05-bmi';

test('calculates BMI to 1 decimal place', () => {
  expect(bmi(70, 175)).toBe(22.9);
});

test('rejects zero, negative, and missing values', () => {
  expect(() => bmi(0, 175)).toThrow(RangeError);
  expect(() => bmi(70, -1)).toThrow(RangeError);
  expect(() => bmi(Number.NaN, 175)).toThrow(RangeError);
});
