// import {test} from "@playwright/test";

// test("x-path",async({page})=>{
// //    await page.goto("https://www.amazon.in/")

// //    //select a element using absolute path
// //    await page.locator("/html/body/div").first()

// //    //locate an element using relative path using attribute
// //     await page.locator('//input[@id="twotabsearchtextbox"]')

// //     //locate an element using multiple attribute (and)  operator
// //    await page.locator('//img[@alt="MIHAI Glycerin Soap Base, Melt And Pour, 100% Pure, Natural, Handmade, Coconut Flavour (500)" and @class="product-image"]')


// //     //locate an element using multiple attribute (or)  operator
// //    await page.locator('//div[@data-a-card-type="basic" or data-mix-claimed="true"]')

// //    // loacate  using visibletext on web page text()
// //    await page.locator('//span[text() = "Figurines, vases & more"]')
// //    await page.locator('//span[text() = "Up to 60% off | Trending products from Emergi…"]')

// //    // loacate  using visibletext on web page using "." operator which is similar to text()
// //    await page.locator('//h2[.="See personalized recommendations"]')

// //     //locate partial elements or dynamic elements using contains();
// //     //contains method will search the for the text is it present in the page and if found it will locate all the elements
// //     await page.locator('//h2[contains(text(),"off")]');

// //     //locate the elements using indexing
// //    await page.locator('(//h2[contains(text(),"off")])[1]')
// //    await page.locator('(//h2[contains(text(),"off")])[2]')
// //    await page.locator('(//h2[contains(text(),"off")])[3]')
// //    await page.locator('(//h2[contains(text(),"off")])[4]')

// //    //locate the elements using starts-with()
// //    await page.locator('(//span[starts-with(text(),"Up")])[1]')
// //    await page.locator('(//span[starts-with(text(),"Up")])[2]')
// //    await page.locator('(//span[starts-with(text(),"Up")])[9]')
// //    await page.locator('(//span[starts-with(text(),"Up")])[25]')


// //    //parent
// //    await page.locator('//div[@class="a-section a-spacing-small _Zmx1a_gridRowOne_1t0zL"]/parent::div')

//   await  page.goto("https://www.amazon.in/s?bbn=81107432031&rh=n%3A81107432031%2Cp_85%3A10440599031&_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&pd_rd_r=33617207-cdc7-4095-9214-3b1bdea4d39f&pd_rd_w=h3dx4&pd_rd_wg=4t0FA&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=56H7X10QDXSMKHJ0CT96&ref=pd_hp_d_atf_unk")



// //     //child
// //     await page.locator('//div[text()="FREE delivery "]/parent::div')
// //     await page.locator('//div[@data-cy="asin-faceout-container"]/child::div/child::div/child::span/child::a/child::div/child::img[@class="s-image"][1]') //traversing through praent to child
// //     await page.locator('//div[@data-cy="asin-faceout-container"]/child::div[@class="a-section a-spacing-base desktop-grid-content-view"]')



// //     //sibling preceding
// //     await page.locator('//div[@role="listitem"]/preceding::div')
// //     //sibling following
// //     await page.locator('//div[@role="listitem"]/following::div')
// //     await page.locator('//div[@role="listitem"]/following::div[@data-asin="B09R4RYCJ4"]')

// //     //substring using attribute
// //     await page.locator('//i[substring(@data-cy="reviews-ratings-slot",1,4)]')
// //     await page.locator('//i[substring(@data-cy="reviews-ratings-slot",1,4)=(@class="a-icon a-icon-star-mini a-star-mini-4 mvt-review-star-mini mvt-review-star-with-margin")]')

// //     //select a price using child
// //     await page.locator('//span[@class="a-price"]/child::span[@class="a-offscreen"]')


//     //select a btn add to cart


//     // for (let i = 0; i < 100; i++) {
//     // await page.locator('//i[@class="a-icon a-icon-cart"]/following::button[@name="submit.addToCart"]').nth(i).click()
//     // }
//     // await page.locator('//i[@class="a-icon a-icon-cart"]/following::button[@name="submit.addToCart"]').first().click()


//   await page.goto("https://www.flipkart.com/search?q=bikes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")

//   // // select any parent ancestor
//   // await page.locator('//li[@class="DTBslk"]/ancestor::div[@class="col col-7-12"]')

//   // // select any child any descandants or using "//"operator
//   //   await page.locator('//div[@class="jIjQ8S"]//div[@class="hZ3P6w DeU9vF"]')

//   //   // or dascendant

//   //   await page.locator('//div[@class="jIjQ8S"]/descendant::div[@class="hZ3P6w DeU9vF"]')


//   //   // need to display price and name both  using "|" pipe line operator
//   //   await page.goto('//div[@class="jIjQ8S"]/descendant::div[@class="hZ3P6w DeU9vF"] | //div[@class="RG5Slk"]/ancestor::div[@class="ZFwe0M row"]')

//   //   await page.locator('//span[@class="nav-line-2"][normalize-space(text()="cart")]')

//   //   await page.locator('//div[@class="hZ3P6w DeU9vF"  and number(translate(.,"₹,","")) < 100000]')
//   //   await page.locator('//div[@class="hZ3P6w DeU9vF" ][ number(translate(.,"₹,","")) < 100000]')


//   //   // return me name of those elements whose price is greater or lesser that 10000
//   //   await page.goto('//div[@class="hZ3P6w DeU9vF" ][ number(translate(.,"₹,",""))   = 86509]/ancestor::div[@class="col col-5-12 mao5dl"]/preceding::div[@class="col col-7-12"]/descendant::div[@class="RG5Slk"]')
//   //   // //div[@class="RG5Slk"]/sibling::div [@class="col col-5-12 mao5dl"]/descendant::div[@class="hZ3P6w DeU9vF" ][ number(translate(.,"₹,","")) > 1000]

//   // //in xpath we cant find the g/svg.path.math/soap tags directly so we have to use
//   // //*[name()="svg"]
//   // //*[local-name()="g"] syntax
//   // await page.goto("//*[name()='path']/ancestor::*[local-name()='svg']")

// //   let list = [];
// //   let products = [ "Ather Rizta S 123 KM Booking for Ex-Showroom Price (with Portable Charger, Deccan Grey Mono)","Ather Rizta S 123 KM with Pro Booking for Ex-Showroom Price (with Portable Charger, Deccan Grey Mono)","TVS iQube 2.2 kWh Booking for Ex-Showroom Price (With Charger, Titanium Grey)"]
// // let prices  =  products.map(async(product)=>{
// //  return list.push(await page.locator(`//div[@class="RG5Slk" and text()="${product}"]/../..//div[@class="hZ3P6w DeU9vF"]`).textContent())
// // })    
// // console.log(prices);
// }); 

import test from "@playwright/test";
test.only("xpath",async ({page}) => {

  // await page.goto('https://practicetestautomation.com/practice-test-login/')  ;
  // await page.locator('//li[text()="Open page"]').first()
  // await page.locator('//li[text()="Open page"]').last()
  // await page.locator('//li[text()="Open page"]').nth(3)
  // await page.locator('(//li[text()="Open page"])[1]')
  // await page.locator('(//li[.="Open page"])[1]')
  let list = ['Mivi Play 12HRS Playback, Bass Boosted,TWS Feature, IPX...']
  // await page.goto('https://www.amazon.in/s?k=shoes&crid=ZB311M4WAVDE&sprefix=shoe%2Caps%2C260&ref=nb_sb_noss_2')
  // await page.locator('//span[@class="a-size-base-plus a-color-base"]/ancestor::div[@class="a-section a-spacing-small puis-padding-left-micro puis-padding-right-micro"]/descendant::span[@class="a-price-whole"]')
await page.goto('https://www.flipkart.com/audio-video/speakers/pr?sid=0pm%2C0o7&sort=popularity&param=8755&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D599&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.type%255B%255D%3DHome%2BAudio%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DGaming%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DHome%2BTheatre&p%5B%5D=facets.type%255B%255D%3DLaptop%252FDesktop%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DMobile%252FTablet%2BSpeaker&p%5B%5D=facets.type%255B%255D%3DSoundbar&param=443&hpid=-9HuwFIVtikIZ8W21KTsvKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTQ5OSoiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NHQ1lGUzhGVzRHM0ZHIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQmVzdCBTZWxsaW5nIE1vYmlsZSBTcGVha2VycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D')
 let a = await page.locator(`//a[text()="${list[0]}"]/ancestor::div[@class="RGLWAk"]/descendant::div[@class="hZ3P6w"]`).textContent();
  // await page.locator('//input[@id="username"]').fill("hdsjf")
  console.log(a);
  
})