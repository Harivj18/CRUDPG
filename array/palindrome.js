const palindrome = (str) => {
    str = str.toLowerCase()
    let newStr = str.split('').reverse().join('')
    return str === newStr
}
console.log('Palindrome :', palindrome('hari'));
console.log('Palindrome :', palindrome('Malayalam'));
