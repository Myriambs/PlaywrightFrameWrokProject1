const {test,expect} = require('@playwright/test');

test.skip('should drag and drop ', async({page}) => {
  await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

 const dragelement =  await page.locator("#box6")
 const containerEleemnt =  await page.locator("#box106")
//approch 1
// await dragelement.hover()
// await page.mouse.down()
// await containerEleemnt.hover()
// await page.mouse.up()
    // await dragelement.dragAndDrop(containerEleemnt)
//approch 2
await dragelement.dragTo(containerEleemnt)
  await page.pause()
})
