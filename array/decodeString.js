const decodeString = (str) => {
  let result = []
  for (const char of str) {
    if (char !== ']') {
      result.push(char)
    } else {
      let word = ''
      while (result.length && result[result.length - 1] !== '[') {
        word = result.pop() + word
      }
      result.pop()
      let num = ''
      while (result.length && /\d/.test(result[result.length - 1])) {
        num = result.pop() + num
      }
      result.push(word.repeat(num))
    }
  }
  return result.join('')
}
// console.log('Decode String :', decodeString('3[a]2[bc]'))
console.log('Decode String :', decodeString('3[a2[c]]'))