const decodeString = (str) => {
  const stack = []
  const result = []
  for (const element of str) {
    if (element !== ']') {
      stack.push(element)      
    } else {
      let input = ''
      while (stack.length && stack[stack.length - 1] !== '[') {
        input = stack.pop() + input
      }
      stack.pop()
      let num = '';
      while (stack.length && /\d/.test(stack[stack.length - 1])) {
        num = stack.pop()
      }      
      result.push(input.repeat(num))
    }
  }
  return result.join('')
}
console.log('Decode String :', decodeString('3[a]2[bc]'))
// console.log('Decode String :', decodeString('3[a2[c]]'))