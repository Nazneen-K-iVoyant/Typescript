/*********************key of and typeof Operators******* */

/*keyof type operator works with object types to create a string or numeric literal union of its keys.

typeof type operator queries the type of a value, allowing you to refer to it in various places. */

let person = { name: "Alice", age: 28 }
type Person = typeof person
type PersonKeys = keyof Person

/****************Type Unions and Intersecrtions********* */

/*In TypeScript, you can define a type that can be one of several types using a union type. This is beneficial when an entity can reasonably be one of several types. */

type StringOrNumber = string | Number

/*Intersection types allow you to combine multiple types into one, enabling objects to have properties of all intersected types. */

type Name = { name: string }
type Age = { age: number }
type person = Name & Age

/*******************Conditional Types*********************/

/*They help in expressing types in relation to other types particularly in generic types.

Syntax ----> T extends U ? X:Y*/


type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "object";


type IsString<T> =
    T extends string ? "Yes" : "No"


/*********************Enum Type************************* */
/*Enums are a way of giving friendly names to set of numeric values.
They can make the code more readable and less error-prone */

enum Color { Red, Green, Blue } //---> Enum Declaration
let c: Color = Color.Green;  //--->
console.log(c)

/*Exercise
Create an enum for days of the week and a function that takes a day and returns whether it's a weekend or a weekday.

 */
enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function check(day: Days): boolean {
    return day === Days.Saturday || day === Days.Sunday
}

console.log(check(Days.Monday))
console.log(check(Days.Saturday))

/*********************Generics************************** */
/*Generics provide a way to make components work over a variety of types rather than a single one. */

/*Used when there is reusable code 
- No need to define the datatype again and again, Whatever is the input it produces the same type output*/

// function users(data)
// {
//     return data
// }
// console.log(users({name:"naz",age:232}))

function users<T>(data: T): T {
    return data
}
console.log(users({ name: "naz", age: 232 }))


/*Exercise
Create a generic function named wrapInArray that takes an argument of any type and returns an array of that type containing the provided value. */

function wrapInArray<T>(value: T): T[] {
    return [value]
}
console.log(wrapInArray("Array"))
console.log(wrapInArray(2))
console.log(wrapInArray(true))
/*Output: [ 'Array' ]
[ 2 ]
[ true ] */

/****************Index Types****************** */

/*Typescript supports indexable types which have  an index signaature to allow for objects with string or number keys.
Useful when you don't know in advance what the keys of the object might be */

interface stringOrDictionary {
    [index: string]: string;
}

/*Exercise
Create an interface for a dictionary which has string keys and values can be either strings or numbers. Then, create a function to return the value for a given key from this dictionary. */

//Define an interface for the dictionary
interface StringNumberDictionary {
    [key: string]: string | number;
}

function getValueKey(dictionary: StringNumberDictionary, key: string): string | number | undefined {
    return dictionary[key]
}

const myDictionary: StringNumberDictionary = {
    "Key1": "value1",
    "key2:": 23,
    "key3": "value3"
}

console.log(getValueKey(myDictionary, "Key1"))

/***********************Literal Types********************/

/*Exercise
Define a function that accepts a parameter with a literal type of either "ascending" or "descending", and returns a corresponding message. */

function getMessage(order: "Ascending" | "descending"): string {
    if (order === "Ascending") {
        return "The order is Ascending"
    }
    else if (order === "descending") {
        return "The Order is descending"
    }
    else {
        return "Invalid Order Specifies"
    }
}


console.log(getMessage("Ascending"))
// console.log(getMessage("descending"))
// console.log(getMessage("ranndommm"))

/***************************Discriminated Unions******** */

/*Discriminated unions, also known as tagged unions or algebraic data types, are a way to combine types with a single shared field, which is typically a literal type, used to discriminate between the other types. */

// interface Circle {
//     kind: "circle",
//     radius: number
// }
// interface Square {
//     kind: "Square",
//     sideLength: number
// }

// type shape = Circle | Square

// const shapes:shape[]=[
//     {
//         kind:"circle",
//         radius:5
//     },
//     {
//         kind:"Square",
//         sideLength:10
//     }
// ]


/*Exercise
Write a function that calculates the area of a given shape (either a circle or a square).

To calculate the radius of a circle, use Math.PI * shape.radius ** 2.

To calculate the area of a square, use shape.sideLength ** 2. */

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sideLength: number
}

type Shape = Circle | Square;

function calculateArea(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.sideLength ** 2;
    }
    else {
        throw new Error
            ("Unsupported shape  type")
    }
}

const circle: Circle = {
    kind: "circle",
    radius: 5
}
const square: Square = {
    kind: "square",
    sideLength: 10
}

console.log(calculateArea(circle))
console.log("Square", calculateArea(square))

/**********************Mapped Types********************* */


export type Point{
    x: number,
    y: number
}

type X = Point['x']//Lookup Types  ---> used to get the type of member from any given type, for eg: the X member of point 

type PointKeys = keyof Point //the keyof type operator can be used to get the keys of a type as a union of string literals, here it is the Union of X and Y


export const origin: Point = {
    x: 0,
    y: 0
}

origin.x = 100

/*Exercise
Create a mapped type NullablePoint where each property of the Point type is made nullable (i.e., it can also be null). */

// Define the original Point type
type Point = {
    x: number;
    y: number;
    z: number;
};

// Define the mapped type NullablePoint
type NullablePoint = {
    [K in keyof Point]: Point[K] | null;
};

// Example usage
const nullablePoint: NullablePoint = {
    x: 1,
    y: null, // Making y nullable
    z: 3,
};

console.log(nullablePoint); // Output: { x: 1, y: null, z: 3 }



/************************************MIXI****************************** */

class Disposable {
    isDisposed: boolean = false;
    dispose() {
        this.isDisposed = true
    }
}

class Activable {
    isActive: boolean = false;
    activate() {
        this.isActive = true
    }
    deactivate() {
        this.isActive = false;
    }
}

// class Example extends Disposable,Activable{

// } ---> Cannout use multiple classes, sp the solution is Class Mixins

//  export function SomeMixin<Base extends Class>(base:Base){
//     return class extends base{

//     }
//  }  ---> General Pattern for creating a mixin function

export function DisposableMixin<Base extends Class>(base: Base) {
    return class extends base {
        isDisposed: boolean = false;
        dispose() {
            this.isDisposed = true
        }

    }
}
