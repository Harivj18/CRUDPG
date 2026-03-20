const checkValidFunction = (input) => {
    try {
        new Function(input)
        return true
    } catch (error) {
        return false
    }
}

let case1 = 'const checkValidFunction = () => {return}';
let case2 = 'const checkValidFunction = ( => {return}';
let case3 = 'const checkValidFunction = ()) => {return}';
console.log('Check Valid Function', checkValidFunction(case1));
console.log('Check Valid Function', checkValidFunction(case2));
console.log('Check Valid Function', checkValidFunction(case3));
