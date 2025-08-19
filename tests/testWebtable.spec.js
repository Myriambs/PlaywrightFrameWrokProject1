const { test, expect } = require('@playwright/test');

// Utility function to log messages
const log = (message, type = 'info') => {
  const prefix = { info: '[INFO]', warn: '[WARN]', error: '[ERROR]' }[type];
  console.log(`${prefix} ${message}`);
};

// Utility function to filter rows by text
const findRowByText = async (rows, text) => {
  return rows.filter({
    has: page.locator('td'),
    hasText: text,
  });
};
test.skip('should filter and check a checkbox in the table', async ({ page }) => {
  const tableSelector = '#productTable';
  const targetText = 'Smartwatch';
  const checkboxSelector = 'input[type="checkbox"]';

  try {
    // Navigate to the page and wait for the table
    log('Navigating to the page...');
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForSelector(tableSelector);

    // Locate the table and its rows
    const table = page.locator(tableSelector);
    const rows = table.locator('tbody tr');

    const rowCount = await rows.count();
    log(`Total rows in the table: ${rowCount}`);

    // Log all rows (optional debugging)
    for (let i = 0; i < rowCount; i++) {
      const rowText = await rows.nth(i).textContent();
      log(`Row ${i + 1}: ${rowText}`);
    }

    // Filter rows for the target text
    const matchRow = await findRowByText(rows, targetText);
    const matchCount = await matchRow.count();

    if (matchCount === 0) {
      log(`No rows found with text: '${targetText}'.`, 'warn');
      return; // Exit if no match found
    }

    log(`Found ${matchCount} matching row(s) for text: '${targetText}'.`);
    log(`Filtered row content: ${await matchRow.first().textContent()}`);

    // Interact with the checkbox in the matched row
    const checkbox = matchRow.locator(checkboxSelector);

    if (await checkbox.count() === 0) {
      log('No checkbox found in the matching row.', 'error');
      return;
    }

    await checkbox.check();
    log('Checkbox checked successfully.');

    // Pause for debugging if needed
    await page.pause();
  } catch (error) {
    log(`An error occurred: ${error.message}`, 'error');
  }
});
