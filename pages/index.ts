import { Browser } from "../lib/browser/browser";
import { HomePage } from "./HomePage";
import { LandingPage } from "./LandingPage";
import { LoginPage } from "./LoginPage";

export class AllPages {
  public home: HomePage;
  public login: LoginPage;
  public landing: LandingPage;

  constructor(public browser: Browser) {
    this.home = new HomePage(browser);
    this.login = new LoginPage(browser);
    this.landing = new LandingPage(browser);
  }

  public async dispose(): Promise<void> {
    await this.browser.close();
  }
}
