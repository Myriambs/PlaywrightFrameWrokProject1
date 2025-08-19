const {test,expect} = require('@playwright/test');

test.skip('should Mouse Right Action', async({page}) => {
try{
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
 const test = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
  await test.click({button: 'right'})
  


    await page.pause()
}catch(err){

}
})
