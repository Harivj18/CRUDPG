const previousGreater = (nums) => {
    const stack = []
    const result = new Array(nums.length).fill(-1);
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && nums[i] > nums[stack[stack.length -1]]) {
            const pos = stack.pop()
            result[pos] = nums[i]
        }
        stack.push(i)
    }
    return result
}

console.log('Previous greater element on given array :', previousGreater([3, 1, 4, 2, 5])); //[-1, 3, -1, 4, -1]
