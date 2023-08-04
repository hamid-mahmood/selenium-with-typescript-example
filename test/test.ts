import { Browser } from "../lib/browser/browser";
import { AllPages } from "../pages";

describe("Testing Near Login functionality", () => {
  let pages: AllPages;

  before(async () => {
    pages = new AllPages(new Browser("chrome"));
  });

  it("Should Login", async () => {
    //open the website
    await pages.browser.driver.get("https://admin.neara.com/");
    await pages.login.login();
    await pages.landing.landingLogin();
  });

  after(async () => {
    await pages.dispose();
  });
});
