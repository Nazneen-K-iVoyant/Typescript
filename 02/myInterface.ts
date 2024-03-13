/*Uses the keyword interface */

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    startTrail: () => string
    getCoupon(couponName: string): number
}


const naz: User = {
    dbId: 22, email: "h@h.com", userId: 23, startTrail: () => {
        return "Start"
    }, getCoupon: (counponN: "Apple") => {
        return 3
    }, githubToken: 2345678, 
}
naz.email = "naz@gmail.com"
console.log(naz)
// naz.dbId=123 ---> Throws error

interface User {
    githubToken: number
}



/******Inheritance**********/

interface Admin extends User {
    role: "admin"| "ta"| "learner"
}

