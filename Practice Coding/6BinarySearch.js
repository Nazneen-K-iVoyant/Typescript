/*Binary Search:
Implement a binary search algorithm to find the index of a given element in a sorted array. */
/*Searching in Arrays
- A key will be provided,  then we need so search to the index of the given key



-Binary Search

- For binary Search the elements must be present in the sorted order, ie in the ascending order

- Find the mid element
- Compare it to the mid element
- Break the array, and then start comparing

*/
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // ---> Element Found, return it's index
        }
        else if (arr[mid] < target) {
            left = mid + 1; //----> Search in the right half
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}
var arr = [2, 3, 4, 5, 76, 78, 90];
var target = 4;
console.log(binarySearch(arr, target));
/*Explanation:

- We declare a function named binarySearch that takes a sorted array arr and a target number target as input and returns the index of the target element in the array.
-We initialize two pointers, left and right, to represent the left and right boundaries of the search range. Initially, left is set to 0, and right is set to the index of the last element in the array.
- We enter a while loop that continues as long as left is less than or equal to right. This loop performs the binary search.
- Inside the loop, we calculate the mid index as the average of left and right, rounded down using Math.floor().
- We compare the element at the mid index with the target:
    -If they are equal, we return mid, indicating that we found the target element.
    -If the element at mid is less than the target, we update left to mid + 1 to search in the right half of the array.
    -If the element at mid is greater than the target, we update right to mid - 1 to search in the left half of the array.
    - If the loop exits without finding the target element, we return -1 to indicate that the element was not found.
-This function efficiently finds the index of the target element in a sorted array using the binary search algorithm. */ 
