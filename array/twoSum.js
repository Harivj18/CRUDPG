const twoSum = (nums, k) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const sum = k - nums[i];
        if (map.has(sum)) {
            return [nums[i], sum]
        }
        map.set(nums[i], i)
    }
    return - 1
}

console.log('Result of Twosum :', twoSum([2, 7, 11, 15], 9))
console.log('Result of Twosum :', twoSum([3, 2, 4], 6))
console.log('Result of Twosum :', twoSum([3, 3], 6))
console.log('Result of Twosum :', twoSum([3, 3, 3], 16))
