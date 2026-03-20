const fibRange = (n) => {
   if (n===1) {
        return [0]
   }
   if (n===2) {
        return [0,1]
   }
   let fib = [0,1]
   for (let i = 2; i < n; i++) {
        fib.push(fib[i-1]+fib[i-2])
   }
   return fib
}

console.log('Range of fibonaaci :', fibRange(10));
