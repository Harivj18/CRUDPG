const optimal132 = (nums) => {
    if (nums.length < 3) {
        return false
    }
    const stack = []
    let k = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < k) {
            return true
        }
        while (stack.length && nums[i] > stack[stack.length - 1]) {
            k = stack.pop()
        }
        stack.push(nums[i])
    }
    return false
}
console.log('Pattern for 132 :', optimal132([3, 1, 4, 2, 6, 7]));
