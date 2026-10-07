import { strict as assert } from 'node:assert';
import { ageInYears } from '../../src/katas/09-age.js';

it('counts whole years', () => {
  assert.equal(ageInYears('1985-04-12', '2026-10-07'), 41);
});

it('the day before a birthday is one year younger', () => {
  assert.equal(ageInYears('1985-10-08', '2026-10-07'), 40);
  assert.equal(ageInYears('1985-10-07', '2026-10-07'), 41);
});

it('a newborn is 0', () => {
  assert.equal(ageInYears('2026-10-01', '2026-10-07'), 0);
});

it('a centenarian', () => {
  assert.equal(ageInYears('1921-02-28', '2026-10-07'), 105);
});

it('rejects a date before birth', () => {
  assert.throws(() => ageInYears('2026-10-08', '2026-10-07'), RangeError);
});
