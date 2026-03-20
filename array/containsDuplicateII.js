const containsDuplicateII = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && map.has(target)) {
            return true
        }
        map.set(nums[i], i)
    }
    return false
}
console.log('Duplicate element exists in array :', containsDuplicateII([1, 2, 3, 4, 3], 1));
console.log('Duplicate element exists in array :', containsDuplicateII([1, 0, 1, 1], 1));
console.log('Duplicate element exists in array :', containsDuplicateII([1, 2, 3, 1, 3, 2], 2));
