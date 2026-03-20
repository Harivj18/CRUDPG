const isValidParanthesis = (char) => {
    let params = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []
    for (const element of char) {
        if (params[element]) {
            stack.push(params[element])
        } else {
            let result = stack.pop()
            if (result !== element) {
                return false
            }
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}

console.log('isValidParanthesis :',isValidParanthesis('({[]})'));
console.log('isValidParanthesis :',isValidParanthesis('{'));
console.log('isValidParanthesis :',isValidParanthesis('[]'));
