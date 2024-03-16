/***Fetch and Display Data:** Create a TypeScript function that fetches data from a RESTful API using `fetch` and displays it on the web page. */

async function fetchingData(url:string){
    const response=await fetch(url)
    const result=response.json()
    return result
}
const apiUrl="https://jsonplaceholder.typicode.com/users"
fetchingData(apiUrl)
.then((data)=>{
    console.log("fetched data",data)
})
.catch((error)=>{
    console.log("Error in fetching data",error)
})