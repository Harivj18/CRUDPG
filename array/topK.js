const topK = (nums, k) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    let result = [...map.entries()].sort((a,b) => b[1] - a[1]);
    return result.map((i) => i[0]).slice(0, k)
}

console.log('Top K Frequent Elements', topK([1, 1, 1, 2, 2, 3], 2));
console.log('Top K Frequent Elements', topK([1], 1));
console.log('Top K Frequent Elements', topK([2, 3, 4, 1, 4, 2, 1, 2, 4, 5, 5, 6, 6, 6, 6, 6, 5], 4));
