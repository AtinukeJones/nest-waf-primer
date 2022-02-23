"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getHello = function () {
        return this.appService.getHello();
    };
    AppController.prototype.getHello2 = function () {
        return this.appService.getHello2();
    };
    AppController.prototype.getHome = function () {
        return this.appService.getHome();
    };
    AppController.prototype.getAboutUs = function () {
        return this.appService.getAboutUs();
    };
    __decorate([
        (0, common_1.Get)()
    ], AppController.prototype, "getHello");
    __decorate([
        (0, common_1.Get)('hello2'),
        (0, common_1.Render)('index.html')
    ], AppController.prototype, "getHello2");
    __decorate([
        (0, common_1.Get)(),
        (0, common_1.Render)('home.html')
    ], AppController.prototype, "getHome");
    __decorate([
        (0, common_1.Get)('about-us'),
        (0, common_1.Render)('about-us.html')
    ], AppController.prototype, "getAboutUs");
    AppController = __decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
