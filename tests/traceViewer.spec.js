const { test, expect } = require('@playwright/test');

test.skip('should trace viewer', async ({ page, context }) => {
  await page.goto('https://demo.nopcommerce.com/register')
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
  await expect(page).toHaveTitle("nopCommerce demo store. Register")
  const imagelogo = await page.locator("//img[@alt='nopCommerce demo store']")
  await expect(imagelogo).toBeVisible()
  await page.pause();
});
