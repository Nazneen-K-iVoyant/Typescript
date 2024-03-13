/*tuples isn't present in JavaScript 
- Can be used to have some structure/ sequence or to have order of the data, which is generally found in API's
*/

let user:[string, number, boolean]

user=["hc",23,true] //---> It cannot be like this [131,"hc",true]

let rgb:[number,number,number]=[255,123,432]


type User=[number,string]
const newUser:User=[223,"233@gmail.com"]
//Overriding the values
newUser[1]="hc@hc.com"

export { }
