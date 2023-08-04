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
const browser_1 = require("../lib/browser/browser");
const pages_1 = require("../pages");
describe("Testing Near Login functionality", () => {
    let pages;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        pages = new pages_1.AllPages(new browser_1.Browser("chrome"));
    }));
    it("Should Login", () => __awaiter(void 0, void 0, void 0, function* () {
        //open the website
        yield pages.browser.driver.get("https://admin.neara.com/");
        pages.login.login();
        yield pages.landing.landingLogin();
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield pages.dispose();
    }));
});
