// import test from '@playwright/test'


// test("x-path aasig",async({page})=>{

//     // await page.goto("https://www.amazon.in/s?k=samsung+phones&crid=B9ZKSSI5NN4B&sprefix=samsung+phones%2Caps%2C312&ref=nb_sb_noss_2")
//     // test.setTimeout(100000)


//     // 1. open Amazon.in application,search for samsung phones,write a xpath to find price of the 1st samsung phone.
//     // //span/ancestor::div[@class="puisg-col-inner"]/descendant::span[@class="a-price-whole"][1]
//     // let price = await page.locator('//span/ancestor::div[@class="puisg-col-inner"]/descendant::span[@class="a-price-whole"][1]').textContent()
//     // console.log(price);


//     // 2. open Amazon.in application,search for phones,in the left side of the page you can operating system,write a xpath to click on a checkBox for (Android 13.0)
//     //for text
//     // await page.locator('//span[@class="a-size-base a-color-base" and text()="Android 13.0"]').click();
//     //for checkbox
//     // await page.locator('//span[@class="a-size-base a-color-base" and text()="Android 13.0"]/preceding-sibling::div[@class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"]/descendant::i[@class="a-icon a-icon-checkbox"]').click()


//     // 3. Open cricbuzz application, click on live match,click on scoreCard, write a xpath to find Runs scored by a perticular batsman.
//     // await page.locator('//div[@class="flex justify-center items-center font-bold text-sm  wb:text-sm"]/preceding-sibling::div[@class="flex flex-col gap-1 tb:flex-row tb:justify-between wb:flex-row wb:justify-between"]/child::a[text()="Matthew Gilkes"]').textContent();

//     // 4. open iccCricketRankings, go to (Men's Batting Rankings)section, write a xpath to find a rating of player(David Warner).
//     // await page.locator("//span[@class="si-text si-fname"][text()="Virat" or text()="Kohli"]/ancestor::div[@class="si-table-row"]/descendant::span[@class="si-text"]")

//     // 5. open LensKart application, mouseOverOn StoreLocator, write a xpath to locate (Bangalore)
//     // await page.goto('https://www.lenskart.com/stores')
//     // await page.locator('//div[@class="StoreSearch_input___a_Lx"]/descendant::input[@placeholder="Search by State/Pincode/Locality"]').fill("bangalore")

//     // 6. open flipkart and locate CART without using visible Text().
//      // await page.goto('https://www.flipkart.com/')
//     // await page.locator('//div[@class="dFnvU1"]/descendant::img[@class="HmRjOS U_HGJf"]').click()

//     // 7. Go to makeMyTrip application, go to departure, write a xpath to select date, of month January 2024 (24).
//     // await page.goto('https://www.makemytrip.com/')
//     // await page.locator('//div[@class="DayPicker-Month" ]/descendant::div[@class="dateInnerCell"]/child::p[text()="26"]').first().click()

//     // 8. search for tokyo olympics, select the 1st link, scroll till (Featured Athletes),click on All Athletes,go to Medalists,write a xpath to find Number of Gold medals won by (Emma Mckeon).
//     // await page.goto("https://www.olympics.com/en/athletes/emma-mckeon")
//     // await page.locator('//span[@class="Medal-styles__Medal-sc-645148e1-1 kqvumy medal-additional" and .="G"]/preceding-sibling::span[@data-cy="medal-main"]/child::span').textContent();

//     // 9. open amazon.in, mouseover on Accounts & Lists and write a xpath for signInBtn.
//     // await page.goto("https://www.amazon.in/")
//     // await page.locator('//a[@data-nav-role="signin"]/child::span[@class="nav-action-inner" and .="Sign in"]').click()
  
//     let dates = ['Mon Jan 05 2026','Fri Jan 23 2026','Tue Feb 10 2026','Thu Mar 12 2026','Thu Apr 09 2026']
//     // let dates = ['Thu Dec 04 2025','Thu Dec 25 2025','Sat Dec 06 2025','Fri Dec 05 2025','Thu Feb 12 2026','Mon Feb 09 2026','Thu Mar 12 2026'];
//     await page.goto('https://www.makemytrip.com/')
//     // await page.locator(`//div[@class="DayPicker-Month"]/descendant::div[text()="December 2025"]/../../descendant::div[@aria-label=${dates[0]}]`)
//     // await page.locator(`//div[@class="DayPicker-Month"]/descendant::div[text()="December 2025"]/../../descendant::div[@aria-label=${dates[1]}]`)
//     // await page.locator(`//div[@class="DayPicker-Month"]/descendant::div[text()="December 2025"]/../../descendant::div[@aria-label=${dates[2]}]`)
//     // //div[@class="DayPicker-Month"]/ancestor::div[text()="December 2025"]/../../ancestor::div[@aria-label="Wed Dec 03 2025"]

//     // for (let i = 0; i < dates.length; i++) {
//     //     var month = dates[i].slice(4,7);
//     //     if (month === "Dec") {
//     // await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//     //     }
//     //     else if(month === "Jan"){
//     // await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//     //     }
//     //     else if(month === "Feb"){
//     //         await page.locator('//span[@aria-label="Next Month"]').click()
//     //         await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//     //     }
//     //     else if(month === "Mar"){
//     //         await page.locator('//span[@aria-label="Next Month"]').click()
//     //         await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//     //     }
//     //     else if(month === "Apr"){
//     //         await page.locator('//span[@aria-label="Next Month"]').click()
//     //         await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//     //     }
//     // }
//         var month = dates[4].slice(4,7);


//     switch(month){
//         case "Dec" : 
//     await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//         break;
//         case "Jan" : 
//     await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//         break;
//         case "Feb" : 
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//         break;
//         case "Mar" : 
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//         break;
//           case "Apr" : 
//         for (let i = 0; i < 3; i++) {
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         }
//         await page.locator(`//div[@aria-label="${dates[4]}"]`).click()
//         break;
//           case "May" : 
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         await page.locator('//span[@aria-label="Next Month"]').click()
//         await page.locator(`//div[@aria-label="${dates[i]}"]`).click()
//         break;
//     }

//     // await page.locator(`//div[@aria-label="Thu Dec 25 2025"]`).click()


//     // await page.locator(`//div[@aria-label="${dates[1]}"]`).click()
//     // test.setTimeout(50000);

    
// })

// test.only("cricket",async({page})=>{
//    await page.goto("https://www.iplt20.com/points-table/men")
//     await page.locator(`//h2[@class="ih-pt-cont mb-0 ng-binding"]|//td[@class="ng-binding"][1]`)
// })

import test from "@playwright/test";
test.only("Flightticket",async ({page}) => {
    await page.goto("https://www.makemytrip.com/")
    await page.locator('//div[@aria-label="Thu Jan 22 2026"]').click()
    await page.locator('//div[@aria-label="Thu Jan 29 2026"]').click()
    await page.locator('//a[@class="primaryBtn font24 latoBold widgetSearchBtn "]').click();
    await page.screenshot({path : "screenshot/p1.png"})
})

