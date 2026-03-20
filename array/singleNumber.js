const singleNumber = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.delete(nums[i])
        } else {
            map.set(nums[i], i)
        }
    }
    return [...map.entries()].map((i) => i[0])
}
console.log('Single Number in the Array', singleNumber([2, 2, 1]));
console.log('Single Number in the Array', singleNumber([4, 1, 2, 1, 2]));
console.log('Single Number in the Array', singleNumber([1]));
