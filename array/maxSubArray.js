const maxSubArray = (nums) => {
    let sum = 0
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) {
            sum = 0
        }
        sum += nums[i]
        max = Math.max(sum, max)
    }
    return max
}
console.log('Maximum Subarray :', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log('Maximum Subarray :', maxSubArray([1, 5, 10]));
console.log('Maximum Subarray :', maxSubArray([5, 4, -1, 7, 8]));
