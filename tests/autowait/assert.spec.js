import test, { expect } from "@playwright/test";

test("assertions",async ({page}) => {
    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    // await page.locator('#name').fill("abc")
    // await page.locator('#email').fill("abc@gmail.com")
    // await page.locator('#password').fill("123452")
    // await page.locator('//button[@type="submit"]').click()
    // await page.pause();
    // auto retrying assertion will re test the same elemwnt test case again and agin until it is passed for
    // default timer of 5000 ms in assertion concept.
    await page.goto('https://demoapps.qspiders.com/ui/login?scenario=1')

    let item =await page.locator('//button[@type="submit"]');

    // await expect.soft(item).toContainClass("px-4 rounded focus")// working
    await expect.soft(item).toContainClass("bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-100")
    await expect.soft(item).toHaveScreenshot();

    // await expect.soft(item).toHaveClass("px-4 rounded focus")//not working
    // await expect(item).toHaveClass("bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-100")
    // await expect.soft(item).toHaveClass(" opacity-100")

    // await expect(item).toBeInViewport(); //item is present in viewport so passed
    // await expect(item),not.toBeInViewport(); //item is present in viewport so passed if it is out of viewport then failed

    // await expect(page.locator('p[class="text-[15px] font-bold px-4 w-full p-1 hover:cursor-pointer"]')).toHaveText("Write a script to enter data into Text field?") //compares the text of its own tag and text should be exxactly same
    // await expect(page.locator('p[class="text-[15px] font-bold px-4 w-full p-1 hover:cursor-pointer"]')).toContainText("data") //compares the text from child tags also a substring of text is also enough
    // await page.goto('https://demoapps.qspiders.com/ui/image?sublist=0')
    // await expect.soft(page).toHaveTitle("DemoApps | Qspiders | Text Box")
    // await expect(page).toHaveScreenshot();
    // await expect(page).toHaveScreenshot({path : 'assert.spec.js-snapshots/assertions-1-win32.png',timeout : 7000}); does not work
    // await expect.soft(page).toHaveURL("https://demoapps.qspiders.com/ui?scenar") 
    // //soft is useed to soft assertion the assertis not not passed still it will not throw error it will wait for all the alement trst cases to compleate at last it throws error together
    // await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/login?scenari")

})
