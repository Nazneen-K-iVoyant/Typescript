/*FizzBuzz:
Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". */

// function fizzBuzz():void{
//     for(var i=1;i<=100;i++){
//         if(i%3===0 && i%5===0){
//           console.log("Fizz")
//         }
//         else if(i%3===0){
//             console.log("Buzz")
//         }
//         else if(i%5===0){
//             console.log("FizzBuzz")
//         }
//         else{
//           console.log(i)
//         }

//     }
// }
// fizzBuzz()


//Other Method by using STRING and NUMBER, and using arrays and push method

function fizzBuzz(): (number | string)[] {
    const results: (number | string)[] = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("Fizzbuzz")
        } else if (i % 3 === 0) {
            results.push("Fizz")
        } else if (i % 5 === 0) {
            results.push("Buzz")
        } else results.push(i)

    }
    return results

}

console.log(fizzBuzz())