import { Builder, By, WebDriver, until } from "selenium-webdriver";
import { Browser } from "../lib/browser/browser";
import { Page } from "../lib/page/page";

export class LoginPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }

  elements = {
    passwordInput: () =>
      this.browser.driver
        .findElement(By.name("password"))
        .sendKeys("ssapFTW!!"),
    loginBtn: () => this.browser.driver.findElement(By.className("button")),
  };

  async login() {
    await this.elements.passwordInput();
    await this.elements.loginBtn().click();
  }
}
