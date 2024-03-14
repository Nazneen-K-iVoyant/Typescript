/*Inheritance
Using the inheritance concept in TypeScript, you're tasked to extend the Animal class to craft a Dog class. Ensure the Dog class overrides the speak method so it prints ${name} barks when called. */
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
/*

class Animal{
    protected name:string;

    constructor(name:string){
        this.name=name;
        console.log("Here is the constructor")
    }

    speak():void{
        console.log(`${this.name} makes a noise`)
    }
}

// const dog=new Dog("Buddy");
let a= new Animal("Cat")
// a.speak()

This is  the base class

*/
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        console.log("Here is the constructor");
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " makes a noise"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " barks"));
    };
    return Dog;
}(Animal));
var doggy = new Dog("Tommyyy");
doggy.speak();
