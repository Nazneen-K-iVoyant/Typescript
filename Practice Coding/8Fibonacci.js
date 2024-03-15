function fibonacci(n) {
    if (n <= 0) {
        throw new Error("Input should be a  positive number");
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    var prev = 1;
    var curr = 1;
    for (var i = 3; i <= n; i++) {
        var next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
var n = 6;
console.log("The ".concat(n, "th Fibonacci number is: ").concat(fibonacci(n)));
