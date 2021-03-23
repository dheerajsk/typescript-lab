"use strict";
var Singleton = /** @class */ (function () {
    function Singleton() {
        this._value = 10;
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.getValue = function () {
        console.log(this._value);
    };
    Singleton.prototype.incValue = function () {
        this._value = this._value + 1;
        console.log(this._value);
    };
    Singleton.prototype.decValue = function () {
        this._value = this._value - 1;
        console.log(this._value);
    };
    return Singleton;
}());
var firstInstance = Singleton.getInstance();
firstInstance.getValue();
firstInstance.incValue();
firstInstance.decValue();
var secondInstance = Singleton.getInstance();
secondInstance.getValue();
secondInstance.incValue();
secondInstance.decValue();
