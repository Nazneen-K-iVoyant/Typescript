/*Functions  in Typescript can have typed parameters and return values */
/*Here, the function add recieves two numbers and returns a number. The function defines the types of the parameter and its return value using : operator */
function add(a, b) {
    return a + b;
}
console.log(add(3, 4));
//Arrow function
var addNum = function (a, b) {
    return a + b;
};
console.log(addNum(4, 56));
/*Exercise
Create a function named multiply that takes two number parameters and returns their product.*/
function multiply(c, d) {
    return c * d;
}
console.log(multiply(4, 5));
var arrowMultiply = function (e, f) { return e * f; };
console.log(arrowMultiply(6, 7));
