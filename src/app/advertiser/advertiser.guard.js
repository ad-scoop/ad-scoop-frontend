"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AdvertiserGuard = (function () {
    function AdvertiserGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AdvertiserGuard.prototype.canActivate = function (route, state) {
        if (this.userService.isLoggedIn()) {
            return rxjs_1.Observable.of(true);
        }
        this.router.navigate(['/login']);
        return rxjs_1.Observable.of(false);
    };
    AdvertiserGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AdvertiserGuard;
}());
AdvertiserGuard = __decorate([
    core_1.Injectable()
], AdvertiserGuard);
exports.AdvertiserGuard = AdvertiserGuard;
