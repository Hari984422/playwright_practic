import test from "@playwright/test";

test("locator",async ({page}) => {
   await page.goto("https://practicetestautomation.com/practice-test-login/")
//    username input
   await page.locator("input#username").fill("studentd")
//    password input
   await page.locator("input#password").fill("Password123")
//    button click
   await page.locator('[class = "btn"]').click()
})