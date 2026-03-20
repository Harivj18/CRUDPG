const primeNumber = (n) => {
    if (n <=1) {
        return true
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true;
}

console.log(`${11} is a prime Number`, primeNumber(11));
console.log(`${6} is a prime Number`, primeNumber(6));
