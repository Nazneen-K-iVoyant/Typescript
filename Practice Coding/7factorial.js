/*Factorial Calculation: Write a function to calculate the factorial of a given non-negative integer. */
function factorial(num) {
    if (num < 0) {
        throw new Error("Factorial is not defined for Negative Numbers");
    }
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result = result * i;
    }
    return result;
}
var num = 5;
console.log(factorial(num));
