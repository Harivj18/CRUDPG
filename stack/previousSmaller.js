const previousSmaller = (nums) => {
    const stack = []
    const result = new Array(nums.length).fill(-1);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
            const top = stack.pop()
            result[top] = nums[i]
        }
        stack.push(i)
    }
    return result
}
console.log('Previous smaller element on given array :', previousSmaller([4, 5, 2, 10, 8]));// [-1, 4, -1, 2, 2]
