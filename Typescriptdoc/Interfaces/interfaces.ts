/*
- Defines the shape or structure of Object
- Dont get compile into the JavaScript code and exists only for static type checking 
- Once the interface is written, any object which has been declared by that name must and should have all its property and type
-An interface may also have optional fields, denoted using the ? operator
*/


interface Dog{
    name:string,
    age:number
}

const animal:Dog={
    name:"Tommy",
    age:21
}

console.log(animal)


/*
Exercise:
Your task is to create an interface named Car. This interface should possess two properties: model, which will be a string, and year, a number. Once you've defined the interface, make an object that fits the criteria set by the interface. */

interface Car{
    model:string,
    year:number
}

const cars:Car={
    model:"Suzuki",
    year:4567
}
console.log(cars)