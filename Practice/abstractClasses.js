"use strict";
/* */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    //Concrete method that is already implemented
    Vehicle.prototype.honk = function () {
        console.log("Beep Beep!!");
    };
    return Vehicle;
}());
//Concrete subclass represnting a Car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Implementation of the startEngine method specific to Car
    Car.prototype.startEngine = function () {
        console.log("Starting Car Engine...");
    };
    return Car;
}(Vehicle));
//Concrerte Subclass reprenting a Motorcycle
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motorcycle.prototype.startEngine = function () {
        console.log("Starting motorcycle engine");
    };
    return Motorcycle;
}(Vehicle));
//Create instance of Car and Motocycle
var myCar = new Car();
var myMotorcycle = new Motorcycle();
//call methods on instance
myCar.startEngine();
myMotorcycle.startEngine();
myCar.honk();
