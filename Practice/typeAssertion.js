/*Exercise
You are given a variable of type any that is supposed to contain a string. Write a function that takes this variable and returns the length of the string using type assertions. */
function getStringLength(someValue) {
    if (typeof someValue === 'string') {
        return someValue.length;
    }
    else {
        return 0;
    }
}
var someValue = "This is a string";
console.log(getStringLength(someValue));
