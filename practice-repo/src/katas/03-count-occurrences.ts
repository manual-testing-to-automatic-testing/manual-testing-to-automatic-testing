/** Kata 03: count how many times a word appears in a text, ignoring case. */
export function countOccurrences(text: string, word: string): number {
  if (word === '') throw new Error('word must not be empty');
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (text.match(new RegExp(`\\b${escaped}\\b`, 'gi')) ?? []).length;
}
