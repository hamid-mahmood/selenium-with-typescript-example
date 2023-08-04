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
exports.AllPages = void 0;
const HomePage_1 = require("./HomePage");
const LandingPage_1 = require("./LandingPage");
const LoginPage_1 = require("./LoginPage");
class AllPages {
    constructor(browser) {
        this.browser = browser;
        this.home = new HomePage_1.HomePage(browser);
        this.login = new LoginPage_1.LoginPage(browser);
        this.landing = new LandingPage_1.LandingPage(browser);
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.close();
        });
    }
}
exports.AllPages = AllPages;
