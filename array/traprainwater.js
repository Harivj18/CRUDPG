const rainwater = (nums) => {
    let left = 0, right = nums.length - 1, leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (nums[left] < nums[right]) {
            if (nums[left] > leftMax) {
                leftMax = nums[left]
            } else {
                water += leftMax - nums[left]; 
            }
           left++
        } else {
            if (nums[right] > rightMax) {
                rightMax = nums[right]
            } else {
                water += rightMax - nums[right]
            }
            right--
        }
    }
    return water
}
console.log(rainwater([4, 2, 0, 3, 2, 5]))