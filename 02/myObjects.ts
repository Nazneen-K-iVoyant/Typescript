const User = {
    name: "hitesh",
    email: "hitesh@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boleam }) { }

createUser({ name: "hitesh", isPaid: false })

/*Else we can even write liken this,
 let newUser= { name: "hitesh", isPaid: false }
 createUser(newUser)
*/


//Object Returning an Object


/*
function createCourse(): {} {

    return {}
} */ //---> Function name createUser, function parameter(), return type { }, function defination  {}


function createCourse(): { name: string, price: number } {

    return { name: "React", price: 399 }
}

export {}

