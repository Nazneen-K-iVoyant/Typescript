let greetings: string = "Hello Nazneen";
console.log(greetings);

//number
let userId: number=345678 //---> It automatically detects On making it as a Number, only the values and the methods which are related to number will be fetched, if  we try to some other then it throws error

//Boolean
let isLoggedIn: boolean=false

//Any  ---> Typescript also has a special type, any, that you can use whenever you dont want a particu;ar value to cause typechecking errors
// You usually want to avoid this, though, because any isn't type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error
let hero;
function getHero(){
    return "Thor"
}

hero=getHero()

export { }