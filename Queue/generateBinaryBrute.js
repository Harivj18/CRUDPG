const generateBinary = (k) => {
    const queue = []
    for (let i = 1; i <= k; i++) {
        queue.push(i.toString(2))
    }
    return queue
}

console.log('Binary Number',generateBinary(5));
