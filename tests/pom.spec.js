// const { test, chromium, expect } = require('@playwright/test');

// // test('Only this test will run', async ({ page }) => {
// //   // Only this test will be executed, others will be skipped.
// //   await page.goto('https://playwright.dev');
// //   const title = await page.title(); // Await the title promise
// //   expect(title).toContain('Playwright'); // Now you can check the title
// // });

// test('handle many pages', async () => {
//   const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   const page1 = await context.newPage();
//   const page2 = await context.newPage();
//   const allPages = context.pages();
//   console.log(allPages.length);
// await browser.payse();
//   // Example of navigating to different pages
//   await page1.goto('https://www.google.com');
//   await expect(page1.title()).resolves.toMatch('Google');
//   await page1.waitForTimeout(5000);
//   await page2.goto('https://www.bing.com');
//   await expect(page2.title()).resolves.toMatch('Search - Microsoft Bing');
//   await page2.waitForTimeout(5000);
//   await page1.pause()
//   await page2.pause()
//   await browser.close();
// });