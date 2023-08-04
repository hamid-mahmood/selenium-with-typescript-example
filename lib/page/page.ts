import { Browser } from "../browser/browser";

export abstract class Page {
  public constructor(protected browser: Browser) {}
}
