/*
1 Create a class called `Stack` that implements a stack data structure.
Use `push` and `pop` methods to add and remove elements from the stack. 
- Last in First Out
*/

class Stack<T>{
    private items: T[]

    constructor() {
        this.items = []//---> Initializing class instances
    }

    push(items: T): void {
        this.items.push(items)
    }
    pop(): T | undefined {
        return this.items.pop()
    }
}

const stack = new Stack<number>
stack.push(1)
stack.push(2)
console.log(stack)

//*************************************************************** */
/*2 Remove Duplicates from an Array*/
/*array.filter(function(currentValue, index, arr), thisValue) */
//*************************************************************** */

function removeDuplicates<T>(arr: T[]): T[] {
    return arr.filter((currentValue, index) =>
        (arr.indexOf(currentValue) === index)
    )
}
console.log(removeDuplicates([1, 2, 3, 1, 4, 5]))

//*************************************************************** */
/*
3 Implement a queue using Array
- First in First Out ---> Fifo */
//*************************************************************** */
class Queue<T>{
    private items: T[]

    constructor() {
        this.items = []
    }

    enqueue(items: T): void {
        this.items.push(items)
    }
    dequeue(): T | undefined {
        return this.items.shift()
    }
}

const queue = new Queue<Number>()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(5)
console.log(queue)
queue.dequeue()
console.log(queue)

//***************************************** */
/*4: Sum of Positive Numbers */
//***************************************** 
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// Reducer function parameters:
// total	Required.
// The initialValue, or the previously returned value of the function.
// currentValue	Required.
// The value of the current element.
// currentIndex	Optional.
// The index of the current element.
// arr	Optional.
// The array the current element belongs to.
// initialValue	Optional.
// A value to be passed to the function as the initial value.


function sumOfPositive(number: number[]): number {
    return number.reduce((accumulator, currentValue, currentIndex, arr) => {
        return currentValue > 0 ? accumulator + currentValue : accumulator
    }, 0)

}
console.log(sumOfPositive([1, 2, 3, 4, 5]))

/*5 Find the largest Element */


function findLargest(number: number[]): number {
    return number.reduce((accumulator, currentValue, currentIndex, arr) => {
        return accumulator > currentValue ? accumulator : currentValue
    }, -Infinity)
}

console.log(findLargest([1, 2, 34, 1, 2, 45, 6, 8]))


/*6 Group Array Elements by Type */

function groupElementsByType(arr: (string | number | boolean)[]): { [key: string]: (string | number | boolean)[] } {
    return arr.reduce((grouped, element) => {
        const type = typeof element;
        if (!grouped[type]) {
            grouped[type] = []
        }
        grouped[type].push(element)
        return grouped
    }, {} as { [key: string]: (string | number | boolean)[] })
}
console.log(groupElementsByType([1,2,true,"Hi","Hello",39]))

/*7 Flatten Nested Array */

function flattenArray<T>(arr:T[]):T[]{
    return arr.reduce((acc,current)=>{
            Array.isArray(current)? acc.concat(flattenArray(current)):acc.concat(current)
    },[])
}

console.log(flattenArray([1,2,[3,4,[5]],6]))