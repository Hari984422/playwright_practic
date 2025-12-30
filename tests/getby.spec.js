import {test} from "@playwright/test";

test("get by",async ({page})=>{
//    await page.goto("https://demo.nopcommerce.com/login")

//    getByLabel()
//    Selects the particular input that matches the label Text on display
// can use exact option to make sure the label matches exactly or else can pass it as false
//    await page.getByLabel("Email:",{exact:true}).fill("America")

//    getByPlaceholder()
//    Selects the particular input that matches the plceholder Text
// can use exact option to make sure the label matches exactly or else can pass it as false
// await page.getByPlaceholder("Search sto",{exact: false}).fill("Hi")

// getByText()
// await page.getByText("Electronics").first().click(); //selects the first occurence of text in the page
// await page.getByText("Electronics").last().click(); //selects the last occurence of text in the page
// await page.getByText("Electronics").nth(3).click(); //selects the nth occurence of text in the page

// getByAltText
// await page.getByAltText("nopCommerce demo store",{exact : true}).click();


// getByTitle
// await page.getByTitle("Assert value",{exact : true}).first().click();

//getByRole(role,operation)
// await page.goto('https://demo.nopcommerce.com/electronics')

// await page.getByRole("link",{name : " Digital Downloads ",exact : false}).first().click(); 
//  //locates the element using it ARIA Roles directly see what the element role is and selects the element

// hint : if i confusion in how i have to select any element based on role just click on testing option on
//  toolbar and select pick Locator on below paste the url in its webPage it will give name of all roles of elements


// getByTestId()

// await page.goto("https://www.saucedemo.com/")

// usually in element we cant find dataTestId instead we can use dataTest but
//  before that we have to configure the DataTest in testIdAttibute in playWright.Config.js in use;{} Key name 
// await page.getByTestId("username").first().fill("Element Changed")


// await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')

// await page.getByRole("radio",{name : "Attended"}).click()
// await page.getByRole("radio",{name : "Attended"}).waitFor({state : "visible"})
// let a = await page.getByRole("radio",{name : "Attended"}).isVisible()

// console.log(a);

})