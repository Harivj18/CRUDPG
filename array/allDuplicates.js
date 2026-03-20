const allDuplicatesArr = (nums) => {
    const map = new Map();
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            result.push(nums[i])
        }
        map.set(nums[i], i)
    }
    return result
}
console.log('Duplicates in the array', allDuplicatesArr([4, 3, 2, 7, 8, 2, 3, 1, 8]));
console.log('Duplicates in the array', allDuplicatesArr([1, 1, 2]));
console.log('Duplicates in the array', allDuplicatesArr([1]));

const allDuplicates = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
       map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    return [...map.entries()]
    .filter(([number, count]) => count > 1)
    .map(([number]) => number)
}
console.log('Duplicates in the array', allDuplicates([4, 3, 2, 7, 8, 2, 3, 1, 8]));
console.log('Duplicates in the array', allDuplicates([1, 1, 2]));
console.log('Duplicates in the array', allDuplicates([1]));
