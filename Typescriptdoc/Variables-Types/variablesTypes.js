/*Variables

- In TypeScript, variables are containers for storing data values
- TypeScript enhances variables with type annotations, allowing you to enforce the type of data your variables can hold.
- This helps in catching type-related errors early in the development process, making your code more robust and maintainable.
- Basic Types:
    - number
    - string
    - boolean
    - any      ---> a wildcard type that can be any
    - arrays   ---> For collection of values, denoted by Type[] or Array<Type></Type>
- Defining a variable is done in TypeScript can be done either using a type or omitting it. If omitted, the interpreter will set the type according to the type of variable it was defined with.


*/
var person = "John";
var age = 12;
var hobbbies = ["Basketball", "Hockey"]; //---> Array Type
// let stringOrNumber = "This is a string!"
var stringOrNumber = 23;
console.log(typeof stringOrNumber);
/*TypeScript has a very strong typing system. One of the more useful features of it is that it allows you to define a variable to hold a specific range of types. */
/*Types
TypeScript is statically typed. This means that the type of a variable is known at compile time. This is different from JavaScript, where types are understood dynamically at runtime. */
/*Numbers
All numbers in TS ar floating-point values. Can be integers,decimals etc

*/
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
/*Any
- It can be any type of value
- Useful when we dont want to write a specific type.
- Any - its use must be limited, especially when we dont know type there wil be*/
/*

Exercise
Given the provided code, identify the errors in variable declarations based on TypeScript types and fix them.


let count: number = "five";   ---> type is number but value is of string
const isActive: boolean = 1;  ---> type is boolean but value is  number
let items: number[] = 10;  ---> type is of Array but value is of number
console.log(count, isActive, items); */
//After fixing the errors
var count = 1;
var isActive = true;
var items = [2, 1, 3, 4];
console.log(count, isActive, items);
