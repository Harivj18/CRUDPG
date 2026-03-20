const generateBinary = (k) => {
    const queue = []
    const result = []
    queue.push("1")
    while (result.length < k) {
        const current = queue.shift();
        result.push(current)

        if (result.length < k) {
            queue.push(current + "0")
            queue.push(current + "1")
        }
    }
    return result
}

console.log('Binary Number',generateBinary(5));
