import { strict as assert } from 'node:assert';
import { bmi } from '../../src/katas/05-bmi.js';

it('calculates BMI to 1 decimal place', () => {
  assert.equal(bmi(70, 175), 22.9);
});

it('rejects zero, negative, and missing values', () => {
  assert.throws(() => bmi(0, 175), RangeError);
  assert.throws(() => bmi(70, -1), RangeError);
  assert.throws(() => bmi(Number.NaN, 175), RangeError);
});
