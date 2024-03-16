/*Callback - A function which is passes as an argument to another function 
Used to handle asynchronous operations:
    - Reading a file
    - Network Request
    - Interacting with databases
*/

/*  **Calculate Sum:** Write a function `calculateSum` that takes in two numbers and a callback function. The function should calculate the sum of the two numbers and pass the result to the callback function.*/

// function calculateSum(num1: number, num2: number, callback: (sum: number) => void): void {
//     const sum = num1 + num2;
//     callback(sum);
// }

// // Example usage:
// calculateSum(5, 3, (result) => {
//     console.log("The sum is:", result);
// });


function calculateSum(num1:number,num2:number,callback:(sum:number)=>void):void{
            const sum=num1+num2
            callback(sum)
}
calculateSum(3,4,(result)=>{
    console.log("The sum is:",result)
})