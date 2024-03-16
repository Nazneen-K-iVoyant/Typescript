/*async function test(){

} 

- Async function always returns a Promise 
-Aysnc function is used as there are som complications while using promises,  everytime we needed to call the resolve() and reject() function.

*/

// async function test(){
//     return "hello"
// }

//Other way of writing async function

let test = async function () {
  return "hello";
};

/*Using Arrow function
let test=async ()=>{
    return "hello"
} */

// console.log(test())

/*Don't need to write seperately resolve and reject
- Just directly use .then(), this .then gets executed when the async function gets success */

test().then((data) => {
  console.log(data);
});

/********************************************************** */
// Await
//******************************************************** */

async function test2() {
  console.log("A");
  await console.log("B");
  console.log("C");
}
test2();
console.log("D");
console.log("E");

//Fetcting using Async Await

async function dataFetching() {
  console.log("Fetching Data");
  const respose = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = respose.json();
  return result;
}
dataFetching()
  .then((data) => {
    console.log(data);
  })

  .catch((error) => {
    console.log("Error in fetching data");
  });
