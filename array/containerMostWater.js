const containerMostWater = (nums) => {
    let left = 0, right = nums.length - 1;
    let maxArea = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let minHeight = Math.min(nums[left], nums[right]);
        let width = right - left;
        let area = minHeight * width;
        maxArea = Math.max(area , maxArea);
        if (nums[left] < nums[right]) {
            left++;
        } else {
            right--
        }
    }
    return maxArea
}

console.log('result of containerMostWater :', containerMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log('result of containerMostWater :', containerMostWater([1, 1]));
console.log('result of containerMostWater :', containerMostWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
