// @ts-check
import js from '@eslint/js';
import globals from 'globals';

export default [
  { ignores: ['node_modules', 'test-results'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: { ...globals.node },
    },
  },
  {
    files: ['tests/**/*.js'],
    languageOptions: { globals: { ...globals.mocha } },
    rules: {
      // Never commit a focused test: it silently skips every other test.
      'no-restricted-properties': [
        'error',
        { object: 'it', property: 'only', message: 'Remove it.only before committing.' },
        {
          object: 'describe',
          property: 'only',
          message: 'Remove describe.only before committing.',
        },
      ],
    },
  },
  {
    files: ['.mocharc.cjs'],
    languageOptions: { sourceType: 'commonjs' },
  },
];
