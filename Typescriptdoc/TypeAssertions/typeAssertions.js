/*Sometimes you might know a more specific type than TypeScript can infer. In these cases, you can use type assertions to specify the type you're confident about. */
var someValue = "This is string";
var strLength = someValue.length;
console.log(strLength);
