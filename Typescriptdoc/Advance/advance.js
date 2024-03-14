"use strict";
/*********************key of and typeof Operators******* */
Object.defineProperty(exports, "__esModule", { value: true });
exports.origin = void 0;
/*keyof type operator works with object types to create a string or numeric literal union of its keys.

typeof type operator queries the type of a value, allowing you to refer to it in various places. */
var person = { name: "Alice", age: 28 };
/*********************Enum Type************************* */
/*Enums are a way of giving friendly names to set of numeric values.
They can make the code more readable and less error-prone */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {})); //---> Enum Declaration
var c = Color.Green; //--->
console.log(c);
/*Exercise
Create an enum for days of the week and a function that takes a day and returns whether it's a weekend or a weekday.

 */
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
function check(day) {
    return day === Days.Saturday || day === Days.Sunday;
}
console.log(check(Days.Monday));
console.log(check(Days.Saturday));
/*********************Generics************************** */
/*Generics provide a way to make components work over a variety of types rather than a single one. */
/*Used when there is reusable code
- No need to define the datatype again and again, Whatever is the input it produces the same type output*/
// function users(data)
// {
//     return data
// }
// console.log(users({name:"naz",age:232}))
function users(data) {
    return data;
}
console.log(users({ name: "naz", age: 232 }));
/*Exercise
Create a generic function named wrapInArray that takes an argument of any type and returns an array of that type containing the provided value. */
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray("Array"));
console.log(wrapInArray(2));
console.log(wrapInArray(true));
function getValueKey(dictionary, key) {
    return dictionary[key];
}
var myDictionary = {
    "Key1": "value1",
    "key2:": 23,
    "key3": "value3"
};
console.log(getValueKey(myDictionary, "Key1"));
/***********************Literal Types********************/
/*Exercise
Define a function that accepts a parameter with a literal type of either "ascending" or "descending", and returns a corresponding message. */
function getMessage(order) {
    if (order === "Ascending") {
        return "The order is Ascending";
    }
    else if (order === "descending") {
        return "The Order is descending";
    }
    else {
        return "Invalid Order Specifies";
    }
}
console.log(getMessage("Ascending"));
function calculateArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "square") {
        return Math.pow(shape.sideLength, 2);
    }
    else {
        throw new Error("Unsupported shape  type");
    }
}
var circle = {
    kind: "circle",
    radius: 5
};
var square = {
    kind: "square",
    sideLength: 10
};
console.log(calculateArea(circle));
console.log("Square", calculateArea(square));
exports.origin = {
    x: 0,
    y: 0
};
exports.origin.x = 100;
// Example usage
var nullablePoint = {
    x: 1,
    y: null, // Making y nullable
    z: 3,
};
console.log(nullablePoint); // Output: { x: 1, y: null, z: 3 }
