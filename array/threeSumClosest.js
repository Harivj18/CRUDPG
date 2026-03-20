const threeSumClosest = (nums, target) => {
    if (nums.length < 3) {
        return []
    }
    nums = nums.sort((a,b) => a - b);
    let result = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                result = sum
            }
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum
            } else if (sum > target) {
                k--
            } else {
                j++
            }
        }
    }
    return result
}
console.log('Result of Closest threeSum :', threeSumClosest([-1, 2, 1, -4], 1));
console.log('Result of Closest threeSum :', threeSumClosest([0, 0, 0, 3], 2));
