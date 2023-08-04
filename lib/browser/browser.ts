import "chromedriver";
import { Builder, ThenableWebDriver } from "selenium-webdriver";

export class Browser {
  driver: ThenableWebDriver;
  public constructor(browserName: string) {
    this.driver = new Builder().forBrowser(browserName).build();
  }

  public async close(): Promise<void> {
    await this.driver.quit();
  }
}
