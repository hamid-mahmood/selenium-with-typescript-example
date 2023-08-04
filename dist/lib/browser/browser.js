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
exports.Browser = void 0;
require("chromedriver");
const selenium_webdriver_1 = require("selenium-webdriver");
class Browser {
    constructor(browserName) {
        this.driver = new selenium_webdriver_1.Builder().forBrowser(browserName).build();
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.quit();
        });
    }
}
exports.Browser = Browser;
