const calcSpan = (nums) => {
    const stack = []
    const result = new Array(nums.length).fill(1);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const position = stack.pop()
            result[position] = position - i
        }
        stack.push(i)
    }
    return result
}
console.log('stock span calculated :', calcSpan([100, 80, 60, 70, 60, 75, 85])); // [1,1,1,2,1,4,6]

const calcSpan1 = (nums) => {
    const stack = []
    const result = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
            stack.pop()
        }
        if (stack.length) {
            result[i] = i - stack[stack.length - 1]
        }
        stack.push(i)
    }
    return result
}

console.log('stock span calculated :', calcSpan1([100, 80, 60, 70, 60, 75, 85])); // [1,1,1,2,1,4,6]
