/*TypeScript supports inheritance, allowing a new class (known as a subclass) to derive from an existing class (superclass). The extends keyword facilitates this.

When a subclass extends a superclass, it inherits all properties and methods. However, it can also:

- Add new properties or methods.
- Override existing methods. */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " make a noise"));
    };
    return Animal;
}());
var myObj = new Animal("Cat");
myObj.speak();
