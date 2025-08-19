// // Import Playwright's test module
// import { test, expect } from '@playwright/test';

// // Example of a regular test
// test('Regular test', async ({ page }) => {
//   // This test will run normally.
//   await page.goto('https://example.com');
//   expect(page.url()).toBe('https://example.com');
// });

// // Example of test.only
// test.only('Only this test will run', async ({ page }) => {
//   // Only this test will be executed, others will be skipped.
//   await page.goto('https://playwright.dev');
//   expect(page.title()).toContain('Playwright');
// });

// // Example of test.skip
// test.skip('This test is skipped', async ({ page }) => {
//   // This test is completely ignored by the test runner.
//   await page.goto('https://example.com');
//   expect(page.title()).toBe('Example Domain');
// });

// // Example of test.fail
// test.fail('Expected to fail test', async ({ page }) => {
//   // This test is marked as expected to fail.
//   await page.goto('https://example.com');
//   expect(page.title()).toBe('Nonexistent Title'); // Intentionally incorrect
// });

// // Example of test.fixme
// test.fixme('This test needs fixing', async ({ page }) => {
//   // This test is skipped and marked as needing a fix.
//   await page.goto('https://example.com');
//   expect(page.url()).toBe('https://notexample.com'); // Placeholder for an issue
// });

// // Example of test.slow
// test.slow('This test is slow', async ({ page }) => {
//   // This test has an increased timeout due to its slow nature.
//   await page.goto('https://example.com');
//   await page.waitForTimeout(5000); // Simulating a slow process
//   expect(page.url()).toBe('https://example.com');
// });

// // Summary Table
// // Method	Purpose	Behavior
// // test.only	Runs only the specified test.	All other tests are skipped.
// // test.skip	Skips the specified test.	The test is ignored entirely.
// // test.fail	Marks a test as expected to fail.	Test suite does not fail if this test fails.
// // test.fixme	Marks a test as needing fixing and skips it.	Similar to skip, but indicates a need for future attention.
// // test.slow	Marks a test as slow.	Increases the timeout for this test.
// // These tools are incredibly helpful when managing a test suite with many test cases, enabling you to focus on specific issues or avoid unnecessary failures.