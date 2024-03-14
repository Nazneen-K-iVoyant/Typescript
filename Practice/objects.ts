/*Q1. Define an interface Car with properties make (string) and year (number). */

interface Car {
    make: string,
    year: number
}

/*Q2. Create an object myCar of type Car with make as "Toyota" and year as 2022. */

const myCar: Car = {
    make: "Toyota",
    year: 2022
}

/*Q3. Define an interface Product with optional property description (string) and required property price (number). */

interface Product{
    price:number,
    description?:string
}

/*Q4. Define a type alias Employee with properties name (string), age (number), and an array skills of strings. */

type Employee={
    name:string,
    age:number,
    skills:string[]
}

/*Q5. Create an object employee of type Employee with name as "John", age as 30, and skills as ["JavaScript", "TypeScript"]. */


const employee:Employee={
    name:"John",
    age:30,
    skills:["JavaScript","TypeScript"]
}