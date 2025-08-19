const {test,expect} = require('@playwright/test');

test.skip('should Double Click Action', async({page}) => {
try{
  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator("//button[normalize-space()='Copy Text']").dblclick()

  const firstText = await page.locator("(//input[@id='field1'])[1]").textContent()
  const scdText = await page.locator("(//input[@id='field2'])[1]")
  expect(scdText).toContainText(firstText)
 
  

    await page.pause()


}catch(err){        
}
})
