const fibonacci = (n) => {
    if (n<2) {
        return 1
    }
    return factorial(n-1) + factorial(n-2);
}

console.log('Fibonacci of number :', fibonacci(10));
