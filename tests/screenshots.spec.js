const {test, expect} = require('@playwright/test');

test.skip('should screenshots page ', async({page}) => {
await page.goto('https://demoblaze.com/index.html');
// tis is for the full page option if u dont need it juste make it without fullpage:true
// await page.screenshot({ path: `tests/screenshots/homepage.png`+Date.now()+'HomePage.png',fullPage: true });
//now for specific element , u specify the element and then u take a screenshot of it
const element = await page.$("img[alt='First slide']");
await element.screenshot({ path: `tests/screenshots/homepage.png`+Date.now()+'HomePage.png' });
//if i want to make video record 

// we did a change in the configuration and  u will obtain en screen shot and video record for every element u test 
// and u find the video in the test-resukts 


await page.pause()
})
