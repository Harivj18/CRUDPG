const maxSubArray = (nums) => {
    let maxCurrent = nums[0]
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(maxCurrent, maxCurrent + nums[i]);
        maxGlobal = Math.max(maxCurrent, maxGlobal);
    }
    return maxGlobal
}
console.log('Maximum Subarray :', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log('Maximum Subarray :', maxSubArray([1, 5, 10]));
console.log('Maximum Subarray :', maxSubArray([5, 4, -1, 7, 8]));
