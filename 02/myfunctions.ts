function addTwo(num: number) {
    return num + 2
}

addTwo(5)

/* Whenever there is an inference of what should be the datatype it is usually good in the case of variables but in the case of functions it is not so good */
/*
function addTwo(num){  ---> here the function is having the type of any, which creates so many problems at the later stages
    return num+2
}

addTwo(5)
*/


function getUpper(val: string) {
    return val.toUpperCase()
}
console.log(getUpper("hello"))



function signUpUser(name: string, email: string, isPaid: boolean) {

}
signUpUser("Naz", "naz@gmail.com", true)


let loginUser = (name: string, email: string, isPaid: boolean = true) => { }
loginUser("h", "h@h") //---> here compulsorily you must pass an argument else, provide a default value




//-------------------------------------------------------------------------------------------------------
/* A better way to write functions */
//--------------------------------------------------------------------------------------------------------

/*Taking this as example
function addTwo(num:number){
    return "hello"
}
here the parameters value is number, but we are returning string
- In order to avoid this type of error, we must even specipy the return type

***** function addTwo(num:number):number{
    return " hello"   ----------------------------> Now it will throw an error, becuase we have mentioned that the return type must be number.
}
*/



function addTwoo(num: number): number {
    return num + 5
}
console.log(addTwoo(6))

/*Writing using arrow function */

const getHello = (s: string): string => { return "Hello" }


// const heros=["thor","spiderman","ironman"]

const heros = [1, "spiderman", "ironman"] // Here it is automatically switching its type, here we dont have to explicitly annotate that this needs  to be string. The context switching of TypeScript  is really smart and we can rely on this.
const result = heros.map(hero => {
    return `hero is ${hero}`
})

console.log(result)

// for specifying the return type ---> const result= heros.ma((map):string =>{   return .......   })


function consoleError(errmsg:string): void{  //---> here we have specified the return type as void. So now nothing can be returned
    console.log(errmsg)
}



/*never, some functions never return a valu */
function handleError(errmsg:string): never{ 
    // console.log(errmsg)
     throw new Error(errmsg)
}      
                
