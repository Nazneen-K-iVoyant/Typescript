/*TypeScript considers some values as "falsy". When evaluated inside a boolean expression, they will act as false. Here are a few examples of falsy variables in TypeScript:

false
0
NaN (the "not a number" value)
"" (empty string)
[] (empty array)
null
undefined


- Excluding them all other values will be considered as True
*/
/* The || (logical OR) operator can be used to select the first non-falsy value.*/
var bananas = 3;
var apples = 0;
var numberOfBananasOrApples = apples || bananas;
console.log(numberOfBananasOrApples);
/*Using the double not operator combination (!!)
To force a variable into it's boolean representation from either truthy or falsy to either true or false, use !! as follows: */
var orange = 3;
var pear = 0;
var atLeastOne = !!orange || !!pear;
console.log(atLeastOne);
/*The nullish coalescing operator (??)
TypeScript allows to return a "fallback" value if the left side of the operator is either null or undefined.
It is similar to using the logical OR operator || but will choose the right value only if the left side is either null or undefined, whereas the || operator will choose the left side only if the value is truthy. */
var appless = 0;
var oranges = 3;
// will be set to 0 since apples is a number
var applesOrOranges = oranges !== null && oranges !== void 0 ? oranges : appless;
console.log(applesOrOranges);
// will be set to 3 since apples is falsy
var numberOfApplesOrOranges = apples || oranges;
console.log(numberOfApplesOrOranges);
