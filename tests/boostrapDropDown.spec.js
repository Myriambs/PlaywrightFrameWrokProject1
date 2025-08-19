const { test, expect } = require('@playwright/test');
test.skip('should dropdown bootstrap', async ({ page }) => {
    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2');

    // Sélectionne toutes les étiquettes dans le menu déroulant
    const selectorLanguage = await page.$$('ul>li label');
    await page.waitForTimeout(2000);

    // Itère sur chaque étiquette et vérifie son contenu
    for (let lab of selectorLanguage) {
        const values = await lab.textContent(); // Récupère le texte
      
         if (values.includes('Angular') || values.includes('Java')) { // Vérifie les conditions
            await lab.click(); // Clique si la condition est remplie
            console.log('Found it');
            break; // Stoppe après avoir trouvé une correspondance
         }
    }

    await page.pause(); // Pause pour inspection manuelle
});


test.skip('should handle video 14', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://www.redbus.in/');

  // Fill the input field
  await page.locator('#src').fill('Delhi'); // Note: Corrected spelling

  // Wait for suggestions to appear
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

  // Select all matching elements
  const suggestions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

  // Iterate through suggestions and check the text
  for (let suggestion of suggestions) {
    const value = await suggestion.textContent();
    console.log('This is the content value:', value);

    if (value && value.includes('ISBT Kashmiri Gate')) {
      await suggestion.click(); // Click on the matching element
      expect(value).toContain('ISBT Kashmiri Gate'); // Assert the match
      break; // Exit the loop after clicking
    }
  }

  // Pause for inspection
  await page.pause();
});



//=========================note 
// const { test, expect } = require('@playwright/test');

// ==================== Test: Bootstrap Dropdown Selection ====================
test.skip('should handle bootxstrap dropdown', async ({ page }) => {
  // Navigate to the Bootstrap dropdown demo page
  await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2');

  // Select all label elements within the dropdown list
  const selectorLanguage = await page.$$('ul>li label');
  await page.waitForTimeout(2000); // Wait for dropdown to be fully loaded

  // Iterate through each label and check its text content
  for (let lab of selectorLanguage) {
    const values = await lab.textContent(); // Retrieve the text content of the label

    if (values && (values.includes('Angular') || values.includes('Java'))) { 
      // Click the label if it matches the condition
      await lab.click();
      console.log('Found it:', values); // Log the matched value
      break; // Exit the loop after clicking the first matching element
    }
  }

  await page.pause(); // Pause for manual inspection
});

/**
 * Notes for Bootstrap Dropdown Test:
 * 1. **$$(selector)**: Retrieves all matching elements as an array.
 * 2. **textContent()**: Fetches the visible text content of an element.
 * 3. **waitForTimeout**: Pauses execution for a specified duration (not recommended for production but useful for debugging).
 * 4. **break**: Stops the loop once a match is found, improving efficiency.
 * 5. **Error Handling**: If no match is found, ensure you handle scenarios gracefully (e.g., log a message or throw an error).
 */

// ==================== Test: Handle Suggestions on redbus.in ====================
test.skip('should handle input suggestions', async ({ page }) => {
  // Navigate to the redbus.in website
  await page.goto('https://www.redbus.in/');

  // Fill the 'source' input field with "Delhi"
  await page.locator('#src').fill('Delhi');

  // Wait for the suggestion dropdown to appear
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div");

  // Select all suggestion elements
  const suggestions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div");

  // Iterate through the suggestions and check their text content
  for (let suggestion of suggestions) {
    const value = await suggestion.textContent();
    console.log('Suggestion found:', value);

    if (value && value.includes('ISBT Kashmiri Gate')) {
      await suggestion.click(); // Click the matching suggestion
      expect(value).toContain('ISBT Kashmiri Gate'); // Assert the match
      break; // Exit the loop after selecting the suggestion
    }
  }

  await page.pause(); // Pause for manual inspection
});

/**
 * Notes for Input Suggestions Test:
 * 1. **waitForSelector**: Ensures the dropdown is visible before interacting with suggestions.
 * 2. **$$**: Retrieves all suggestion elements as an array for iteration.
 * 3. **textContent()**: Fetches the text of each suggestion to check for a match.
 * 4. **Error Handling**: Add a check to log or handle cases where no suggestions appear.
 * 5. **Use of `break`**: Exits the loop after the first successful match to avoid unnecessary interactions.
 */
