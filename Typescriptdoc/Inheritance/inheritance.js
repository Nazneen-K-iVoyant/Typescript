/*TypeScript supports inheritance, allowing a new class (known as a subclass) to derive from an existing class (superclass). The extends keyword facilitates this.

When a subclass extends a superclass, it inherits all properties and methods. However, it can also:

- Add new properties or methods.
- Override existing methods. */
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " make a noise"));
    };
    return Animal;
}());
// const myObj=new Animal("Cat")
// myObj.speak()
/*Further extending the class

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name); // Call the constructor of the superclass
    }

    // Override the speak method
    speak(): void {
        console.log(`${this.name} barks`);
    }

    // New method specific to Dog class
    wagTail(): void {
        console.log(`${this.name} wags tail`);
    }
}

const myDog = new Dog("Rover");
myDog.speak(); // Output: Rover barks
myDog.wagTail(); // Output: Rover wags tail
*/
/*Exercise
Using the inheritance concept in TypeScript, you're tasked to extend the Animal class to craft a Dog class. Ensure the Dog class overrides the speak method so it prints ${name} barks when called. */
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
var dog = new Dog("Doggy");
dog.speak();
