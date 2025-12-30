import {expect, test} from "@playwright/test";
import { appendFile } from "node:fs";

// 1.standard (natie) dropdown
// 2.Multi-Select Dropdown
// 3.Custom Dropdown
// 4.AutoSuggest/Searchable DropDown


test('dropdown',async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/dropdown')
    await page.waitForTimeout(4000)
    // await page.locator('#select3').selectOption({value : "India"}) //select the option using value property
    // await page.locator('#select3').selectOption({label : 'India'}) //select the option using label name
    // await page.locator('#select3').selectOption({index : 4}) //select the option using index number
    await page.locator('#select3').selectOption("India") //select the option using value or visibleText
    await page.waitForTimeout(4000)
})

test("multiple dorpdowns",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')
    await page.waitForTimeout(2000);
    // await page.locator('//select[@id="select-multiple-native"]').selectOption([{value : "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},{value : "MBJ Women's Solid Short Sleeve Boat Neck V "},{label : "Opna Women's Short S..."}]);
    await page.locator('//select[@id="select-multiple-native"]').selectOption([{index  : 1},{index  : 2},{index  : 3},{index  : 4},{index  : 5}])
    await page.locator('//button[.="Add"]').click();
    await page.waitForTimeout(2000);
    // await expect (page.locator('#select-multiple-native').isChecked).toBeTruthy()
    // await expect (page.locator('#select-multiple-native').isChecked).toBeFalsy()
    // await page.locator('#select-multiple-native').selectOption({label : "Pierced Owl Rose Gol..."})
    // await page.locator('//button[.="Add"]').click();
    await page.waitForTimeout(5000);

})

// there will be some tags without select option tag there will be ol and li tag or div and li tags depends for them we can create
// custom dropdown -------------------

test.only("custom DD",async ({page}) => {
//    await page.goto("https://www.amazon.in/s?k=mobile&s=price-desc-rank&crid=33S71FER5O8XQ&qid=1766388618&sprefix=mobil%2Caps%2C215&ref=sr_st_price-desc-rank&ds=v1%3A2%2BajntGVFxDMB2TZg3X0WPrzemX%2Bh0sbAaDEaWJSdfw")
//     await page.waitForTimeout(3000)
//     await page.locator('//select[@class="a-native-dropdown a-declarative"]').click({force : true})
//     await page.waitForTimeout(3000)
//     await page.locator('//a[@class="a-dropdown-link"]').first().waitFor({state : "visible"})
//     let options = await page.locator('//a[@class="a-dropdown-link"]').all()

//     for (const option of options) {
//          let text = await option.textContent()
//         if(text.includes('Best ')){
//             await option.first().click()
//         }
//     }
//    await page.waitForTimeout(4000)
// await page.mouse.wheel(0,5000)
// await page.waitForTimeout(3000)



// using xpath
// await page.waitForTimeout(3000)
// await page.locator('.a-dropdown-link').nth(4).click()
// await page.waitForTimeout(4000)

//auto suggestion dropdown 

await page.goto('https://www.flipkart.com/')
await page.locator('//input[@class="lNPl8b"]').fill("shoes")
    // await page.locator('(//li[@class="Sc1DCn"])[3]').waitFor() //or
    await page.waitForSelector('(//li[@class="Sc1DCn"])[3]')
let listSuggest = await page.locator('//li[@class="Sc1DCn"]').all();


await page.waitForTimeout(3000)
for (const option of listSuggest) {
    let text =await option.textContent();
    if(text.includes(" for men")){
        await option.click();
        break;
    }
}
await page.waitForTimeout(3000)
})