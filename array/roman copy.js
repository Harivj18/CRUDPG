const roman = (str) => {
    let roman = {
        'I': 1, 'V': 5, 'X':10,
        'L': 50, 'C': 100,
        'D': 500, 'M': 1000
    }
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'I') {
            result += 1
            continue
        }
        let current = roman[str[i]];
        let next = roman[str[i+1]]

        if (next && current < next) {
            result = next - current;
            i++
        } else {
            result += current
        }
    }
    return result;
};

console.log('Roman:', roman('IV'));         // 3
console.log('Roman:', roman('CM'));     // 1995
