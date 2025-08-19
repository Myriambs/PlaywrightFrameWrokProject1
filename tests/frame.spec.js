const {test,expect} = require('@playwright/test')

test.skip('should frames', async({page}) => {
  await page.goto('https://ui.vision/demo/webtest/frames/')

  const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

await frame3.locator("input[name='mytext3']").fill('Welcome')
 await frame3.childFrames()
await page.locator('frame').nth(2).contentFrame().getByText('Loading...').contentFrame().getByLabel('Hi, I am the UI.Vision IDE').click();
await page.pause()
})
