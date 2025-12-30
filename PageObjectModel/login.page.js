class loginPage{
    constructor(page){
        this.textboxUsername = page.locator("#username");
        this.textboxPassowrd = page.locator("#password");
        this.loginButton = page.locator("#submit");
    }
}
export default loginPage