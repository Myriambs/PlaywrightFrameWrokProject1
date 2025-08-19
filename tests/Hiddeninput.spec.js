const {test,expect}=require('@playwright/test')


test.skip('should How to Handle Hidden Items in DropDown | Part 15 ', async({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  //ici on a fill du userN>me 
  const fillingInput=async(name,psw)=>{
    await page.fill("input[placeholder='Username']","Admin")
    await page.fill("input[placeholder='Password']",psw)}

await fillingInput("Admin","admin123")
const loginBtn = await page.locator("button[type='submit']")
await loginBtn.click()

await page.getByRole('link', { name: 'PIM' }).click();

await page.waitForTimeout(5000);

// // Obtenir l'URL actuelle de la page
// const newUrl = await page.url();
// // Vérifier que l'URL actuelle correspond à celle attendue
// expect(newUrl).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');


//ici partie selection du dropDown 

const dropDownSelect = await page.$$("//div[@role='listbox']//span")

for (let dropDow of dropDownSelect){
const textdropDow = await dropDow.textContext()
console.log('textdropDow',textdropDow)
if(textdropDow.includes="QA Engineer"){
  await dropDow.click();
  break;
}
}


await page.waitForTimeout(6000);
await page.pause()
})
