const containsDuplicate = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return nums[i]
        }
        map.set(nums[i], i)
    }
    return null
}
console.log('Is Duplicate Element Exists:', containsDuplicate([1, 2, 3, 1]));
console.log('Is Duplicate Element Exists:', containsDuplicate([1, 2]));
