const reverseString = (str) => {
    const stack = []
    str = str.toLowerCase()
    for (let i = str.length - 1; i >= 0; i--) {
        stack.push(str[i])
    }
    return stack.join('')
}

console.log('Reversed string :', reverseString('Hari'));
