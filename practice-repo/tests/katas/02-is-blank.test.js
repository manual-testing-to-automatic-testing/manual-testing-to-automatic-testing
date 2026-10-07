import { strict as assert } from 'node:assert';
import { isBlank } from '../../src/katas/02-is-blank.js';
for (const value of [undefined, null, '', '   ', '\t\n']) {
  it(`${JSON.stringify(value)} is blank`, () => {
    assert.equal(isBlank(value), true);
  });
}
for (const value of ['a', ' a ', '0']) {
  it(`${JSON.stringify(value)} is not blank`, () => {
    assert.equal(isBlank(value), false);
  });
}
