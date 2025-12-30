import test from "@playwright/test";

// playwright provides a powerful and flexible  kewyboard API that allow testers to simulate real user keyboard interactions in the browser.
// press() =>if i have to press any key
//   press("a + b + c") or press(<Key> + A)
// down() =>if i have to press and hold the key
// up() =>if i have to release the button
// insertText() => will be used by keyboard()
//     insertText("String")
// type() =>  will be used by locator()
//      type("string")
// syntax : 
// await page.keyboard.press(<key>);
// await page.loacator.press(<key>); 



test("keyboard", async ({ page }) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

    // await page.locator('#name').fill("abc")
    // // or type()
    // await page.locator('#name').type("abc");
    // //or page.type()
    // await page.type("#name","abc")
    // // or insertText()
    // await page.locator('#name').click(); //beacuse the element should be selected to enter the text
    // await page.keyboard.insertText("abc")
    // //or page.keyboard.type()
    // await page.locator('#name').click(); //beacuse the element should be selected to enter the text
    // await page.keyboard.type("abc");

    //up and down
    // await page.locator('#name').click(); 
    // await page.keyboard.down('Space');
    // await page.keyboard.up('Space');
    // await page.keyboard.down('R')
    // await page.keyboard.up('R')
    // await page.waitForTimeout(1000);

    // press
    // using press we can enter one key at a time or combination of keys at a time 
    // await page.locator('#name').click();
    // await page.keyboard.insertText("passord")
    // await page.keyboard.press('Tab')
    // await page.keyboard.insertText('password@gmail.com')
    // await page.keyboard.press("Control+A")
    // await page.keyboard.press("Control+C")
    // await page.keyboard.press('Tab')
    // await page.keyboard.press("Control+V")
    // await page.waitForTimeout(2000)
})

test.only("scroll", async ({ page }) => {
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(5000);

    for (let i = 0; i < 10; i++) {
        await page.keyboard.press('ArrowDown')
    }
    await page.waitForTimeout(5000);
    for (let i = 0; i < 13; i++) {
        await page.keyboard.press('ArrowUp')
    }
    
    await page.waitForTimeout(5000);
})