"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var CustomersService = (function () {
    function CustomersService(http) {
        this.http = http;
    }
    CustomersService.prototype.getAllCustomers = function () {
        console.log("Jetzt in getAllCustomers in Service");
        var path = 'assets/customers.json';
        return this.http.get(path)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(function () {
            console.log("Hat NICHT!!!!! geklappt bei " + path);
        });
    };
    CustomersService = __decorate([
        core_1.Injectable()
    ], CustomersService);
    return CustomersService;
}());
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map