import { By, until } from "selenium-webdriver";
import { Browser } from "../lib/browser/browser";
import { Page } from "../lib/page/page";
import assert = require("assert");

export class LandingPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }

  elements = {
    mainHeading: () =>
      this.browser.driver.wait(until.elementLocated(By.css("h1"))).getText(),
  };

  async landingLogin() {
    await this.browser.driver.wait(
      until.urlIs("https://admin.neara.com/?region=australia")
    );
    const text = await this.elements.mainHeading();
    assert.equal("Neara Admin Center", text);
  }
}
