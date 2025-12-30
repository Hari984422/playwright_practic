import {expect, test} from "@playwright/test";

test("radio",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    await page.locator('//input[@id="attended"]').click()
//    let boolean = await page.locator('//input[@id="attended"]').isChecked()
//    console.log(boolean);

    await expect (await page.locator('//input[@id="attended"]').isChecked()).toBeTruthy() //it is used to check is button checked is true or false test should pass or fail
    // await expect (await page.locator('//input[@id="attended"]').isChecked()).not.toBeFalsy
   
    // await page.locator('//input[@id="attended"]').check()
    await page.waitForTimeout(3000);
    // await expect(page.locator('//input[@id="attended"]')).toBeChecked(); //it is used to check is button checked is true or false test should pass or fail
})

test.only("checkbox",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')

    // await page.locator('//input[@id="domain_a"]').click()
    await page.locator('//input[@id="domain_a"]').check()
    await page.waitForTimeout(4000);
    await page.locator('//input[@id="domain_a"]').uncheck()
    await page.waitForTimeout(4000);

    // verify check
    // await expect(await page.locator('//input[@id="domain_a"]').isChecked()).toBeTruthy() //fail
    // await expect(await page.locator('//input[@id="domain_a"]').isChecked()).not.toBeTruthy()  //pass
    await expect(await page.locator('//input[@id="domain_a"]').isChecked()).toBeFalsy() //pass
})