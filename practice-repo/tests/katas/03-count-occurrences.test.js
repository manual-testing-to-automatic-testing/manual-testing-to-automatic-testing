import { strict as assert } from 'node:assert';
import { countOccurrences } from '../../src/katas/03-count-occurrences.js';

it('counts whole words, ignoring case', () => {
  assert.equal(countOccurrences('Help! I need help. Helping helps.', 'help'), 2);
});

it('returns 0 when the word is absent', () => {
  assert.equal(countOccurrences('nothing here', 'help'), 0);
});

it('treats regular expression characters literally', () => {
  assert.equal(countOccurrences('a.b a.b axb', 'a.b'), 2);
});

it('rejects an empty word', () => {
  assert.throws(() => countOccurrences('text', ''), /word must not be empty/);
});
