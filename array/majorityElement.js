const majorityElement = (nums) =>  {
    const map = new Map();
    const majority = Math.floor((nums.length) / 2);
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        if (map.get(nums[i]) > majority) {
            return nums[i]
        }
    }
    return -1
}
console.log('Majority element in the given array', majorityElement([3, 2, 3])); //3
console.log('Majority element in the given array', majorityElement([2, 2, 1, 1, 1, 1, 1, 2, 2])); //2
