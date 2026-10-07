import { defineConfig, devices } from '@playwright/test';

// Tests run against the production build, served by `vite preview`.
// Run `pnpm build` first. Port 4180, not Vite's default 4173, so these tests
// never pick up another project's preview server by mistake.
export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4180',
    trace: 'on-first-retry'
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'pnpm preview --port 4180 --strictPort',
    url: 'http://localhost:4180/en-001/',
    reuseExistingServer: !process.env.CI
  }
});
