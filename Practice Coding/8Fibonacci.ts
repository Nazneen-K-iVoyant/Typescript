function fibonacci(n:number):number{
    if(n<=0){
        throw new Error ("Input should be a  positive number")
    }

    if(n===1||n===2){
        return 1
    }
    let prev=1
    let curr=1

    for(let i=3;i<=n;i++){
        const next=prev+curr
        prev=curr
        curr=next
    }

    return curr
    
}


const n=6
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`)