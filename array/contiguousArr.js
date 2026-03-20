const contiguousArr = (nums) => {
    const map = new Map()
    let sum = 0, max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? - 1: 1;
        if (sum === 0) {
            max = i + 1
        } else if (map.has(sum)) {
            let index = i - map.get(sum)
            if (index > max) {
                max = index
            }
        } else {
            map.set(sum, i)
        }
    }
    return max
}
console.log('Continuous Array result is:', contiguousArr([0, 1]));
console.log('Continuous Array result is:', contiguousArr([0, 1, 0]));
console.log('Continuous Array result is:', contiguousArr([0, 1, 1, 1, 1, 1, 0, 0, 0]));