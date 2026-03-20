const maxProductSubArr = (nums) => {
    let max = nums[0];
    let initialMin = nums[0];
    let initialMax = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const currentMin = Math.min(nums[i], nums[i] * initialMin, nums[i] * initialMax);
        const currentMax = Math.max(nums[i], nums[i] * initialMin, nums[i] * initialMax);

        initialMin = currentMin;
        initialMax = currentMax;

        max = Math.max(initialMax, max)
    }
    return max
}
console.log('Max Product result from subarray', maxProductSubArr([2, 3, -2, 4, 4])); // 16 [4,4]
console.log('Max Product result from subarray', maxProductSubArr([-2, 0, -1])); // 0

