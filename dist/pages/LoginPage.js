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
exports.LoginPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const page_1 = require("../lib/page/page");
class LoginPage extends page_1.Page {
    constructor(browser) {
        super(browser);
        this.elements = {
            passwordInput: () => this.browser.driver
                .findElement(selenium_webdriver_1.By.name("password"))
                .sendKeys("ssapFTW!!"),
            loginBtn: () => this.browser.driver.findElement(selenium_webdriver_1.By.className("button")),
        };
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.elements.passwordInput();
            yield this.elements.loginBtn().click();
        });
    }
}
exports.LoginPage = LoginPage;
