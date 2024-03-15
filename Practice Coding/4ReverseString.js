/*Reverse a String:
Write a function that reverses a string without using built-in reverse() function. */
function reverseString(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));
