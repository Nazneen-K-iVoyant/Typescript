/*Defining Array */

let names: string[] = ["Alice", "Bob", "Clark"]
let ids: Array<number> = [1, 234, 4, 56]


/*Adding and removing Elements 
Push() ---> Add to the end of the array
Pop()  ---> Remove from the end of the array
ushift() ---> Inserts to the beginning of the array
shift() ---> removes the first element
*/

let colors: string[] = ["red", "pink"]
colors.push("Yellow")
console.log(colors)
colors.pop()
console.log(colors)
colors.shift()
console.log(colors)
colors.unshift("Green")
console.log(colors)


//Accessing and Modifying Elements
let fruits:string[]=["Apple","Banana","Orange"]
console.log(fruits[1])
console.log(fruits)
fruits[1]="Kiwi"
console.log(fruits)


//Finding Elements
let pets:string[]=["Cat","Birds"]
console.log(pets.indexOf("Cat"))

// console.log(pets.includes("Cat"))

//Array length
let numbers:number[]=[1,2,3,45]
console.log(numbers.length)


/*Exercise:
Create an array of numbers named ages. Initialize it with three values: 25, 30, and 35. Add a new age, 20, to the start of the array. Finally, remove the last age from the array.*/


let ages:number[]=[25,30,35]
console.log(ages)
ages.unshift(20)
console.log(ages)
ages.pop()
console.log(ages)