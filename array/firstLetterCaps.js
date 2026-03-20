const firstLetterCaps = (input) => {
    input = input.split(' ')
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1)
    }
    return input.join(' ')
}
console.log('Convert the First Letter As Capital :', firstLetterCaps('hello i am hariharan'));
