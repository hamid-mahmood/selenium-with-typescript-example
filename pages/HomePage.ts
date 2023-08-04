import { Browser } from "../lib/browser/browser";
import { Page } from "../lib/page/page";

export class HomePage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }
  elements = {};
}
