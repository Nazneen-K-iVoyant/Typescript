/*Anagram Checker:
Write a function to check whether two given strings are anagrams of each other (contain the same characters with the same frequency). */

function isAnagram(str1: string, str2: string): boolean {
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    if (cleanStr1.length !== cleanStr2.length) {
        return false
    }
    const sortedStr1 = cleanStr1.split('').sort().join('')
    const sortedStr2 = cleanStr2.split('').sort().join('')
    if (sortedStr1 === sortedStr2) {
        return true
    } else {
        return false
    }
}

console.log(isAnagram("Hello","Ehllo"))    