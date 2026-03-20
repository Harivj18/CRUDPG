const longSubArr = (nums, target) => {
    let sum = 0;
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        let index = i;
        let currentLength = 0;
        while (sum < target) {
            sum += nums[index];
            index++
            currentLength++;
        }
        if (sum === target) {
            maxLength = Math.max(currentLength, maxLength);
        }
        sum = 0;
    }
    return maxLength
}
console.log(longSubArr([1, 2, 3, 0, 3, 2, 1, 4], 6))
console.log(longSubArr([5, 10, 5, 2], 6))