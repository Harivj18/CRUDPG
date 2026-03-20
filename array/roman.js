const roman = (nums) => {
    const char = {
        I: 1, V: 5, X: 10,
        L: 50, C: 100,
        D: 500, M: 1000
    }
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let val1 = char[nums[i]]
        let val2 = char[nums[i + 1]];

        if (val1 < val2) {
            result += val2 - val1
            i++
        } else {
            result += val1
        }
    }
    return result
}
console.log('Roman:', roman('VI'));         // 3
console.log('Roman:', roman('CM'));     // 1995
