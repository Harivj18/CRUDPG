const threeSum = (nums) => {
    if (nums.length < 3) {
        return []
    }
    nums = nums.sort((a,b) => a - b)
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                j++
                k--
            } else if (sum > 0) {
                k--
            } else {
                j++
            }
        }
    }
    return result
}
console.log('Result of Three Sum:', threeSum([-1, 0, 1, 2, -1, -4]))
console.log('Result of Three Sum:', threeSum([0, 1, 1, 0, 0]))
console.log('Result of Three Sum:', threeSum([0, 0, 0]))