const { test, expect } = require('@playwright/test');

test.skip('should filter and check a checkbox in the web table', async ({ page }) => {
  try {
    // Navigate to the target page
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate the table
    const table = await page.locator('#productTable');
    await page.waitForSelector('#productTable');

    // Locate rows and cells
    const rows = table.locator('tbody tr');
    const cells = table.locator('tbody tr td');

    // // Log the content of rows
    // for (let i = 0; i < await rows.count(); i++) {
    //   const row = rows.nth(i);
    //   const rowText = await row.textContent();
    //   console.log(`Row ${i + 1} contains: ${rowText}`);
    // }  

    // // Log the content of cells
    // for (let j = 0; j < await cells.count(); j++) {
    //   const cell = cells.nth(j);
    //   const cellText = await cell.textContent();
    //   console.log(`Cell ${j + 1} contains: ${cellText}`);
    // }

    //ici to know how much data i have per pages 
const pages = await page.locator('.pagination li a')
console.log('number of pages', await pages.count())
for(let p=0;p< await pages.count();p++){
    for(let i=0;i<await rows.count();i++){
        const row = await rows.nth(i)
        const tds = await row.locator('td')
        for(let j=0;j<await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent())
        }
    }
}
    // // Function to filter rows by product name and check the checkbox
    const checkProduct = async (rows, name) => {
      const rowsFilter = rows.filter({
        has: page.locator('td'),
        hasText: name,
      });
      // Verify if any matching rows are found
      if ((await rowsFilter.count()) === 0) {
        console.log(`No product found with the name: ${name}`);
        return;
      }
      console.log(`Filtered row(s) found for the product: ${name}`)
      // Locate and check the checkbox in the filtered row
      const checkbox = rowsFilter.locator("input[type='checkbox']");
      if ((await checkbox.count()) === 0) {
        console.log(`No checkbox found for the product: ${name}`);
      } else {
        await checkbox.check();
        console.log(`Checkbox checked for the product: ${name}`);
      }
    };

    // // Call the function for the desired product
    await checkProduct(rows, 'Laptop');

    // Pause for observation (optional)
    await page.waitForTimeout(5000);
    await page.pause();
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
  }
});
