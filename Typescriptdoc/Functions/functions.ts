/*Functions  in Typescript can have typed parameters and return values */

/*Here, the function add recieves two numbers and returns a number. The function defines the types of the parameter and its return value using : operator */

function add (a:number,b:number):number{
    return a+b
}
console.log(add(3,4))

//Arrow function
const addNum=(a:number,b:number):number=>{
    return a+b
}
console.log(addNum(4,56))

/*Exercise
Create a function named multiply that takes two number parameters and returns their product.*/
function multiply(c:number,d:number):number{
    return c*d
}
console.log(multiply(4,5))

const arrowMultiply=(e:number,f:number)=> e*f
console.log(arrowMultiply(6,7))