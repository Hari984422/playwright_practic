import {test} from '@playwright/test';

// test("Print log",()=>{
//   console.log("Print tint the console");
// })

// test("fixtures",async ({page})=>{
  
//  await page.goto("https://www.flipkart.in");

// })

test("fixture",async ({browser,browserName})=>{
  console.log(browserName);
  
  let context = browser.newContext();

  let page = await (await context).newPage();
    await page.goto("http://www.wikipedia.in");
})

// test.skip("fixture",async()=>{
//   await page.goto("https://www.flipkart.com")
// })
