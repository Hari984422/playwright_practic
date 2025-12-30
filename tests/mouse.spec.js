import test from "@playwright/test";

test("mouseevents", async ({ page }) => {
    //    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');
    // //    click()
    //    await page.locator('#btn').click();
    //    await page.waitForTimeout(3000)
    //    await page.locator('#btn_two').click();
    //    await page.waitForTimeout(3000)
    //    await page.locator('//a[.="Right Click"]').click()
    // //    rightclick()
    //    await page.waitForTimeout(2000)
    //    await page.locator('#btn_a').click({button  : "right"})
    //    await page.locator('//div[@class="py-1 ps-1 hover:bg-orange-300"]').first().click();
    //    await page.waitForTimeout(3000)
    // //    doubleclick
    //     await page.locator('//a[text()="Double Click"]').click()
    //     await page.locator('#btn_a').click({clickCount  : 2})
    //     await page.waitForTimeout(3000)
    //     //or
    //     await page.locator("#btn_b").dblclick();
    //     await page.waitForTimeout(3000)
    //      down and up mouse actions
    // await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
    // await page.locator('#circle').hover()
    // await page.mouse.down();
    // await page.waitForTimeout(3000);
    // await page.mouse.up();

    // force click
    // if any element is hidden in the page or disabled button that cant be used we can use force click just for testing purpose
    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    // await page.locator('//input[@id="submit"]').click({force : true})
    // await page.waitForTimeout(3000);

    // //or we can use dispatchEvent
    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    // await page.locator('//input[@id="submit"]').dispatchEvent('click')
    // await page.waitForTimeout(3000);

    //mouseHover
    // await page.goto('https://demoapps.qspiders.com/ui/mouseHover?sublist=0')
    // await page.waitForTimeout(2000)
    // await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
    // await page.waitForTimeout(6000);
    // await page.mouse.move(100,200)
    // await page.waitForTimeout(4000);

    // modifiers =>we can add button + click action using ,modifiers
    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');
    // // //    click() + modifiers
    //    await page.locator('#btn').click({modifiers : ["Control"]}); //we have to press control button + click
    //    await page.waitForTimeout(3000)
})

// mouse scroll 
// syntax : page.mouse.wheel(x,y) //x => horizontal //y=>vertical
test("scroll", async ({ page }) => {
    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // await page.waitForTimeout(2000);
    // await page.mouse.wheel(0,2000) scroll to bottom
    // await page.mouse.wheel(0,-2000) //scroll to top
    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal')
    // await page.waitForTimeout(3000);
    // await page.mouse.wheel(1000,1000) //scroll to right
    // await page.waitForTimeout(3000);
    // await page.mouse.wheel(1000,0) //scroll to left
    // await page.waitForTimeout(3000);

    // scroll to an element
    // scrollIntoViewIfNeeded
    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    await page.waitForTimeout(3000);
    await page.locator('//h3[.="7. Content Standards"]').scrollIntoViewIfNeeded()


})


// drag and  drop
test.only("drag and drop", async ({ page }) => {
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
    // await page.locator('//div[text()="Drag Me"]').hover();
    // await page.mouse.down()
    // await page.waitForTimeout(3000)
    // await page.mouse.move(200,300)
    // await page.waitForTimeout(3000)
    // await page.mouse.up()

    //drag and drop to target
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.locator('//div[text()="Mobile Charger"]').hover()
    // await page.waitForTimeout(3000);
    // await page.mouse.down()
    // await page.locator('//section[@class="w-[50%] flex flex-col gap-4 shadow-md rounded-md"]').hover();
    // await page.waitForTimeout(3000);
    // await page.mouse.up();
    // await page.waitForTimeout(3000);

    //drag and drop by taking ele positions (x,y) using boundingBox
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.locator('//div[.="Mobile Charger"]').hover()
    // await page.mouse.down()
    // await page.waitForTimeout(4000);
    // let box = await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]').boundingBox();
    // await page.mouse.move(box.x,box.y)
    // await page.mouse.up()
    // await page.waitForTimeout(2000);

    //dragTo
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    let source = await page.locator('//div[.="Mobile Charger"]')
    let target = await page.locator('//div[@class="drop-column  min-h-[200px] bg-slate-100"]')
    await page.waitForTimeout(3000)
    await source.dragTo(target);
    await page.waitForTimeout(3000)
})