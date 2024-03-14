/*Utility Types are the Pre-defined generic types provided by the language that help manipulate and transform other types.
- These utility types allow you to perform common type transformation without having to write custom type definations each time
- they are powerful tools for working with types  in a more powerful and consise manner */


/*HEre are the commonly used utility types in JavaScript

Partial<T>: Constructs a type with all properties of T set to optional.
                                                   
Required<T>: Constructs a type with all properties of T set to required.

Readonly<T>: Constructs a type with all properties of T set to readonly.

Pick<T, K>: Constructs a type by picking the set of properties K from T.

Omit<T, K>: Constructs a type by omitting the set of properties K from T.

Record<K, T>: Constructs a type with a set of properties K of type T.

Exclude<T, U>: Constructs a type by excluding all properties from T that are assignable to U.

Extract<T, U>: Constructs a type by extracting all properties from T that are assignable to U.

NonNullable<T>: Constructs a type by removing null and undefined from T.

ReturnType<T>: Constructs a type consisting of the return type of function T.

Parameters<T>: Constructs a tuple type consisting of the parameter types of function T.

ConstructorParameters<T>: Constructs a tuple type consisting of the parameter types of the constructor function T.
   
*/

/*Partial: Makes all the propertie of a type Optional */
interface Person {
    name: string
    age: number
}

type PartialPerson = Partial<Person>

const partialPerson:PartialPerson={
    name:'Alice'
}

/*Required<T>; Makes all properties of a type required */


interface PartialPerson2{
    name?:string;
    age?:number
}

type RequiredPerson2=Required<PartialPerson2>
const RequiredPerson:RequiredPerson2={name:'Alice',age:30}


//Pick<T,K>: Pickss specific properties frok a type

interface Person{
    name2:string,
    age:number,
    address:string
}

type PersonNameAndAge=Pick<Person,'name2'|'age'>

const person:PersonNameAndAge={
    name2:'John',
    age:23
}