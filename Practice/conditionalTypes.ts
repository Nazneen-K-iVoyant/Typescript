/*The syntax for a conditional type is T extends U ? X : Y, where:

T is the type being evaluated.
U is the type against which T is being checked.
X is the resulting type if T extends U.
Y is the resulting type if T does not extend U. */


/*Exercise
Define a type function IsString<T> that checks if a given type is string. If it is, it should return "Yes", otherwise "No". */

type IsStringg<T> =
    T extends string ? "yes" : "no"


