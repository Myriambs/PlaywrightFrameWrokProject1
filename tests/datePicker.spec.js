const {test,expect} = require('@playwright/test');

test.skip('should date picker', async({page}) => {
try{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dateInput = await page.fill('#datepicker','12/12/2021')
await page.waitForTimeout(2000)
//date picker 
const year="2027"
const month="December"
const day="12"
 await page.locator('#datepicker').click()
while(true){
    const monthcapt = await page.locator('.ui-datepicker-month').textContent()
const yearcapt = await page.locator('.ui-datepicker-year').textContent()
console.log(monthcapt,yearcapt)
if(yearcapt === year && monthcapt === month){
    break
}
await page.locator('[title="Next"]').click()
// //if u want to go avant 
// await page.locator('[title="Prev"]').click()
}
//first try 
await page.click(`//a[@class="ui-state-default"][text()=${day}]`)
///////****************** scd try  */
//  await page.$$('//a[@class="ui-state-default"]')
// await page.locator("//a[normalize-space()='${day}']").click()
// for (const dt of date){
//     if(await dt.textContent()===day){
//         await dt.click()
//         break
//     }
// }
await page.pause()
}catch(err){
    console.log(err)
}
    await page.goto('https://testautomationpractice.blogspot.com/')
})


//=================================note 
// const { test, expect } = require('@playwright/test');

// ==================== Test: Date Picker ====================
test.skip('should handle datec picker', async ({ page }) => {
  try {
    // Navigate to the test site
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Fill the date input manually as a first step (not always necessary with date pickers)
    const dateInput = await page.fill('#datepicker', '12/12/2021');
    await page.waitForTimeout(2000);

    // ==================== Desired Date for the Picker ====================
    const year = "2027";       // Target year
    const month = "December"; // Target month
    const day = "12";         // Target day

    // Open the date picker by clicking the input field
    await page.locator('#datepicker').click();

    /**
     * Notes on Handling Date Pickers:
     * - Most date pickers consist of a dropdown for year and month, with clickable days.
     * - To automate, locate the year and month dropdown or text, and iterate until the desired value is found.
     */

    // ==================== Navigate the Calendar ====================
    while (true) {
      // Get the visible month and year from the date picker
      const monthcapt = await page.locator('.ui-datepicker-month').textContent();
      const yearcapt = await page.locator('.ui-datepicker-year').textContent();

      // Log the current month and year for debugging purposes
      console.log(`Currently showing: ${monthcapt} ${yearcapt}`);

      // Break the loop when the desired month and year are found
      if (yearcapt === year && monthcapt === month) {
        break;
      }

      // Click the "Next" button to move to the next month
      await page.locator('[title="Next"]').click();

      /**
       * Notes:
       * - If you need to go backward in time, use the "Prev" button:
       *   await page.locator('[title="Prev"]').click();
       */
    }

    // ==================== Select the Desired Day ====================
    // Option 1: Direct XPath to click the day
    await page.click(`//a[@class="ui-state-default" and text()=${day}]`);

    /**
     * Notes on Day Selection:
     * - This XPath locates the clickable day element within the visible calendar grid.
     * - Adjust the XPath if the structure of your calendar differs.
     */

    // ==================== Alternative Approach ====================
    // Option 2: Locate all day elements, then iterate through them to find a match
    // const dates = await page.$$('//a[@class="ui-state-default"]');
    // for (const dt of dates) {
    //   if (await dt.textContent() === day) {
    //     await dt.click(); // Click the matching day
    //     break;
    //   }
    // }

    // Pause the test to inspect the result manually
    await page.pause();

  } catch (err) {
    // Catch and log any errors that occur during the test
    console.error('An error occurred:', err);
  }
});
