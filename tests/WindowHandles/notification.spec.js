import test from '@playwright/test'

test("notifications",async ({browser}) => {
    //or we can also provide permission key in config file in use object globally
    let context =await browser.newContext({permissions : ['notifications','microphone','geolocation','camera']});
    let page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.locator('//p[@class="pb-2"]').click()
    // validate permisssion status
  let result =  await page.evaluate(()=>{return Notification.requestPermission()})
  console.log(`Permission is : ${result}`);
  await context.clearPermissions();
  let result1 = await page.evaluate(()=>{return Notification.requestPermission()})
  console.log(`Permission is : ${result1}`);
  
  
})