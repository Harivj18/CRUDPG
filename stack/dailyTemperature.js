const dailyTemp = (temp) => {
    const stack = []
    const result = new Array(temp.length).fill(0)
    for (let i = 0; i < temp.length; i++) {
        while (stack.length && temp[stack[stack.length - 1]] < temp[i]) {
            const top = stack.pop()
            result[top] = i - top
        }
        stack.push(i)
    }
    return result
}

console.log('Daily Temperature :', dailyTemp([73, 74, 75, 71, 69, 72, 76, 73]));  // [1, 1, 4, 2, 1, 1, 0, 0]
