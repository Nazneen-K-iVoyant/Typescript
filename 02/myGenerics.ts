/*Generics provide a way to make components work over a variety of types rather than a single one. */

// function identity(arg:number): number{
//     return arg
// }


const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}


//Generics ---> locks the type
function identityThree<Type>(val: Type): Type {
    return val
}
console.log(identityThree(3))

//Mostly it is written in this way:
function identityFour<T>(val: T): T {
    return val
}


/*How we can create or take an input as an Array */
function getSearchProducts<T>(products: T[]): T {
    //do some database operations
    const myIndex = 3
    return products[3]
}

//Converting this to Arrow function
// const getMoreSearchProducts = <T>():T=>{ }   -----> Basic Syntax

const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operation

    const myIndex = 4
    return products[myIndex]
}



