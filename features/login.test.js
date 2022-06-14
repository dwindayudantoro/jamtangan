//import
const { Given, When, Then } = require("@cucumber/cucumber");
const { default: test } = require("@playwright/test");
const loginPage = require("../pom/module/login.page");

this.email = "#modal-root > div > div > div > div > div > div > div > form > div > fieldset > div > div > input#modal-root > div > div > div > div > div > div > div > form > div > fieldset > div > div > input"

const login = new loginPage();

 

Given("User on login page", { timeout: 60 * 1000 }, async function () {
    await this.openUrl('https://www.jamtangan.com');
});

When("user enter email/number", async function () {
    await this.page.locator('//*[@id="modal-root"]/div/div/div/div/div/div/div/form/div/fieldset/div/div/input').fill("email");
});

//*[@id="app"]/div/div[2]/div/div/div[2]/div/div[3]/div[2]