const {test,expect} = require('@playwright/test')


test.skip("locators",async({page})=>{
await page.goto('https://demoblaze.com/index.html')
await page.click('id=login2')
await page.locator('#loginusername').fill('pavanol')
await page.locator('#loginpassword').fill('test@123')
await page.locator('//button[normalize-space()="Log in"]').click()
const logoutButton = await page.locator('//a[@id="logout2"]')
await expect(logoutButton).toBeVisible()
await page.pause()
})

test.skip('should locate multiple elements ', async({page}) => {
    await page.goto('https://demoblaze.com/index.html')
    //ici exemple de location miltiple of elements
    // const links = await page.$$('a')
    // // console.log(link)
    // for (const link of links) {
    //     const element = await link.textContent()
    //     console.log(element)
        
    // }
//ici i had a problem so , CSS Selector vs XPath:

// page.$$ is for CSS selectors.
// page.$x is for XPath expressions.
// Why the Error?

// Playwright doesn’t understand XPath with $$, so the query returns an empty array or errors out.
//     //ici location of all the divs of the products
//ici pour notre cas nous devons attendre les elements a bien telechagrer pour etre utilisé apres  
await page.waitForSelector('//div[@id="tbodyid"]//h4/a')
const cards = await page.$$('//div[@id="tbodyid"]//h4/a');

    for (const card of cards) {
        const element = await card.textContent();
        console.log(element);
    }
   await page.pause()
})
