const primeNumberRange = (start, end) => {
    if (end <= 2) {
        return 1
    }
    const result = [];
    const helperFunction = (val) => {
        for (let i = 2; i <= Math.sqrt(val); i++) {
            if (val % i === 0) {
                return false
            }
        }
        return true
    }
    for (let i = start; i <= end; i++) {
        let isPrime = helperFunction(i)
        if (isPrime) {
            result.push(i)
        }
    }
    return result
}
console.log('Range of prime number :', primeNumberRange(1, 100));
