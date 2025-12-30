// import {test} from "@playwright/test";
// import { log } from "node:console";

import test, { expect } from "@playwright/test"
// test.only("nav multiple",async ({browser}) => { //dont use page fixture as it cant work in multiple pages use only browser
//     let context = await browser.newContext();
//     // let page1 = await context.newPage();
//     // let page2 = await context.newPage();
//     // await page1.goto('https://flipkart.in')
//     // await page1.waitForTimeout(3000);
//     // await page2.goto('https://amazon.com')
//     // await page2.waitForTimeout(3000);


//     // creating context for user navigating manually
//     let page = await context.newPage()
//     await page.goto('https://www.flipkart.com/')
//     // console.log(await page.url()) ; //it will return the old text of prvious website only it will not return current osge

//     let [page2] = await Promise.all([
//     page.waitForEvent('popup'),
//     // page.locator('//input[@class="c3Bd2c yXUQVt"]').fill("abcd@gmail.com")    
//     page.locator('//span[.="Login"]').click()
    
//     ])
//     console.log(page2.url())

//     // await page.click('//a[@class="ijdqUS yBSM00" and .="Become a Seller"]')
//     // await page.waitForTimeout(4000)

//     // await page.locator('(//a[@class="sd-header-link"][.="Shopsy"])[2]').click();
//     await page.waitForTimeout(3000)
// })


test("multiple tabs",async ({browser}) => {
    let context =await browser.newContext();
    let page =await context.newPage();
    await page.goto("https://www.redbus.in/")
    let [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('//a[@class="linkButton" and .="Contact us"]')
    ])
    await page2.click('//span[@class="name_rb_secondary_item" and .="Account"]')

    await page.waitForTimeout(5000);
})

// multiple windows
test.only("multiple windows",async ({browser}) => {
    let context =await browser.newContext();
    let page = await context.newPage();
     await page.goto('https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2')
     let title1 = await page.title();
        console.log(title1);

    let [page2] = await Promise.all([ 
        page.waitForEvent('popup'),
     page.click('//button[.="Shop Now"]')
])
     await page2.click('//button[.="Add to Cart"]')
     console.log(await page2.title());
     
     await expect(await page2.title()).not.toBe(title1)
     await page2.waitForTimeout(3000);
})