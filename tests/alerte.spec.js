const {test,expect} = require('@playwright/test')


test.skip('should show alert prompt', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
  
    page.on('dialog', async dialog => {
      expect(dialog.type()).toContain('alert');
      expect(dialog.message()).toContain('I am an alert box!');
      await dialog.accept();
    });
  
    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(6000);
    await page.pause();
  });

//=======================================note=======================================

// const { test, expect } = require('@playwright/test');

// ==================== Test: Handling Alerts ====================
// Use `test.skip` to temporarily skip this test during execution.
test.skip('should show alvert prompt', async ({ page }) => {
// Navigate to the target website
  await page.goto('https://testautomationpractice.blogspot.com/');
  
// Listen for dialog events (e.g., alerts, confirms, prompts)
  page.on('dialog', async dialog => {
// Assert the dialog type is "alert"
    expect(dialog.type()).toBe('alert');
    
// Assert the dialog message contains specific text
    expect(dialog.message()).toContain('I am an alert box!');
    
    // Accept (close) the dialog
    await dialog.accept();
  });
  
  // Trigger the alert dialog by clicking the button
  await page.click("//button[@id='alertBtn']");
  
  // Pause execution for 6 seconds (optional, used for debugging)
  await page.waitForTimeout(6000);
  await page.pause();
});

// ==================== Test: Handling Prompts ====================
// Example of handling a prompt dialog
test('should handle promptv dialog', async ({ page }) => {
  // Navigate to the target website
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  // Listen for dialog events (e.g., prompts)
  page.on('dialog', async dialog => {
    // Assert the dialog type is "prompt"
    expect(dialog.type()).toBe('prompt');
    
    // Assert the dialog message contains specific text
    expect(dialog.message()).toContain('Please enter your name:');
    
    // Provide an input value for the prompt and accept it
    await dialog.accept('Playwright Test');
  });
  
  // Trigger the prompt dialog by clicking the button (replace selector with actual one)
  await page.click("//button[@id='promptBtn']");
  
  // Additional assertion to verify the prompt result (if applicable)
  const result = await page.locator("#promptResult").innerText();
  expect(result).toContain('Playwright Test'); // Verify the entered value is displayed
});

// ==================== Notes ====================
// - `test.skip`: Skips the test. Use when a test is not ready or is flaky.
// - `page.on('dialog')`: Handles dialog events, such as alerts, confirms, and prompts.
// - `dialog.accept(value)`: Accepts the dialog. For prompts, you can pass a value as input.
// - `dialog.dismiss()`: Dismisses the dialog (useful for confirms or prompts).
// - Assertions: Always validate dialog type and message to ensure proper handling.
// - `await page.pause()`: Use this to debug the test in headed mode and inspect browser behavior.
