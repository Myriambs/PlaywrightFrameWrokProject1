const {test,expect}=require('@playwright/test')

test('Test1',async({page})=>{
    await page.goto('https://www.google.com/')
    const title=await page.title()
    expect(title).toBe('Google')
    await page.pause()
})
test('Test2d',async({page})=>{
    await page.goto('https://www.youtube.com/')
    const title=await page.title()
    expect(title).toBe('(1838) YouTub')
    await page.pause()
})

test('Test2dd',async({page})=>{
    await page.goto('https://www.youtube.com/')
    const title=await page.title()
    expect(title).toBe('YouTube')
    await page.pause()
})
// build in reports 
// npx playwright test --reporter=list
 
// dot reporter 
// npx playwright test --reporter=dot 