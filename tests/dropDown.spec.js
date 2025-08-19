const { test, expect } = require('@playwright/test');

test.skip('should test the dropwond element html ', async({page}) => {
  

    await page.goto('https://testautomationpractice.blogspot.com/')
// const listCountries = await page.locator("[//select[@id='country']]")
// console.log('listCountries',listCountries)
const listCountries = await page.getByLabel('Country:').selectOption('India');
console.log('listCountries',listCountries)

const options = await page.$$('#country');
let status = options.some(async option => (await option.textContent()).includes('France'));
await console.log(status)
await expect(status).toBeTruthy()
    await page.pause()
})
