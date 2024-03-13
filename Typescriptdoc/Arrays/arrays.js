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
console.log(pets.indexOf("cat"));
//Array length
var numbers = [1, 2, 3, 45];
console.log(numbers.length);
