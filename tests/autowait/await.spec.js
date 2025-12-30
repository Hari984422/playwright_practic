import test from "@playwright/test";

test("check", async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    await page.locator("#attended").check(); //one of the auto wait feature
    //    await page.locator("#attended").waitFor({state : "attached",timeout : 1000}); //one of the auto wait feature
    //    await page.locator("#attended").waitFor({state : "detached",timeout : 90000});

    let isEnable = await page.locator('//input[@id="attended"]').isEnabled();
    let isEditable = await page.locator('//input[@id="attended"]').isEditable();
    let isVisible = await page.locator('//input[@id="attended"]').isVisible();
    console.log(isEditable);
    console.log(isEnable);
    console.log(isVisible);

})

test("timeout", async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    await page.locator('//span[.="Net Banking"]').click();
    await page.locator('//span[text()="Credit/Debit/ATM card"]')
})


// test.use({actionTimeout : 10000})
//it sets the defaultTImeOut Globally for every action all 
// these timeouts are only for autowait actions like click,fill,hover not for entire element
test("fill 1", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@name="username"]').fill("student")
    await page.locator('//input[@name="password"]').fill("Password123")
    // page.setDefaultTimeout(1000)
    //it will take 1 second to wait for every action instead of 30 sedcond 
    // these timeouts are only for autowait actions like click,fill,hover not for entire element
    await page.locator('//button[@id="subsmit"]').click();
})
test("fill 2", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // page.setDefaultTimeout(1000)
    //it will take 1 second to wait for every action instead of 30 sedcond 
    // these timeouts are only for autowait actions like click,fill,hover not for entire element
    await page.locator('//input[@name="usesrname"]').fill("student")
    await page.locator('//input[@name="password"]').fill("Password123")
    await page.locator('//button[@id="submit"]').click();

    // i can also give Time out globally in config file  in use object using actionTimeout

})

// Hard coded wait


test("hard-coded-waits", async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@name="username"]').fill("student")
    await page.waitForTimeout(2000)
    await page.locator('//input[@name="password"]').fill("Password123")
    await page.waitForTimeout(2000)
    await page.locator('//button[@id="submit"]').click();
    await page.waitForTimeout(2000)
})

// it is commonly used in auto suggestion
test.skip("amazon", async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("perfume")
    await page.waitForTimeout(3000)
    let a = await page.locator('//div[@class="left-pane-results-container"]').allTextContents();
    console.log(a);
})

// explicit wait
test("wait for text", async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').waitFor({timeout : 5000,state:"visible"})
// wait for specific timeout with element state(like visible,attached,detached,hidden,stable )
    await page.waitForSelector('//input[@id="twotabsearchtextbox"]',{state : "visible"}) 
    // //wait for the element to be found by the selector we can also use state after the content is visible i can search for product i.e,. icant use fill after wait statements
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("perfume")
    await page.locator('//div[@class="left-pane-results-container"]',{hasText:"for manperfume set"}).waitFor()
// wait for text using hasText property ,wait until specific text appears on the page(inside any element)
    let a = await page.locator('//div[@class="left-pane-results-container"]').allTextContents()
    console.log(a);
})

// ecplicit wait
// wait for Timeout

// test.only("waitForTimeout",async ({page}) => {
//     await page.goto('')    
// })


// page based waits

test('wait for navigation',async ({page}) => {
    await page.goto('https://www.amazon.in/');

    //if in case click was not having autowait like state:visible,stable and other properties then 
    // await page.click('//a[@id="nav-cart"]');
    // await page.waitForNavigation();
    //instead of this
    // await Promise.all([
    //     page.click('//a[@id="nav-cart"]'),
    //     page.waitForNavigation() //this method is going to pause the excutuion until the navigation is completed so this is necessary to use parallelly with click action that is causing the load of new page
    // ])
    // to wait for navigation but now we dont have to do this beacuse click() is having autowait mechanism it will wait by itself until the new page is entirely visible and loaded
    

    // await page.click('//a[@data-csa-c-slot-id="nav_cs_1"]');
    // await page.locator('//a[@id="nav-cart"]').click();
    // await page.waitForNavigation('https://www.amazon.in/gp/cart/view.html?ref_=nav_cart')

})

test("waitforLoadState",async ({page}) => {
    page.goto('https://www.amazon.in/') 
    await page.click('//div[@id="nav-cart-count-container"]')
    await page.waitForLoadState('networkidle',{timeout : 1000});//this page is not interrelated with any other action it is used to wait for page to load fuyll,or html,or network idle
    //by deafult the element will work for waitForLoadState   
})

// WaitForEvent
test("WaitForEvent",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.fill('#writeArea',"i am downloading a text")
    
   let [downloadedFile] =await  Promise.all([
           page.waitForEvent('download') ,
           page.click('#downloadButton'),
        //    page.waitForEvent('download') //this is similar to waitForNavigation it will not know should be triggered before click action or after so we will use js parallel execution

    ])
    console.log(await downloadedFile.path())

    
})
// waitForFunction
// if i have to check list of autosugestion is being sent which is a asynchronous behaviour
test("custom wailts ",async ({page}) => {
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Aerial")
    await page.waitForFunction(()=>{
        let list = document.querySelectorAll('.s-suggestion-container');
        return list.length > 6;
    });
    let a = await page.locator('//div[@class="s-suggestion-container"]').allTextContents();
    console.log(a);

})

// if i have to check whloe page is loaded completely we can use readystate of dom
test.only("Page Load",async ({page}) => {
    await page.goto('https://www.amazon.in/')
    await page.waitForFunction(()=>{
       return document.readyState = "completed"
    })
     await page.locator('//input[@id="twotabsearchtextbox"]').fill("Aerial")
})
