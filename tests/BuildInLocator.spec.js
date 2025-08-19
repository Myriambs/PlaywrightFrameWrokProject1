const {test,expect} = require('@playwright/test')

test.skip('should build in locator', async({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

// const logo = await page.getByAltText('company-branding')
// console.log(logo)
// expect(logo).toBeVisible()
//ici partie place holder 
const placeholder1 = await page.getByPlaceholder('Username').fill('Admin')
const placeholder2 = await page.getByPlaceholder('Password').fill('admin123')

// get by role now , u locat the role of the element we have a button and u mention the type of it an dthen the event realted to it 
await page.getByRole('button',{type:"submit"}).click()
await expect(await page.getByText('Raja Shree mahan Treutel')).toBeVisible()
  await page.pause()
})


//==============================note 
// const { test, expect } = require('@playwright/test');

// ==================== Test: Built-in Locators ====================
test.skip('should use builtx-in locators effectively', async ({ page }) => {
  // Navigate to the OrangeHRM demo login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // ==================== Using Built-in Locators ====================

  // 1. Using `getByPlaceholder` to locate elements by their placeholder attribute
  // Fill the username field (placeholder = "Username")
  const placeholder1 = await page.getByPlaceholder('Username').fill('Admin');
  
  // Fill the password field (placeholder = "Password")
  const placeholder2 = await page.getByPlaceholder('Password').fill('admin123');

  /**
   * Notes on `getByPlaceholder`:
   * - This locator is ideal for input fields with placeholder text.
   * - It simplifies locating elements without relying on specific selectors like IDs or classes.
   */

  // 2. Using `getByRole` to locate elements by their roles
  // Locate the submit button by its role ("button") and type ("submit"), then click it
  await page.getByRole('button', { type: "submit" }).click();

  /**
   * Notes on `getByRole`:
   * - Playwright assigns roles (e.g., button, textbox, link) to elements based on accessibility standards.
   * - Useful for locating interactive elements in a semantic and robust way.
   * - Example: Buttons, links, or even headings can be targeted by roles.
   */

  // 3. Using `getByText` to verify visible text
  // Verify if a specific text is visible after login
  await expect(await page.getByText('Raja Shree mahan Treutel')).toBeVisible();

  /**
   * Notes on `getByText`:
   * - Locates elements by their visible text content.
   * - Handy for checking user-facing strings or verifying UI text after an action.
   */

  // Pause execution for manual inspection
  await page.pause();
});

/**
 * General Notes for Built-in Locators:
 * 1. Playwright's built-in locators like `getByRole`, `getByPlaceholder`, and `getByText` are designed for semantic, accessible, and intuitive element selection.
 * 2. Using these locators ensures your tests are resilient to UI changes like class name or ID updates, as long as semantic roles or placeholders remain unchanged.
 * 3. Always verify locators in your browser using `page.pause()` to interact with the elements in real time.
 * 4. When testing login forms or similar workflows:
 *    - Test for incorrect credentials to validate error handling.
 *    - Check for elements' visibility and accessibility to ensure proper UX.
 */
