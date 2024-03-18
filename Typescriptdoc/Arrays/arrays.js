/*Defining Array */
var names = ["Alice", "Bob", "Clark"];
var ids = [1, 234, 4, 56];
/*Adding and removing Elements
Push() ---> Add to the end of the array
Pop()  ---> Remove from the end of the array
ushift() ---> Inserts to the beginning of the array
shift() ---> removes the first element
*/
var colors = ["red", "pink"];
colors.push("Yellow");
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("Green");
console.log(colors);
//Accessing and Modifying Elements
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]);
console.log(fruits);
fruits[1] = "Kiwi";
console.log(fruits);
//Finding Elements
var pets = ["Cat", "Birds"];
console.log(pets.indexOf("Cat"));
// console.log(pets.includes("Cat"))
//Array length
var numbers = [1, 2, 3, 45];
console.log(numbers.length);
/*Exercise:
Create an array of numbers named ages. Initialize it with three values: 25, 30, and 35. Add a new age, 20, to the start of the array. Finally, remove the last age from the array.*/
var ages = [25, 30, 35];
console.log(ages);
ages.unshift(20);
console.log(ages);
ages.pop();
console.log(ages);
