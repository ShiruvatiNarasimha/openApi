"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpful_decorators_1 = require("helpful-decorators");
class DataClass {
    constructor(timeZone) {
        this.timeZone = timeZone;
    }
    getTime() {
        var d = new Date();
        console.log("Hi From GetTime");
        return d.getTime();
    }
    getMonth() {
        var d = new Date();
        return d.getMonth();
    }
    getTimeZone() {
        return this.timeZone;
    }
    expensiveOpration() {
        const startTime = new Date().getTime();
        let ctr = 0;
        for (let i = 0; i < 10000; i++) {
            ctr++;
        }
        console.log(ctr);
        const endTime = new Date().getTime();
        console.log("totoal time taken: " + (endTime - startTime) + "ms");
    }
}
__decorate([
    (0, helpful_decorators_1.once)()
], DataClass.prototype, "getTime", null);
const dataObject = new DataClass("IND");
const response = dataObject.expensiveOpration();
console.log(response);
