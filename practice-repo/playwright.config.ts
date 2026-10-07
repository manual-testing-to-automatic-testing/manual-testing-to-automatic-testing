import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 2 : undefined,
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      // M2: plain TypeScript unit tests. No browser is launched.
      name: 'katas',
      testDir: './tests/katas',
    },
    {
      // M4-M5: browser tests against the stable fixture site.
      name: 'ui',
      testDir: './tests/ui',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.FIXTURE_BASE_URL ?? 'https://testingexamples.github.io',
      },
    },
    {
      // M6: API tests against the local FHIR sandbox (fhir-sandbox/).
      name: 'api',
      testDir: './tests/api',
      use: {
        // Trailing slash so relative paths like 'Patient/x' resolve under /fhir/.
        baseURL: (process.env.FHIR_BASE_URL ?? 'http://localhost:8080/fhir').replace(/\/?$/, '/'),
        extraHTTPHeaders: {
          Accept: 'application/fhir+json',
        },
      },
    },
    {
      // M9: the flaky-test exercise. Not part of `npm test` or CI.
      name: 'flaky',
      testDir: './tests/flaky',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
