import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright Configuration for Green Builders Website
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use */
  reporter: [
    ["html", { open: "never" }],
    ["list"],
  ],
  
  /* Shared settings for all the projects below */
  use: {
    /* Base URL to use in actions like `await page.goto('/')` */
    baseURL: "http://localhost:3000",
    
    /* Collect trace when retrying the failed test */
    trace: "on-first-retry",
    
    /* Take screenshot on failure */
    screenshot: "only-on-failure",
  },

  /* Configure projects for major browsers and viewports */
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "Mobile iPhone 13",
      use: {
        ...devices["iPhone 13"],
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },

  /* Output folder for test artifacts */
  outputDir: "tests/test-results",
});

