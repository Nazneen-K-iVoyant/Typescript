/*The 
keyof type operator
The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as type P = "x" | "y": */

type point={
    x:number,
    y:number
}

type P = keyof point



/* Exercise
Create a function that updates a property's value in an object, given the object, a property key, and a new value.*/


function updatePropertyValue<T,K extends keyof T>(obj:T,key:K,value:T[K]):void{
    obj[key]=value;
}

let person={name:"John", age:30}
console.log("Before Update",person)
updatePropertyValue(person,"age",40)
console.log("After update",person)