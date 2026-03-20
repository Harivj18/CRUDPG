const primeNumberRange = (start, end) => {
    let result = []
    if (start && end <=1) {
        return
    }
    function checkPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0 ) {
                return false
            }   
        }
        return true   
    }
    for (let i = 2; i <= end; i++) {
        let primeres = checkPrime(i);
        if (primeres) {
            result.push(i)
        }        
    }
    return result
}

console.log('Range of prime number :', primeNumberRange(1,100));
