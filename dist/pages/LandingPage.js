"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const page_1 = require("../lib/page/page");
const assert = require("assert");
class LandingPage extends page_1.Page {
    constructor(browser) {
        super(browser);
        this.elements = {
            mainHeading: () => this.browser.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css("h1"))).getText(),
        };
    }
    landingLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.driver.wait(selenium_webdriver_1.until.urlIs("https://admin.neara.com/?region=australia"));
            const text = yield this.elements.mainHeading();
            assert.equal("Neara Admin Center-", text);
        });
    }
}
exports.LandingPage = LandingPage;
