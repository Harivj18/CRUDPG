const slidingWindowBrute = (nums, k) => {
    const result = []
    const n = nums.length

    for (let i = 0; i <= n - k; i++) {
        let max = nums[i]
        for (let j = 1; j < k; j++) {
            if (nums[i+j] > max) {
                max = nums[i + j]
            }
        }
        result.push(max)
    }
    return result
}

console.log('Sliding window result', slidingWindowBrute([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
