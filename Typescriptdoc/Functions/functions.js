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