const evalPostfix = (nums) => {
    const operator = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
        '%': (a,b) => a % b,
    }
    const stack = []
    for (const element of nums) {
        if (operator[element]) {
            const b = stack.pop()
            const a = stack.pop()
            stack.push(operator[element](a,b))
        } else {
            stack.push(+element)
        }
    }
    return stack
}
console.log('Postfix evaluation :',evalPostfix(["2", "1", "+", "3", "*"]));
