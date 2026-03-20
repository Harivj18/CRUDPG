const asteroid = (nums) => {
    const stack = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            stack.push(nums[i])
        } else {
            while (stack.length && stack[stack.length - 1] < Math.abs(nums[i])) {
                stack.pop()
            }
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(nums[i])
            }
            if (stack[stack.length - 1] === Math.abs(nums[i])) {
                stack.pop()
            }
        }
    }
    return stack
}
console.log('Asteroid collision :', asteroid([5, 10, -5]));
