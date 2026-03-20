const mnPrime = (m, n) => {
    let end = m + n;
    let result = [];
    const checkPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }            
        }
        return true
    }
    for (let i = 2; result.length !== end; i++) {
        const primeNum = checkPrime(i);
        if (primeNum) {
            result.push(i)
        }
    }
    return result.slice(m-1, end).reduce((acc, val) => (acc + val), 0);
}

console.log('mnPrime :', mnPrime(6, 2)); //49

// m position starting prime num
// m to n position prime num needs to sum