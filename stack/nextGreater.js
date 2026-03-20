const nextGreater = (nums) => {
    const stack = []
    const result = new Array(nums.length).fill(-1)
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
            const pos = stack.pop()
            result[pos] = nums[i]
        }
        stack.push(i)
    }
    return result
}
console.log('Next greater element of array :', nextGreater([3, 1, 4, 2, 5])); //[4,4,5,5,-1]
console.log('Next greater element of array :', nextGreater([2, 1, 4, 3, 5])); //[4,4,5,5,-1]
