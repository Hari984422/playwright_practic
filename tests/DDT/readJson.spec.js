import test from "@playwright/test";
// import fs, { appendFile } from 'fs'
// let datafile = fs.readFileSync("C:/Users/User/Desktop/Playwright1/testjson/singleton.json");
// let data = JSON.parse(datafile)
test("json file", async ({ page }) => {
    //for single object

    await page.goto(data[0].url)
    console.log(data);
    // await page.locator('#username').fill(data[0].uname)
    // await page.locator("#password").fill(data[0].pwd)
    // await page.getByRole("button",{name : "Submit"}).click()

    // if(await page.title() === "Logged In Successfully | Practice Test Automation")
    // {
    //     console.log("Valid Credentials ");

    // }
    // else{
    //     console.log("invalid Credentials");

    // }
    // await page.waitForTimeout(4000)

    //for array of objects
    // data.forEach(user => {
    //     let unmae = user.uname;
    //     let pwd = user.pwd;
    //     let url = user.url;
    // });
    // foreach does not work for asynchronous await keyword so use for of

    for (const user of data) {
        let uname = user.uname;
        let pwd = user.pwd;
        let url = user.url;

        await page.goto(url);

        await page.locator('#username').fill(uname)
        await page.locator("#password").fill(pwd)
        await page.getByRole("button", { name: "Submit" }).click()

        if (await page.title() === "Logged In Successfully | Practice Test Automation") {
            console.log("Valid Credentials ");

        }
        else {
            console.log("invalid Credentials");

        }
        await page.waitForTimeout(4000)

    }
})

import fs from 'fs'
let datafile = fs.readFileSync("C:/Users/User/Desktop/Playwright1/testjson/data.json")
let data = JSON.parse(datafile);

// or

// import data from '../../testjson/data.json'

// in case we have multiple sets of data 
test.only("object of array", async ({ page }) => {
    for (const type in data) {
        for (const user of data[type]) {
            let url = user.url;
            let uname = user.uname;
            let pwd = user.pwd;

            await page.goto(url);
            await page.locator('#username').fill(uname)
            await page.locator("#password").fill(pwd)
            await page.getByRole("button", { name: "Submit" }).click()

            if (await page.title() === "Logged In Successfully | Practice Test Automation") {
                console.log("Valid Credentials ");

            }
            else {
                console.log("invalid Credentials");

            }
            // console.log(user);
        }


    }
})