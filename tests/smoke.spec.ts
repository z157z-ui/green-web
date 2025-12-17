import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

/**
 * Smoke Tests for Green Builders Website
 * 
 * These tests verify that all critical pages:
 * 1. Load successfully (status 200)
 * 2. Render completely (footer visible)
 * 3. Capture screenshots for visual review
 */

// Ensure screenshots directory exists
const screenshotsDir = path.join(__dirname, "screenshots");
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// Define critical routes to test
const criticalRoutes = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/services", name: "services" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
  { path: "/admin/login", name: "admin-login" },
];

// Generate tests for each route
for (const route of criticalRoutes) {
  test.describe(`Smoke Test: ${route.name}`, () => {
    test(`should load ${route.path} successfully`, async ({ page, browserName }, testInfo) => {
      // Get viewport info for screenshot naming
      const viewport = page.viewportSize();
      const viewportName = viewport && viewport.width > 768 ? "desktop" : "mobile";
      const projectName = testInfo.project.name.replace(/\s+/g, "-").toLowerCase();

      // Navigate to page and capture response
      const response = await page.goto(route.path, {
        waitUntil: "networkidle",
        timeout: 30000,
      });

      // Assert: Status should be 200 (or 401/403 for protected routes)
      const status = response?.status();
      if (route.path.includes("/admin")) {
        // Admin routes might redirect or show auth screen
        expect(status === 200 || status === 401 || status === 403 || status === 307).toBeTruthy();
      } else {
        expect(status).toBe(200);
      }

      // Wait for page to be fully loaded
      await page.waitForLoadState("domcontentloaded");
      
      // Give animations time to complete
      await page.waitForTimeout(1000);

      // Assert: Footer should be visible (proves full render)
      // Skip footer check for admin pages which may have different layout
      if (!route.path.includes("/admin")) {
        const footer = page.locator("footer");
        await expect(footer).toBeVisible({ timeout: 10000 });
      }

      // Take screenshot
      const screenshotPath = path.join(
        screenshotsDir,
        `${route.name}-${projectName}.png`
      );
      
      await page.screenshot({
        path: screenshotPath,
        fullPage: true,
      });

      console.log(`✅ Screenshot saved: ${screenshotPath}`);
    });
  });
}

// Additional specific tests
test.describe("Page Specific Checks", () => {
  test("Home page has hero section", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    
    // Check for main heading or hero element
    const heroText = page.locator("h1").first();
    await expect(heroText).toBeVisible();
  });

  test("Projects page has project cards", async ({ page }) => {
    await page.goto("/projects");
    await page.waitForLoadState("networkidle");
    
    // Wait for project cards to load
    await page.waitForTimeout(1500);
    
    // Check for at least one project link
    const projectLinks = page.locator('a[href^="/projects/"]');
    const count = await projectLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Services page has service cards", async ({ page }) => {
    await page.goto("/services");
    await page.waitForLoadState("networkidle");
    
    // Wait for service cards to load
    await page.waitForTimeout(1500);
    
    // Check for at least one service link
    const serviceLinks = page.locator('a[href^="/services/"]');
    const count = await serviceLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("Contact page has form", async ({ page }) => {
    await page.goto("/contact");
    await page.waitForLoadState("networkidle");
    
    // Check for form element
    const form = page.locator("form");
    await expect(form).toBeVisible();
  });

  test("Navigation links work", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    
    // Check header navigation exists
    const header = page.locator("header");
    await expect(header).toBeVisible();
    
    // Check for navigation links
    const navLinks = header.locator("a");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});

// Performance checks
test.describe("Performance Checks", () => {
  test("Home page loads within 5 seconds", async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto("/", { waitUntil: "domcontentloaded" });
    
    const loadTime = Date.now() - startTime;
    console.log(`Home page load time: ${loadTime}ms`);
    
    expect(loadTime).toBeLessThan(5000);
  });
});

