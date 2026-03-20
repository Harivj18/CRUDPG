const factorial = (n) => {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(`Factorial of Number ${5} :`, factorial(5));
