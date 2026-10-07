// @ts-check
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['node_modules', 'playwright-report', 'test-results'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Never commit a focused test: it silently skips every other test.
      'no-restricted-properties': [
        'error',
        { object: 'test', property: 'only', message: 'Remove test.only before committing.' },
        {
          object: 'describe',
          property: 'only',
          message: 'Remove describe.only before committing.',
        },
      ],
    },
  },
);
