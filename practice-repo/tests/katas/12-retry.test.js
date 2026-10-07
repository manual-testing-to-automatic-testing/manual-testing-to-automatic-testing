import { strict as assert } from 'node:assert';
import { retry } from '../../src/katas/12-retry.js';

it('returns as soon as the operation succeeds', async () => {
  let calls = 0;
  const delays = [];
  const result = await retry(
    async () => {
      calls += 1;
      if (calls < 3) throw new Error('not yet');
      return 'ok';
    },
    { attempts: 5, initialDelayMs: 100, sleep: async (ms) => void delays.push(ms) },
  );
  assert.equal(result, 'ok');
  assert.equal(calls, 3);
  assert.deepEqual(delays, [100, 200]);
});

it('throws the last error after the final attempt', async () => {
  let calls = 0;
  await assert.rejects(
    retry(
      async () => {
        calls += 1;
        throw new Error(`failure ${calls}`);
      },
      { attempts: 3, initialDelayMs: 1, sleep: async () => {} },
    ),
    /failure 3/,
  );
  assert.equal(calls, 3);
});
