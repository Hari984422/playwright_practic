import test from "@playwright/test";
import loginPage from "../PageObjectModel/login.page";
import fs from 'fs'
import path from "path";
test("login form pom",async ({page}) => {
    let login = new loginPage(page);
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await login.textboxUsername.fill("student");
    await login.textboxPassowrd.fill("Password123");
    await login.loginButton.click();
    await page.waitForTimeout(4000);
})

let dataFile = fs.readFileSync('C:/Users/User/Desktop/Playwright1/testjson/data.json')
let data = JSON.parse(dataFile)
test.only("ddt with POM",async ({page}) => {
    let login = new loginPage(page);
    for (const type in data) {
        for (const user of data[type]) {
            
            let url = user.url;
            let uname = user.uname;
            let pwd = user.pwd

            await page.goto(url);
            await login.textboxUsername.fill(uname);
            await login.textboxPassowrd.fill(pwd);
            await login.loginButton.click()
            await page.waitForTimeout(200)
        }
        
        
    }
})