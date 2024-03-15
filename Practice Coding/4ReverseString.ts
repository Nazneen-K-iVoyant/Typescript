/*Reverse a String:
Write a function that reverses a string without using built-in reverse() function. */
function reverseString(str:string):string{
    let reversed=''
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i] //---> reversed=reversed+str[i]
    }
    return reversed
}

console.log(reverseString("hello"))