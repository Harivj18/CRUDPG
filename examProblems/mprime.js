const mPrime = (x) => {
    let result = [];
    const checkPrime = (end) => {
        for (let i = 2; i <= Math.sqrt(end); i++) {
            if (end % i === 0) {
                return false
            }            
        }
        return true;
    }
    for (let i = 2; result.length !== x ; i++) {
        const prime = checkPrime(i);
        if (prime) {
            result.push(i)
        }        
    }    
    if(result.length >= x) {
        let primeNum = result[x-1];
        let val = primeNum.toString().split('');
        val = val.reduce((acc, curr) => (Number(acc)+ Number(curr)), 0)
        if (val.toString().split('').length === 1) {
            return primeNum * val
        }        
        return 0
    }
    return 0
}

console.log('mprime :', mPrime(6)); // 52

// calc digit sum of given num until it becomes single digit & then mul prime with that digit
