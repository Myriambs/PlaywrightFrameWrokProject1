// const { test, expect } = require('@playwright/test');

// test.skip('should hooks in playwright', async ({ page }) => {
//   // Navigate to the page
//   await page.goto('https://demoblaze.com/index.html');
//   // Click the login button
//   await page.locator("//a[@id='login2']").click();
//   await page.waitForTimeout(3000)
//   // Fill in the login form
//   const loginName = await page.locator("//input[@id='loginusername']");
//   await loginName.fill('pavanol');
//   const pwd = await page.locator("//input[@id='loginpassword']");
//   await pwd.fill('test@123');
//   // Click the "Log in" button
//   await page.locator("//button[normalize-space()='Log in']").click();
//   await page.waitForTimeout(4000)
//   // Wait for the username element to contain the expected text
//   const userLocator = page.locator("//a[@id='nameofuser']");
//   await expect(userLocator).toHaveText('Welcome pavanol');
//   const allProduct = await page.$$(".hrefch");
//   expect(allProduct).toHaveLength(9);
// // //add to cart
// const addTocard = async (nameProduct) => {
//   // Ensure the product name is wrapped in single or double quotes within the XPath
//   await page.locator(`//a[normalize-space()='${nameProduct}']`).click();
//   await page.getByRole('link', { name: 'Add to cart' }).click();
//   };
  
//    await addTocard('Samsung galaxy s6');

//   page.on('dialog', async dialog => {
//     console.log(dialog.message());
//     expect(dialog.message()).toBe('Product added.');
//     await dialog.accept();
//   });

// // await page.waitForTimeout(4000)

//   //logout part 
// await page.locator("//a[@id='logout2']").click();
// const sing = await page.locator("//a[@id='signin2']").textContent()
// expect(sing).toBe("Sign up")
//   // Pause for debugging
//   await page.pause();
// });

// //1111+>Avoid Overlapping Logs
// // When Playwright runs tests in parallel (default behavior), multiple tests may write logs at the same time. 
// // This can make the logs appear interleaved and hard to read. 
// // Using --workers=1 forces tests to run one at a time, making the logs clean and sequential.

// //2222222=> Debugging Easier
// // Running tests sequentially is especially useful during debugging because:

// // Each test runs in isolation, making it easier to pinpoint failures.
// // Logs are easier to track since they belong to one test at a time.
// // Browser windows aren't opened and closed in parallel, reducing complexity when debugging UI interactions.


// // test.describe('Example of beforeEach and afterEach', () => {
// //   test.beforeEach(async ({ page }) => {
// //     console.log('[beforeEach] Setting up...');
// //     await page.goto('https://example.com');
// //   });

// //   test.afterEach(async ({ page }) => {
// //     console.log('[afterEach] Tearing down...');
// //     await page.close();
// //   });


// //   test('First test', async ({ page }) => {
// //     console.log('[First test] Running test 111111111111111111...');
// //   });

// //   test('Second test', async ({ page }) => {
// //     console.log('[Second test] Running test 2222222222222222...');
// //   });
// // });

// // test.beforeEach(async ({ page }) => {
// //   console.log('[beforeEach] Setting up...');
// //   await page.goto('https://example.com');
// // });

// //this is if the hooks are separated 
// test.beforeEach(async ({ page }) => {
//   console.log('[beforeEach] Setting up...');
//   await page.goto('https://demoblaze.com/index.html');
//   await page.locator("//a[@id='login2']").click();
//   await page.waitForTimeout(3000)
//   const loginName = await page.locator("//input[@id='loginusername']");
//   await loginName.fill('pavanol');
//   const pwd = await page.locator("//input[@id='loginpassword']");
//   await pwd.fill('test@123');
//   await page.locator("//button[normalize-space()='Log in']").click();
// });

// test('Test A', async ({ page }) => {
//   console.log('test A 11111111')
//   // Test logic
//   const userLocator = page.locator("//a[@id='nameofuser']");
//   await expect(userLocator).toHaveText('Welcome pavanol');
// const allProduct = await page.$$(".hrefch");
// expect(allProduct).toHaveLength(9);
// // //add to cart
// const addTocard = async (nameProduct) => {
//     // Ensure the product name is wrapped in single or double quotes within the XPath
//     await page.locator(`//a[normalize-space()='${nameProduct}']`).click();
//     await page.getByRole('link', { name: 'Add to cart' }).click();
//   };
  
//   await addTocard('Samsung galaxy s6');
//   page.on('dialog', async dialog => {
//     console.log(dialog.message());
//     expect(dialog.message()).toBe('Product added.');
//     await dialog.accept();
//   });
// });

// test('Test B', async ({ page }) => {
//   console.log('test A 222222')

//   await page.locator("//a[@id='logout2']").click();
//   const sing = await page.locator("//a[@id='signin2']").textContent()
//   expect(sing).toBe("Sign up")});

//   //please note that if there is a mention that the page variable is , let page = brower.newPage()
//   // we dont need to pass the page as params but nly mention it at the before function 

//   // the beforeAll and AfterAll , is when they ask to make sure the first test is made first then the rest of the other tests and the after all is the last to finish everything 
