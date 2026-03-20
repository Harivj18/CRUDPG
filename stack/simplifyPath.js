const simplifyPath = (str) => {
    str = str.split('/')
    const stack = []    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '' || str[i] === '.') {
            continue
        }
        if (str[i] === '..') {
            stack.pop()
        } else {
            stack.push(str[i])
        }
    }
    return '/' + stack.join('/')
}
console.log('Simplified path result :', simplifyPath('/a/./b/../../c/')); // /c
console.log('Simplified path result :', simplifyPath('/../')); // /
console.log('Simplified path result :', simplifyPath("/home//foo/")); // /home/foo
