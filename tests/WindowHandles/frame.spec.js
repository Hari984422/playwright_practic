import test, { expect } from "@playwright/test";
import { waitForDebugger } from "node:inspector";

test("frames",async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/')
    // let frame1 = await page.frames()
    // console.log(frame1);
    // for (const frame of frame1) {
    //     console.log(await frame.title());
        
    // }
    // console.log(await page.title());

    // a.1 ----frame() ---- using name,and url
    let frame1 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.locator('//input[@name="mytext1"]').fill("aaaaaaaasd");
    await expect(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain("aaaaaaa") //passed
    // await expect.soft(await frame1.locator('//input[@name="mytext1"]').inputValue()).toContain("f") //fail
    

    // a.2 ----frame() ---framelocator()------
    // let frame2 = await page.frameLocator('//frame[@src="frame_2.html"]').locator('//input[@name="mytext2"]');
    //     await frame2.fill("fhdgshfgs");
    //     await page.waitForTimeout(3000);

    // a.3 -----frame() ----contentFrame()

// let frame2 = await page.locator('//frame[@src="frame_2.html"]').contentFrame();
//     await frame2.locator('//input[@name="mytext2"]').fill("sjjudjh")
//     await page.waitForTimeout(3000)

// a.4 ----frame()---nestedFrames();
let frame3 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"})
   let nestedFrame =  await frame3.frameLocator('//iframe')
   await nestedFrame.locator('//div[@class="bzfPab wFGF8" and .="I am a human"]').click();
    await page.waitForTimeout(3000)
})
