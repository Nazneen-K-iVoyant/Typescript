/*Anagram Checker:
Write a function to check whether two given strings are anagrams of each other (contain the same characters with the same frequency). */
// function isAnagram(str1: string, str2: string): boolean {
//     // Remove non-alphanumeric characters and convert both strings to lowercase
//     const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     // Check if the lengths of the cleaned strings are different
//     if (cleanStr1.length !== cleanStr2.length) {
//         return false;
//     }
//     // Sort the characters in both strings and compare them
//     const sortedStr1 = cleanStr1.split('').sort().join('');
//     const sortedStr2 = cleanStr2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
// }
// // Test cases
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "world")); // false
// console.log(isAnagram("Astronomer", "Moon starrer")); // true
function isAnagram(str1, str2) {
    var cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }
    var sortedStr1 = cleanStr1.split('').sort().join('');
    var sortedStr2 = cleanStr2.split('').sort().join('');
    if (sortedStr1 === sortedStr2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isAnagram("Hello", "Ehllo"));
