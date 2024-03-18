/*Literal types allow you to specify the exact value an Object must have.
In many cases, they can be combined with union types to express a finite set of possible values */

type ButtonSizes="small"|"medium"|"large"

/*Exercise
Define a function that accepts a parameter with a literal type of either "ascending" or "descending", and returns a corresponding message. */

function getMessgae(order:"ascending"|"descending"):string{
    if(order=="ascending"){
        return "sorting in ascending order"
    } else{
        return "Sorting in descending Order"
    }
}