import { test, expect } from '@playwright/test';
import { retry } from '../../src/katas/12-retry';

test('returns as soon as the operation succeeds', async () => {
  let calls = 0;
  const delays: number[] = [];
  const result = await retry(
    async () => {
      calls += 1;
      if (calls < 3) throw new Error('not yet');
      return 'ok';
    },
    { attempts: 5, initialDelayMs: 100, sleep: async (ms) => void delays.push(ms) },
  );
  expect(result).toBe('ok');
  expect(calls).toBe(3);
  expect(delays).toEqual([100, 200]);
});

test('throws the last error after the final attempt', async () => {
  let calls = 0;
  await expect(
    retry(
      async () => {
        calls += 1;
        throw new Error(`failure ${calls}`);
      },
      { attempts: 3, initialDelayMs: 1, sleep: async () => {} },
    ),
  ).rejects.toThrow('failure 3');
  expect(calls).toBe(3);
});
