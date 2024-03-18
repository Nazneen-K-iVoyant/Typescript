/*
- Defines the shape or structure of Object
- Dont get compile into the JavaScript code and exists only for static type checking
- Once the interface is written, any object which has been declared by that name must and should have all its property and type
-An interface may also have optional fields, denoted using the ? operator
*/
var animal = {
    name: "Tommy",
    age: 21
};
console.log(animal);
var cars = {
    model: "Suzuki",
    year: 4567
};
console.log(cars);
