import test from "@playwright/test";
import path from "path";
import fs from "fs"
test("upload and download", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // attaching single path
    // let a = await page.locator("#singleFileInput")
    // await a.setInputFiles("C:/Users/UserDesktop/Playwright1/UploadFiles/resume.txt")
    // await a.setInputFiles("C:/Users/User/Desktop/Playwright1/UploadFiles/resume.txt")
    // await page.locator('//button[@type="submit" and .="Upload Single File"]').click()
    // await page.waitForTimeout(3000);

    // attaching multiple path
    // await page.locator("#multipleFilesInput").setInputFiles(["C:/Users/User/Desktop/Playwright1/UploadFiles/resume.mp3", 'C:/Users/User/Desktop/Playwright1/UploadFiles/resume1.txt'])
    // await page.locator('//button[@type="submit" and .="Upload Multiple Files"]').click()
    // await page.waitForTimeout(3000);



    // attaching single path using __dirname
    // console.log(__dirname); //it refers to current project name ("C:/Users/User/Desktop/Playwright1/tests/WindowHandles")
    // await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../../UploadFiles/resume.txt"))
   
    // attaching multiple path using __dirname
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,"../../UploadFiles/resume1.txt"),path.join(__dirname,"../../UploadFiles/resume.txt")])
    await page.waitForTimeout(4000)


    //how to upload local system files
    await page.locator('#singleFileInput').setInputFiles('c:/Users/User/Desktop/page.txt')
    await page.waitForTimeout(4000)
})

test.only("Download",async ({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByRole('textbox',{name : "Enter text here"}).fill("Hello i am here")
    await page.locator("#fileName").fill("text1.txt")

    // let [downloadedFile] = await Promise.all([
    //     page.waitForEvent("download"),
    // page.getByRole("button",{name : "Download"}).click() //files are synchrounous then its fine but the files whiach take some time to download files will need asynchronous waitForEvent("download") waith Promise.all([]) method
    // ])


//     let downloadFolderPath = "C:/Users/User/Desktop/Playwright1/DownloadFile"
// //    let localDownloaderfolderPAth =  "c:/Users/User/Desktop/dowlnoladedd";
//     let fileNamec = downloadedFile.suggestedFilename();
//     let fullpath = path.join(downloadFolderPath,fileName)
//     await downloadedFile.saveAs(path.join(localDownloaderfolderPAth,fileName))

    //or
    // await downloadedFile.saveAs(path.join(__dirname,'../../DownloadFile',fileName))

    // or
    // await page.locator("#fileName").fill("text1.txt") write it earlier
    // await downloadedFile.saveAs(downloadFolderPath,fileName)

    
    // or
    // await downloadedFile.saveAs(downloadedFile.suggestedFilename())
    // console.log(await downloadedFile.path());
    
        // instead of promise also we can use download operation 
    let download = page.waitForEvent("download"); //inthis case wait for event will trigger before click action so it starts downloading the the file unyil it downlads but i am not using await keyword 
    page.getByRole("button",{name : "Download"}).click()
    let downloadedFile = await download; //in this line i am using await keyword so that the file can be downoaded fully
    
    let downloadFolderPath = "C:/Users/User/Desktop/Playwright1/DownloadFile"
    let fileName = downloadedFile.suggestedFilename();
   
    let fullpath = path.join(downloadFolderPath,fileName)
   
    if(fs.existsSync(fullpath)){
        console.log(`file exist : ${fullpath}`);
    }
    else{
        console.log('no such file exist');
    }
    await page.waitForTimeout(4000)
})