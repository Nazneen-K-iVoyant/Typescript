// /* */
// // async function fetch(url:string):Promise<void>{
// //     try{
// //         const response=await fetch(url)
// //         if(!response.ok){
// //             throw new Error(`HTTP Error! Status:${response.status}`)
// //         }
// //     }
// // }
// // async function fetchData(url: string): Promise<void> {
// //     try {
// //         const response = await fetch(url);
// //         if (!response.ok) {
// //             throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         console.log(data); // Do something with the fetched data
// //     } catch (error) {
// //         console.error('Error fetching data:', error);
// //     }
// // }
// // // Example usage
// // const apiUrl = 'https://api.example.com/data';
// // fetchData(apiUrl);
// /*
// Fetch Data and Handle Promise:
// Write a function that fetches data from an API using the Fetch API and returns a promise.
// Handle the promise to log the fetched data to the console when it resolves.z */
// // function fetchData():Promise<any>
// // {
// //    return fetch ('https://jsonplaceholder.typicode.com/posts')
// //    .then(respose=>respose.json())
// // }
// // fetchData()
// // .then(data=>console.log(data))
// // .catch(error=>console.error("error fetching data:",error))
// // export {}
// //Simple fetch API
// // async function fetching(){
// //     const a= await fetch('https://jsonplaceholder.typicode.com/pots')
// //     const result=await a.json()
// //     console.log(result)
// // }
// // fetching()
// function fetching(): Promise<void> {
//     return fetch('https://jsonplaceholder.typicode.com/pots')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }
// fetching();
// /*The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. */
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/pots')
        .then(function (response) { return response.json(); });
}
fetchData()
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.error('Error fetching data:', error); });
// function delay(milliseconds: number): Promise<void> {
//     return new Promise<void>((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds);
//     });
// }
// // Usage
// delay(2000).then(() => {
//     console.log('Promise resolved after 2000 milliseconds');
// });
//******************************************************************************************************************* */
/// <reference lib="es2015.promise" />
function delay(milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, milliseconds);
    });
}
// Usage
delay(2000).then(function () {
    console.log('Promise resolved after 2000 milliseconds');
});
