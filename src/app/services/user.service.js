"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var environment_1 = require("../../environments/environment");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.userUrl;
    }
    UserService.prototype.create = function (newUser) {
        return this.http
            .post(this.baseUrl + '/create', newUser, this.getJsonHeaders())
            .map(function (response) {
            if (response.status < 200 || response.status >= 300) {
                throw new Error('' + response.status);
            }
            else {
                return true;
            }
        });
    };
    UserService.prototype.activate = function (token) {
        return this.http
            .post(this.baseUrl + '/activate', token, this.getTextHeaders())
            .map(function (response) {
            if (response.status < 200 || response.status >= 300) {
                throw new Error('' + response.status);
            }
            else {
                return true;
            }
        });
    };
    UserService.prototype.getJsonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    UserService.prototype.getTextHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'text/html; charset=utf-8');
        return headers;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
