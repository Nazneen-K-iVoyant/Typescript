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
console.log(pets.indexOf("cat"))

//Array length
let numbers:number[]=[1,2,3,45]
console.log(numbers.length)