const sortFrequency = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    let result = [...map.entries()].sort((a,b) => b[1] - a[1])
    return result.flatMap(([val, i]) => new Array(i).fill(val))
}
console.log('Sort Frequency :', sortFrequency([2, 3, 2, 4, 5, 12, 2, 3, 3, 3, 12])); // [3,3,3,3,2,2,2,12,12,4,5]

// most freq comes first, if two element has same frequency place small one first
