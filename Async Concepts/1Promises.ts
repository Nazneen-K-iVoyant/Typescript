// /*Asynchronous Programming:
// Asynchrouss Programming or in short, async programming is a method of programming which enables different parts of code to run at changing times, instead of immeddiately

// - Mostly required when we want to fetch information from some remote server.
// */


// // function getServerStatus(){
// //     const result=
// // }

// // function delay(milliseconds:number):Promise<void>{

// // }

// /*resolve()  ---> them() 

// reject()---> catch()*/

// /*
// 1 let prom=new Promise() //----> Promise object is created

// 2 let prom=new Promise(function(){
// })    ---> Function is defined


// 3 let prom=new Promise(function(resolve,reject){
// });

// 4) Example:
// let prom=new Promise(function(resolve,reject){
//     if(condition){
//             -----resolve()---> if the condition gets satisfies, no need to create them ,just call them here
//     }else{
//             -----reject()----> if the condition gets fail
//     }
// })

// **********
// next part to do after the resolve is done

// let onfulfulment=(result)=>{
//     console.log(result)
// }

// let onRejection=(error)=>{
//     console.log(error)
// }

// ******

// next after creating these functions use the, .then and .catch

// prom.then(onFulfullment)
// prom.catch(onRejection)
// */

// /*

// CREATING A PROMISE
// const myPromise = new Promise<ReturnType>((resolve, reject) => {
//     // Asynchronous operation or task
//     // If successful, call resolve(value)
//     // If there's an error, call reject(error)
// });
//  */
// /// <reference lib="es2015.promise" />

// function delay(milliseconds: number): Promise<void> {
//     return new Promise<void>((resolve) => {
//         setTimeout(() => { resolve() }, milliseconds)
//     })
// }

// delay(2000).then(() => {
//     console.log('Promise resolved after 2000 milliseconds ')
// })


// /*

// USING A PROMISE
// myPromise
//     .then((value: ReturnType) => {
//         // Handle successful completion
//     })
//     .catch((error: any) => {
//         // Handle error
//     });
//  */


// function fetchUserData():Promise<{name:string;age:number}>{
//     return new Promise<{name:string;age:number}>((resolve,reject)=>{
//         setTimeout(()=>{
//             const userData={name:'John Doe',age:30}
//             resolve(userData)
//         },2000)
//     })
// }
// fetchUserData()
// .then((userData)=>{
//     console.log("User Data",userData)
// })
// .catch((error)=>{
//     console.log('Error',error)
// })


//**********************************************/
//Create a function that fetches data from a RESTful API using `fetch` and returns a Promise that resolves with the fetched data.

/// <reference lib="es2015.promise" />
function fetchingData(url: string): Promise<any> {
    return new Promise((resolve, reject) => {

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network respose was not ok")
                } return response.json()
            })
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

fetchingData('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        console.log("Fetched Data", data)
    })
    .catch(error => {
        console.log("Error fetching data:", error)
    })