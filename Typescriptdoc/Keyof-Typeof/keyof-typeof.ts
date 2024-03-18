//keyof and typeof Operators
//The keyof type operator works with object types to create a string or numeric literal union of its keys.

//The typeof type operator queries the type of a value, allowing you to refer to it in various places.

let person = {name: "Alice", age: 28};
type Person = typeof person;
type PersonKeys = keyof Person;  // "name" | "age"