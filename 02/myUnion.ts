/*Union Type */
let score: number | string = 33

score = 44
score = "55"


type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let hitesh: User | Admin = { name: "hitesh", id: 334 }

hitesh = { username: "hc", id: 22 }


// function getDbId(id:number|string){
//     console.log(`DB id is ${id}`) //---> can be used while making API Calls
// }
// getDbId(3)
// getDbId("4")



//Now  the problem comes when there is manipulation to be done

function getDbId(id: number | string) {
    // id.toLowerCase  //---> now its  throwing an error, if onorder to manipulate it use if conditions
    if (typeof id === "string") {
        id.toLowerCase()
    }
}
getDbId(3)
getDbId("4")

//Arrays

const data: number[] = [1, 2, 3, 4, 5, 6]
//**********************************************************************/
//Important!!
// Mistakes done mostly
//const data2:string[]|number[]=[1,2,"3"]  //---> This should not be  done in way, in order to have the mix and match of both string and number then we need to wrap it with parenthesis.
//*********************************************************************** */

const data3: (string | number)[] = [1, 2, "3"]  // ---> This is the correct way of using Unions in arrays.


/*Strict Value
eg, if we want to have the value of pi to be only and only 3.14 and it must not be changed */


let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment="crew"//---> Throws error