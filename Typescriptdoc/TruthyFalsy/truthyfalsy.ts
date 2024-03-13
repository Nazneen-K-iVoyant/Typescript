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
const bananas=3
const apples=0
const numberOfBananasOrApples=apples||bananas
console.log(numberOfBananasOrApples)

/*Using the double not operator combination (!!)
To force a variable into it's boolean representation from either truthy or falsy to either true or false, use !! as follows: */
const orange=3;
const pear=0
const atLeastOne=!!orange|| !!pear
console.log(atLeastOne)



/*The nullish coalescing operator (??)
TypeScript allows to return a "fallback" value if the left side of the operator is either null or undefined.
It is similar to using the logical OR operator || but will choose the right value only if the left side is either null or undefined, whereas the || operator will choose the left side only if the value is truthy. */

const appless = 0;
const oranges = 3;

// will be set to 0 since apples is a number
const applesOrOranges = oranges ?? appless;
console.log(applesOrOranges)

// will be set to 3 since apples is falsy
const numberOfApplesOrOranges = apples || oranges;
console.log(numberOfApplesOrOranges)