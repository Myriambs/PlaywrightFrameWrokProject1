const {test,expect}=require('@playwright/test')

test.skip('should ',async ({page}) => {
await page.goto('https://demo.nopcommerce.com/register')

await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  await expect(page).toHaveTitle("nopCommerce demo store. Register")
const imagelogo = await page.locator("//img[@alt='nopCommerce demo store']")
await expect(imagelogo).toBeVisible()
// //expect enable 
const searchbar = await page.locator('#small-searchterms')
await expect(searchbar).toBeEnabled()

const maleBtn= await page.locator("label[for='gender-male']")
await maleBtn.click()
await expect(maleBtn).toBeChecked()
//expect to have text 
const texRegister = await page.locator("div[class='page-title'] h1")
expect(texRegister).toHaveText('Register')
//ici to contain text y3ni we contain element 
expect(texRegister).toContainText('Regi')

await page.pause()
})


test.skip('should handel input box and radio ones ', ({page}) => {
  
    page
})


//**==============================note  */

// const { test, expect } = require('@playwright/test');

// ==================== Test: Registration Page Validations ====================
test.skip('should validate elements on the registration page', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://demo.nopcommerce.com/register');

  // Assert the page URL
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

  // Assert the page title
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // Check if the logo image is visible
  const imageLogo = await page.locator("//img[@alt='nopCommerce demo store']");
  await expect(imageLogo).toBeVisible();

  // Assert the search bar is enabled
  const searchBar = await page.locator('#small-searchterms');
  await expect(searchBar).toBeEnabled();

  // Interact with the male radio button and verify it's checked
  const maleBtn = await page.locator("label[for='gender-male']");
  await maleBtn.click();
  await expect(page.locator("#gender-male")).toBeChecked();

  // Assert the 'Register' header text is correct
  const textRegister = await page.locator("div[class='page-title'] h1");
  await expect(textRegister).toHaveText('Register'); // Exact match
  await expect(textRegister).toContainText('Regi');  // Partial match

  // Pause for debugging purposes
  await page.pause();
});

// ==================== Test: Handling Input Boxes and Radio Buttons ====================
test.skip('should handle input boxes and radio buttons', async ({ page }) => {
  // Navigate to the registration page
  await page.goto('https://demo.nopcommerce.com/register');

  // Fill out input fields
  await page.locator('#FirstName').fill('John'); // Fill the 'First Name' field
  await page.locator('#LastName').fill('Doe');   // Fill the 'Last Name' field

  // Select the 'Female' radio button
  const femaleBtn = await page.locator("label[for='gender-female']");
  await femaleBtn.click();
  await expect(page.locator("#gender-female")).toBeChecked(); // Assert it's checked

  // Select the date of birth from dropdowns
  await page.locator("select[name='DateOfBirthDay']").selectOption('1');    // Day
  await page.locator("select[name='DateOfBirthMonth']").selectOption('January'); // Month
  await page.locator("select[name='DateOfBirthYear']").selectOption('2000'); // Year

  // Fill the 'Email' and 'Password' fields
  await page.locator('#Email').fill('john.doe@example.com');
  await page.locator('#Password').fill('Test@1234');
  await page.locator('#ConfirmPassword').fill('Test@1234');

  // Click the 'Register' button
  const registerBtn = await page.locator('#register-button');
  await registerBtn.click();

  // Assert registration success (modify selector/message as per actual behavior)
  const successMessage = await page.locator("div.result");
  await expect(successMessage).toHaveText('Your registration completed');

  // Pause for debugging purposes
  await page.pause();
});

// ==================== Notes ====================
/**
 * 1. **Assertions Used**:
 *    - `toBeVisible()`: Verifies an element is visible on the page.
 *    - `toBeEnabled()`: Checks that an input or button is not disabled.
 *    - `toHaveText()`: Verifies exact text in an element.
 *    - `toContainText()`: Verifies a partial match of the text.
 *    - `toBeChecked()`: Ensures a checkbox or radio button is selected.
 * 
 * 2. **Dropdown Selection**:
 *    - Use `selectOption` to interact with dropdowns. Pass the value, label, or index as an argument.
 * 
 * 3. **Debugging**:
 *    - Use `page.pause()` in headed mode for step-by-step debugging.
 * 
 * 4. **Skipped Tests**:
 *    - Tests are marked with `test.skip` to avoid execution during test runs. Remove `.skip` to enable.
 * 
 * 5. **Selectors**:
 *    - Replace selectors with the actual ones from the page if they differ.
 */
