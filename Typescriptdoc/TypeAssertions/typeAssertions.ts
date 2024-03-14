/*Sometimes you might know a more specific type than TypeScript can infer. In these cases, you can use type assertions to specify the type you're confident about. */

let someValue:any="This is string"
let strLength:number =(<string> someValue).length
console.log(strLength)


/*In general, type assertions should be avoided if possible. But sometimes it is impossible, especially when dealing with JSON serialization and deserialization from a server. */