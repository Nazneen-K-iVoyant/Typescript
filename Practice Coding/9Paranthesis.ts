/*Validate Parentheses:
Write a function that determines if the parentheses in a given string are balanced and properly nested. */

function isValidParentheses(s: string): boolean {
    const stack: string[] = [];
    const mapping: { [key: string]: string } = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (mapping[char] !== top) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
