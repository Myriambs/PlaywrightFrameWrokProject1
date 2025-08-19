// const { test, expect } = require('@playwright/test');

// // ==================== Tag-based Tests ====================
// // Explanation:
// // Use tags like `@reg` or `@sanity` to categorize tests.
// // You can filter and run specific tests using `--grep`.
// // Example: `npx playwright test --grep "@reg"`

// // Test with `test.only` to run this specific test only
// test.only('should tag concept in playwright@reg', async ({ page }) => {
//   console.log('Running only this test');
// });

// // Regular tagged tests
// test('should tag concept c in playwright@reg', async ({ page }) => {
//   console.log('Test 1');
// });

// test('should tag concept in2 playwright@reg', async ({ page }) => {
//   console.log('Test 2');
// });

// test('should tag concept in3 playwright@sanity', async ({ page }) => {
//   console.log('Test 3');
// });

// test('should tag concept in 4playwright@sanity', async ({ page }) => {
//   console.log('Test 4');
// });

// // ==================== Grouped Tests with test.describe ====================
// // Explanation:
// // `test.describe` groups related tests together under a common name.
// // This makes it easier to organize, filter, and manage tests.
// // Shared setup and teardown logic can be applied using `beforeEach` and `afterEach`.

// test.describe('E-commerce Tests', () => {
  
//   // Group for cart functionality tests
//   test.describe('Cart Functionality', () => {
//     test('should add item to cart', async ({ page }) => {
//       await page.goto('https://example.com/');
//       await page.click('text=Add to Cart');
//       await expect(page.locator('#cartItemCount')).toHaveText('1');
//     });

//     test('should remove item from cart', async ({ page }) => {
//       await page.goto('https://example.com/');
//       await page.click('text=Add to Cart');
//       await page.click('text=Remove from Cart');
//       await expect(page.locator('#cartItemCount')).toHaveText('0');
//     });
//   });

//   // Group for checkout functionality tests
//   test.describe('Checkout Functionality', () => {
//     test('should proceed to checkout', async ({ page }) => {
//       await page.goto('https://example.com/');
//       await page.click('text=Go to Checkout');
//       await expect(page.locator('text=Checkout Page')).toBeVisible();
//     });
//   });
// });

// // ==================== Running Tests ====================
// // Explanation:
// // 1. To run specific tests based on tags, use the `--grep` option:
// //    Example: `npx playwright test --grep "@reg"`
// // 2. To run all tests in a group, use the group name:
// //    Example: `npx playwright test --grep "Cart Functionality"`

// // ==================== Notes ====================
// // - `test.only`: Ensures only the marked test runs, ignoring all others.
// // - `test.describe`: Groups tests logically and applies shared setup or teardown logic.
// // - Tags like `@reg` or `@sanity` help categorize and filter tests during execution.



// //================================note the  --grep-invert tag 

// // u have test with @sanity@reg and other @sanity and two @reg , u want to make sure the sanity only works u write 
// // --grep @sanity --grep-invert @reg 
// // it like u ask that test that containes regand sanity u make sure to work it 