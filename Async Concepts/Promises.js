// let complete=true

// let prom=new Promise(function(resolve,reject){
//     if(complete){
//         resolve("I am siccessful")
//     } else{
//         reject("I am failed")
//     }
// })

// console.log(prom)  ---> Method 1

//*********************************************** */
//Method 2

function prom(complete) {
  // let complete=true is passed here
  return new Promise(function (resolve, reject) {
    if (complete) {
      resolve("I am successful");
    } else {
      reject("I am failed");
    }
  });

  console.log(prom(true));
}

/*
- So basically, the promise just returns whether it is pass or fail
- So for further processing, we need to construct functions i) when the condition gets passes ii) when the condition gets rejected */

let onFulfulment = (result) => {
  console.log("Heyyyy", result);
};

let onRejection = (error) => {
  console.log(error);
};

//These functions wont get called by themselves, for this we need to use 2 callback functions .them() and .catch, and then we need to call the promise function and add the .then and .catch and there pass the 2nd function

prom(true).then(onFulfulment);
prom(false).catch(onRejection);

//Other method in order to reduce the code length is, we can avoid writing the separate onFulfillment and onRejection function, and we can simply include it in the .then( ) and .catch( )
/*
prom(true).resolve((result) => {
  console.log(result);
})

prom(false).catch((error) => {
  console.log(error);
};
)
*/

/*
In the code provided, the then method is used to specify what should happen when the Promise is resolved. This method takes a callback function (onFulfillment in this case) as an argument. When the Promise is resolved, the value passed to the resolve function inside the Promise constructor becomes the argument for the onFulfillment function.

So, the connection between the result (in onFulfillment) and the resolve function is established by the then method. When the Promise resolves, the value passed to resolve is automatically passed as an argument to the onFulfillment function.

Similarly, the catch method is used to specify what should happen when the Promise is rejected. This method takes a callback function (onRejection in this case) as an argument. When the Promise is rejected, the value passed to the reject function inside the Promise constructor becomes the argument for the onRejection function.

Therefore, the connection between the error (in onRejection) and the reject function is established by the catch method. When the Promise is rejected, the value passed to reject is automatically passed as an argument to the onRejection function. */

function prom2(complete) {
  return new Promise(function (resolve, reject) {
  console.log("Wait.. On fetching data")
setTimeout(()=>{
 
    if (complete) {
      resolve("Sucess");
    } else {
      reject("Fail");
    }
  },2000);
})
}

let fullfill=(result2)=>{
  console.log(result2)
}

let onRejected=(error2)=>{
  console.log(error2)
}

prom2(true).then(fullfill)
prom2(false).catch(onRejected)

//************************************************************** */
//Fetch API Syntax

fetch(url[, options])
  .then(response => {
    // Handle response
  })
  .catch(error => {
    // Handle error
  });
