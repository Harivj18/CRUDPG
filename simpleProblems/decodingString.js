const decodeString = (str) => {
    if (str === '') {
        return 'Invalid Input'
    }
    let result = []
    for (let letters of str) {
        if (letters !== ']') {
            result.push(letters)
        } else {
            let strpattern = '';
            while(result[result.length - 1] !== '[') {
                strpattern = result.pop() + strpattern;
            }
            result.pop();

            let num = ''
            while (result.length && /\d/.test(result[result.length -1])) {
                num = result.pop()
            }
            result.push(strpattern.repeat(Number(num)))
        }
    }
    return result.join('')
}

console.log('Decode String :', decodeString('3[a]2[bc]'))
console.log('Decode String :', decodeString('3[a2[c]]'))