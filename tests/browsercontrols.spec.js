// import {firefox, test, webkit} from "@playwright/test";
// import { chromium } from "@playwright/test";

// // test("broswer",async({browser})=>{
// // //     await page.goto("https://www.wikipedia.com")
// // // console.log(await page.title()); //returns me title 
// // // console.log(await page.url()); //reutrn me url

// // let context =await browser.newContext();
// // console.log(await context.cookies());

// // let page = await context.newPage() //create a new instance of page  using context
// // await page.goto("https://www.amazon.com")
// // console.log(await context.cookies()); //context.cookies method is used to return the cookies of current page
// // // Eg :  [{},{name: 'ubid-main',
// //     // value: '133-0251599-3129132',
// //     // domain: '.amazon.com',
// //     // path: '/',
// //     // expires: 1797059335.239698,
// //     // httpOnly: false,
// //     // secure: true,
// //     // sameSite: 'Lax'},...]



// // // let cokkies = (await context).cookies();
// // // console.log(cokkies);

// // // viewportSize
// // //     let size1 = await page.viewportSize() //it will return the current viewport size of browser { width: 1280, height: 720 } 
// // //     console.log(size1);
// // // // setViewportSize and 

// // //    await page.setViewportSize({width : 1000,height : 100}) //setViewportSize is a browser control that sets the size of viewport
// // //    let size = await page.viewportSize() //it will return the current viewport size of browser { width: 1000, height: 100 }
// // //     console.log(size);

// // //title
// // // await page.goto("https://www.flipkart.com")
// // // console.log(await page.title());
// // // test.setTimeout(10000);


// // })

// test("instance",async()=>{
//     // let browser =await chromium.launch() ; //opens all 3 browser instances in chrome only
//     // let browser =await firefox.launch() ;  //opens all 3 browser instances in firefox only
//     let browser =await webkit.launch() ; //opens all 3 browser instances in webkit only
//     let context = await browser.newContext(); //creates the newContext instance for browser
//     let page = await context.newPage(); //creates the new instance for page
//     await browser.close(); //closes the browser instance so that we cant launch the url in the browser
//     await page.goto("https://google.com") 
// })

// test.skip("screenshot",async({page})=>{
//     await page.goto("https://www.wikipedia.org/wiki/Main_Page")
//     await page.screenshot({path: "screenshot/p.png"})
//     let time = new Date().getTime()
//     await page.screenshot({path: `screenshot/page-${time}.png`}) //it is used to take ther screen shot of the page and store it into folder path 
// })



import test, { chromium } from "@playwright/test";

test("controls",async({page})=>{
  await  page.goto("https://google.com")
  await  page.setViewportSize({width:1000,height : 2100})
  await  page.viewportSize();
  await  page.url();
  await  page.title();
})

test("scressshot",async({page})=>{
    let time = new Date().getTime();
   await  page.screenshot({path : `screenshot/${time}.png`})
})

test("cookies",async () => {
    let browser = await chromium.launch();
    let context = await browser.newContext();
    let page  =  await context.newPage();
    await page.goto("https://www.google.com") 
    let cookies =await context.cookies();  
    console.log(cookies);  
})