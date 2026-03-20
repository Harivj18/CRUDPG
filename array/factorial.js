const factorial = (n) =>{
    if (n <= 1) {
        return n
    }

    return n * factorial(n - 1)
}
console.log(`Factorial of Number ${5} :`, factorial(5));
