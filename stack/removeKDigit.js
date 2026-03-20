const removeKDigit = (nums, k) => {
    const stack = []
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && stack[stack.length - 1] > nums[i] && k > 0) {
            stack.pop()
            k--
        }
        stack.push(nums[i])
    }
    if (stack.length && +stack[0] === 0) {
        stack.shift()
    }
    return stack.join('');
}
console.log('Remove K digit :', removeKDigit("1432219", 3)); // 1219
console.log('Remove K digit :', removeKDigit("10200", 1)); // 200
