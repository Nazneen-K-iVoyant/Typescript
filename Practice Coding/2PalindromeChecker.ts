/*Palindrome Checker:
Write a function that checks whether a given string is a palindrome (reads the same backward as forward). Ignore non-alphanumeric characters.
 */

function isPalindrome(str: string): boolean {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '')
    return cleanStr === str.split('').reverse().join()
}
console.log(isPalindrome("Hello"))


/*Panlindrome Checker for Numbers */

function isPalindromeNumber(num: number): boolean {
    let lastDigit
    let reverse = 0
    let duplicate = num
    while (num > 0) {
        lastDigit = num % 10
        reverse = (reverse * 10) + lastDigit
        num = Math.floor(num / 10)
    }
    if (duplicate === reverse) {
        return true
    } else { return false }


}

console.log("Number Palindrome Result:",isPalindromeNumber(111))