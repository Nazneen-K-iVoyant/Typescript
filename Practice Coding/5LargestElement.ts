/*Find the Largest Number:** Write a function that takes an array of numbers and returns the largest number in the array. */

function largestElement(nums: number[]): number {
    let largest = nums[0] //---> Assume the first number to be the largest number
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i]// Updating the largest value
        }
    }
    return largest;

}
console.log(largestElement([10, 5, 20, 8, 15]))

/*
[23,342,454,34,3332,444,4]
iterating
 let largest=MAXVALUE
for(... ){
   if()
}

*/


