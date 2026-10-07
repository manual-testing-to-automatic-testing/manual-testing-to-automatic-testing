import { test, expect } from '@playwright/test';
import { countOccurrences } from '../../src/katas/03-count-occurrences';

test('counts whole words, ignoring case', () => {
  expect(countOccurrences('Help! I need help. Helping helps.', 'help')).toBe(2);
});

test('returns 0 when the word is absent', () => {
  expect(countOccurrences('nothing here', 'help')).toBe(0);
});

test('treats regular expression characters literally', () => {
  expect(countOccurrences('a.b a.b axb', 'a.b')).toBe(2);
});

test('rejects an empty word', () => {
  expect(() => countOccurrences('text', '')).toThrow('word must not be empty');
});
