/*Q1. Declare an array matrix containing nested arrays representing a 2x2 matrix. Print the array. */
let matrix: number[][] = [[2, 3], [4, 5]]
console.log(matrix)


/*Q2. Declare an array colors containing strings "red", "green", and "blue". Iterate over the array and print each color. */

let colors: string[] = ["red", "green", "blue"]

colors.forEach(colors => {
    console.log(colors)
})

/*Q3. Declare an array ages containing numbers 25, 30, and 35. Map over the array and double each age. Print the modified array. */

let ages: number[] = [25, 30, 35]
let doubleAge = ages.map(age => {
    console.log(age * 2)
})

/*Q4. Declare an array numbers containing numbers 1 through 10. Filter the array to only include even numbers. Print the filtered array. */

let numbers:number[]=[1,2,3,4,5,6,7,8,9,10]
let evenNumbers=numbers.filter(number=>{
    return number%2==0
})
console.log("Even Number:",evenNumbers)

/*Q5. Declare an array grades containing numbers 85, 90, and 95. Reduce the array to calculate the average grade. Print the average. */

let grades:number[]=[85,90,95]
let averageGrade=grades.reduce((sum,grade)=>sum+grade,0)
console.log(averageGrade)

/*Q6. Declare an array names containing strings "Alice", "Bob", and "Charlie". Check if "Charlie" exists in the array and print the result. */



// let names:string[]=["Alice","Bob","Charlie"]
// // console.log(names.includes("Charlie"))  ---> Throwing error
// const charlieExists:boolean=names.includes("Charlie")
// if(charlieExists){
//     console.log("Charlie Exists in the array")
// }
// else{
//     console.log("Charlie doent exists in the array")
// }


const names: string[] = ["Alice", "Bob", "Charlie"];
const charlieExists: boolean = names.indexOf("Charlie") !== -1;

if (charlieExists) {
    console.log("Charlie exists in the array.");
} else {
    console.log("Charlie does not exist in the array.");
}

//Q7. Declare an empty array fruits and push strings "apple", "banana", and "orange" into it. Print the array.
let fruits:string[]=[]
fruits.push("apple","banana","orange")
console.log(fruits)