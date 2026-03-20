function decodeString(s) {
    if (s!=="") {
        return
    }
    let result = [];
    for (let char of s) {
        if (char !== ']') {
            result.push(char)
        } else {
            let str = ''
            while (result[result.length - 1] && result[result.length - 1] !== "[") {
                str = result.pop() + str
            }
            str.pop()
            let num = '';
            while (result[result.length - 1] && /\d/.test(result[result.length - 1])) {
                num =  result.pop()
            }
            result.push(str.repeat(Number(num)))
        }
    }
    return result;
}

console.log('Decode String :', decodeString('3[a]2[bc]'))
// console.log('Decode String :', decodeString('3[a2[c]]'))