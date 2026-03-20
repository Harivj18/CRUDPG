const minSubArr = (nums, target) => {
    let sum = 0;
    let minLength = Infinity;
    let left = 0, right = 0;
    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left]
            left++
        }
        right++
    }
    return minLength === Infinity ? -1 : minLength
}
console.log('Mininum Size Subarray:', minSubArr([2, 3, 1, 2, 4, 3, 7], 7));
console.log('Mininum Size Subarray:', minSubArr([1, 1, 2], 4));
console.log('Mininum Size Subarray:', minSubArr([1, 1, 1, 1, 1, 1, 1, 1], 11));
