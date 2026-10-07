import { test, expect } from '@playwright/test';
import { isBlank } from '../../src/katas/02-is-blank';

for (const value of [undefined, null, '', '   ', '\t\n']) {
  test(`${JSON.stringify(value)} is blank`, () => {
    expect(isBlank(value)).toBe(true);
  });
}

for (const value of ['a', ' a ', '0']) {
  test(`${JSON.stringify(value)} is not blank`, () => {
    expect(isBlank(value)).toBe(false);
  });
}
