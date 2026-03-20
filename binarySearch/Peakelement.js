const findPeak = (nums) => {
    const result = []
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) {
            result.push(nums[i])
        }
    }
    return result
}
console.log('Find peak', findPeak([1, 2, 1, 3, 5, 6, 4]));
