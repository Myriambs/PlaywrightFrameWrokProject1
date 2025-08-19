const { test, expect } = require('@playwright/test');

test.skip('keyboard action test', async ({ page }) => {
  try {
    // Navigate to the target page
    await page.goto('https://gotranscript.com/text-compare');
    console.log('Navigated to the page');

    // Locate the first textarea
    const firstTextarea = page.locator("//textarea[@placeholder='Paste one version of the text here.']");

    // Type "Hello World" into the first textarea
    await firstTextarea.click();
    await page.keyboard.type("Hello World");
    console.log('Typed "Hello World"');

    // Select all text (Ctrl+A) and copy it (Ctrl+C)
    await firstTextarea.click({ clickCount: 3 }); // Ensure the text is selected
    await page.keyboard.press('Control+C');
    console.log('Copied the text');

    // Locate the second textarea
    const secondTextarea = page.locator("//textarea[@placeholder='Paste another version of the text here.']");

    // Click the second textarea and paste the copied text (Ctrl+V)
    await secondTextarea.click();
    await page.keyboard.press('Control+V');
    console.log('Pasted the text');

    // Validate that the copied text matches the original
    const pastedText = await secondTextarea.inputValue();
    console.log('Pasted text:', pastedText);
    await expect(secondTextarea).toHaveValue("Hello World");

    console.log('Test passed successfully');
  } catch (err) {
    console.error('An error occurred:', err);
  }
});
