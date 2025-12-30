import test, { expect } from "@playwright/test";
import excel from 'exceljs'
import path from "node:path";
test("Read single excel ",async () => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,'../../testData/readexcel.xlsx'));
    let sheet = await book.getWorksheet("Sheet1");
    let data = await sheet.getRow(1).getCell(1).value //if want data in actual datatype
    let data1 = await sheet.getRow(1).getCell(2).toString() //if want data in string method 
    console.log(data,data1);
    
})
test("read multiple data",async ()=>{
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,'../../testData/multipleread.xlsx'))
    let sheet =await book.getWorksheet('Sheet1')
    for (let row = 1; row < sheet.actualRowCount; row++) {
        for (let cell = 1; cell <= sheet.actualColumnCount; cell++) {
            let data  =await sheet.getRow(row).getCell(cell).value;
            console.log(data);  
        }        
    }
})


// http://49.249.28.218:8081/TestServer/build/Small_CRM/

test.only("read data from dynamic url",async ({page}) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname,'../../testData/multipleread.xlsx'))
    let sheet = await book.getWorksheet("Sheet2");
    // let url = await sheet.getRow(1).getCell(1).value;
    // or 
    let allData = []
    
    for (let r = 1; r <= sheet.actualRowCount; r++) {
        let row = sheet.getRow(r);
        let url = row.getCell(1).toString()        
        let uname = row.getCell(2).toString()        
        let pwd = row.getCell(3).toString()   
        // console.log("URL :"+ url,pwd,uname);
        allData.push({ url : url,uname : uname,pwd : pwd})
    }
    // console.log(allData);
    
    for (const data of allData) {
        await page.goto(data.url);
        let p2 = page.waitForEvent('popup')
        await page.getByRole('link',{name : "Small CRM"}).click()
        let page2 = await p2;
        // console.log(await page2.url());
        // console.log(await data.url);
        
        await page2.locator('//a[.="Admin"]').click();
        await page2.locator('//input[@name="email"]').fill(data.uname);
        await page2.locator('#txtpassword').fill(data.pwd)
        await page2.getByRole("button",{name : 'Login'}).click()
        await page2.close()
    }
        await page.waitForTimeout(4000)

    //we can also handle multiple tabs using page fixture also 
})