const nextSmaller = (nums) => {
    const stack = []
    const result = new Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] < nums[stack[stack.length - 1]]) {
            const pos = stack.pop()
            result[pos] = nums[i]
        }
        stack.push(i)
    }
    return result
}
console.log('next smaller element on given array :', nextSmaller([4, 8, 5, 2, 25]));// [2,5,2,-1,-1]
