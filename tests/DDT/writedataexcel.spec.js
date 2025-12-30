import test from "@playwright/test";
import excel from 'exceljs'
import path from "path"
test("write data into excel ",async ({page}) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,'../../testData/multipleread.xlsx'))
    let sheet = book.getWorksheet("Sheet6");
    if(!sheet){
        sheet = book.addWorksheet("Sheet6")
    }
    // sheet.getRow(5).getCell(5).value="hello";
    //to add multiple data from a webpage

    await page.goto('https://www.flipkart.com/')
    await page.locator('//input[@class="lNPl8b"]').fill("suits")
    await page.locator('//li[@class="Sc1DCn"]').first().waitFor()
   let listOpt =  await page.locator('//li[@class="Sc1DCn"]').allTextContents()
   console.log(listOpt);
   for (const item of listOpt) {
    let i = listOpt.indexOf(item);
    // sheet.getRow(1).getCell(i + 1).value = item; //for single row and multiple column
    sheet.getRow(i+1).getCell(1).value = item; //for multiple row and single column
   }
   

    await book.xlsx.writeFile(path.join(__dirname,'../../testData/multipleread.xlsx'))
})