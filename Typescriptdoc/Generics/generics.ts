/*Generics provide a way to make components work over a variety of types rather than a single one  */

function echo<T>(arg:T):T{
    return arg
}


/*Exercise
Create a generic function named wrapInArray that takes an argument of any type and returns an array of that type containing the provided value. */

function wrapInArray<T>(arg:T):T[]{
    return [arg]
}

const strArray = wrapInArray('hello'); // strArray is inferred as string[]
console.log(strArray); // Output: ['hello']