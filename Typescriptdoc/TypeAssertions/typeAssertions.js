/*Sometimes you might know a more specific type than TypeScript can infer. In these cases, you can use type assertions to specify the type you're confident about. */
var someValue = "This is string";
var strLength = someValue.length;
console.log(strLength);
/*In general, type assertions should be avoided if possible. But sometimes it is impossible, especially when dealing with JSON serialization and deserialization from a server. */
/*Exercise
You are given a variable of type any that is supposed to contain a string. Write a function that takes this variable and returns the length of the string using type assertions. */
var variable = "Hello";
function lengthOfArray(variable) {
    return variable.length;
}
console.log(lengthOfArray(variable));
