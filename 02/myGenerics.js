/*Generics provide a way to make components work over a variety of types rather than a single one. */
// function identity(arg:number): number{
//     return arg
// }
var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
console.log(identityThree(3));
