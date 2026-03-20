const XYPrimeNumber = (x,y) => {
    let a = 1;
    let b = 1;
    let end = Math.max(x,y);
    let result = []
    const checkPrime = (end) => {
        for (let i = 2; i <= Math.sqrt(end); i++) {
            if (end % i === 0) {
                return false
            }            
        }
        return true;
    }
    for (let i = 2; result.length !== 5; i++) {
        const primeNumber = checkPrime(i)
        if (primeNumber) {
            result.push(i)
        }
    }
    a = result[x-1];
    b = result[y-1];
    
    let c = (a*b) - 1;
    return c
}

console.log('XYPrimeNumber :', XYPrimeNumber(5, 2));

// find x and y prime number
// cal c = (a*b) -1