// // import {test} from "@playwright/test";

// // test("web element",async ({page})=>{
// //     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

// //     await page.locator("input#name").fill("harish")
// //     await page.locator("input#email").fill("harish@gmail.com")
// //     await page.locator("input[type = password]").fill("harish123")

// //     await page.locator("button[type = submit]").click()


// //     // page.goto("https://demoapps.qspiders.com/ui/login")

// //     await page.locator("input#email").fill("harish@gmail.com")
// //     await page.locator("input[type = password]").fill("harish123")

// //     await page.locator("button[type = submit]").click()



// // })  

// import test from "@playwright/test";

// test("innertext", async ({ page }) => {
//     // await  page.goto("https://www.zepto.com",{waitUntil : "networkidle"})
//     // await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

//     // let text = await page.getByRole("link",{name : 'Text Field',exact : false}).first().innerText();
//     //  //reurns only visible
//     // let text = await page.getByRole("link",{name : 'Text Field',exact : false}).first().textContent();
//     // let text = await page.locator('//section[@class = "poppins text-[14px]"]').allTextContents();
//     // let text = await page.getByRole("link",{name : 'Text Field',exact : false}).first().textContent();

//     //    await page.goto("https://www.flipkart.com");

//     // is visible : waits until the text is visible on the page
//     await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     // await page.locator('//input[@id="phone"]').fill("hjdfhdg")
//     // or
//     // await page.locator('//input[@id="phone"]').waitFor() 
//     // //waits till this method is loaded upto default waiting 30 seconds 
//     // let v = await page.locator('//input[@id="phone"]').isVisible()
//     // let v = await page.locator('//input[@id="phone"]').isEditable()
//     // //this method checks the elements is visible or not
//     //by default even if element is visible it returns false because it is a input tag so we have to make 
//     // this method wait for some time or fill some charecters 
//     // console.log(v);

//     // isEnabled : wait for the text to be enabled or disabled some links will be disabled
//     // await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
//     //    let a = await page.locator('//section[@class="poppins text-[14px]" and text()="Text Field"]').isEnabled()
//     //    let b = await page.locator('//section[@class="poppins text-[14px]" and text()="Text Field"]').isEditable() any other tags apart from input , <textarea>, <select> it will not work
//     // console.log(a);
//     // console.log(b);



//     // isChecked() waits for the method is checked like radio button and check box


//     // await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
//     // await page.locator('//input[@id="domain_b"]').click()

//     // await page.locator('//input[@id="domain_b"]').click()

//     // let a = await page.locator('//input[@id="domain_b"]').isChecked();
//     // //   let a =  await page.locator('//input[@id="domain_b"]').isChecked();
//     // console.log(a);

//     // let a  = await page.locator('//div[@class="_3ETuFY"]').all();
//     // let text  = await page.locator('div._3ETuFY').allTextContents(); //returns all the text contents the matches the item
//     // let a  = await page.locator('div._3ETuFY').all().waitFor() 
//     //wait for is used to manually wait for this line to complete execution beacuse in some locator metohds autowait dont work in that case we make line explicitly wait
//     // let a  = await page.locator('div._3ETuFY').all(); //returns all the elements the matches the item
//     // console.log(a);

//     // console.log(text);

// // waitFor
//     await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
//     await page.locator('//input[@id="domain_b"]').click()

//     //   await page.locator('//input[@id="domain_b"]').waitFor({state : 'visible',timeout : 1000});//going to wait for the text to visibile on the page and also it should be attached to the dom
//     //   await page.locator('//input[@id="domain_b"]').waitFor({state : 'attached',timeout : 1000}); //going to wait for the attached to the dom
//     //   await page.locator('//input[@id="domain_b"]').waitFor({state : 'detached'}); //going to wait for the detached to the dom
//     //   await page.locator('//input[@id="domain_b"]').waitFor({state : 'hidden',timeout : 10030}); //going to wait for the text to be hidden  on the page
//     //   await page.locator('//input[@id="domain_b"]').waitFor({timeout : 1000}); //going to wait for 5 seconds 

//     // in case i want to check for visibility for text and i just wait for 5 second 
//     //   await page.locator('//input[@id="domain_b"]').waitFor({state : 'visible',timeout : 5000});

// })


import test from "@playwright/test";

test("web elements",async ({page}) => {
 await page.goto('https://www.flipkart.com/')
    // await page.locator('//input[@class="lNPl8b"]').fill("Shoes") //it fill data at once
    // await page.waitForTimeout(4000) 
    // await page.locator('//input[@class="lNPl8b"]').type("suits") //it types charecter by charecter 
    // await page.waitForTimeout(4000);
    // await page.keyboard.press("Enter")
    // await page.waitForTimeout(4000);
    // let text = await page.locator('//a[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9"]').innerText();
    // let text = await page.locator('//div[@class="_58bkzqcd _3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _58bkzqz _1i2djtb9 _1i2djt0"]',{exact: true}).allInnerTexts();
    // let text = await page.locator('//div[@class="_58bkzqcd _3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _58bkzqz _1i2djtb9 _1i2djt0"]',{exact: false}).allInnerTexts();
    // let text = await page.locator('//div[.="New year Essentials"]').allInnerTexts()
    // let text = await page.locator('//div[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _1i2djt9r _1i2djt7i _1i2djt30 _1i2djt4i"]').allInnerTexts()
    await page.locator('//div[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _1i2djt9r _1i2djt7i _1i2djt30 _1i2djt4i"]').first().waitFor()
    let text = await page.locator('//div[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _1i2djt9r _1i2djt7i _1i2djt30 _1i2djt4i"]').all()
    // let text = await page.locator('//div[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _1i2djt9r _1i2djt7i _1i2djt30 _1i2djt4i"]').allTextContents()

    // let text1 = await page.locator('//div[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djt0 _1i2djt9r _1i2djt7i _1i2djt30 _1i2djt4i"]/descendant::div[.="Belts"]').innerText();
    // console.log(text1);
    console.log(text);
    
    
})