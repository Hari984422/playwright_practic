import test, { expect } from "@playwright/test";

test("dialogue",async ({page}) => { //this test was used to check by default all alerts and prompt get dismissed

    await page.getByRole("button",{name : 'Simple Alert'}).click()
    await page.getByRole("button",{name : 'Confirmation Alert'}).click()
    await expect(await page.locator('#demo')).toContainText('Cancel') //by default we get the cancelled alert message 
    await page.waitForTimeout(3000)
    await page.getByRole('button',{name : 'Prompt Alert'}).click()
    await expect(await page.locator("#demo")).toContainText('cancelled') //by default we get the cancelled prompt
    await page.waitForTimeout(3000)
    
})

test("dialog1",async ({page}) => { //this method is used to call alerts and prompts with accept
    await page.goto('https://testautomationpractice.blogspot.com/')

     page.on("dialog",async(dialog)=>{
        if(dialog.type == "alert"){
           console.log(await dialog.message())
           dialog.accept();
        }
        else if(dialog.type == "confirm"){
          console.log(await dialog.message());
          dialog.accept();
        }
        else if(dialog.type == "prompt"){
            console.log(await dialog.defaultValue());
            console.log(await dialog.message());
             dialog.accept("JSJSJ");
        }
    })

     await page.getByRole("button",{name : 'Simple Alert'}).click()
     await page.waitForTimeout(3000)
    await page.getByRole("button",{name : 'Confirmation Alert'}).click()
     await page.waitForTimeout(3000)
    await page.getByRole('button',{name : 'Prompt Alert'}).click()
     await page.waitForTimeout(3000)

})


test.only("handle dialog usin page.once ",async ({page}) => {
    //in case user dont want to test all the alertsa and prompt and
    //  confirm user wan to test only one prompt box that to only one promt then we can use page.once
    await page.goto('https://testautomationpractice.blogspot.com/')
        await page.getByRole("button",{name : 'Simple Alert'}).click()
     await page.waitForTimeout(3000)
    await page.getByRole("button",{name : 'Confirmation Alert'}).click()
     await page.waitForTimeout(3000)
    //  according to principle write dialog only before particular action
    page.once("dialog",async (dialog) => {
        dialog.accept("dsbfbhdsg");
    })
    await page.getByRole('button',{name : 'Prompt Alert'}).click()
     await page.waitForTimeout(3000)

})


