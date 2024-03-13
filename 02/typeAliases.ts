/*
type ---> It is a keyword
*/

type User={
    name:string;
    email:string;
    isActive:boolean
}

function createUser(user:User){
 return {name:"",email:"",isActive:true}
}

createUser({name:"",email:"",isActive:true})




//----------------------------------------------------------------------
//READONLY and Optional
//----------------------------------------------------------------------

type Userr={
    readonly _id:string,  //---> It can't be changed, readonly is the keyword
    name:string,
    email: string,
    isActive:boolean,
    creaditCardDetails?:number // ---> ? indiccates that it is optional, eg used when some of the  websites  doesn't ask for the card details and allow free usage
}

let myUser:User={
    // _id:"12334",
    name:"h",
    email:"h@h.com",
    isActive:false
}
type cardNumber={
    cardnumber:string
}

type cardDetails={
    cardDate:string
}

type cardDate={
    cardDate:string
}


myUser.email="h@gmail.com"
// myUser._id="asa"  //---> Throws error

// type cardDetails =  cardNumber &  cardDate & {
//     cvv:number
// }
 type cardDetail = cardNumber & cardDate & {
    cvv:number
 }
