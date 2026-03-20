const subArrEqualsK = (nums, k) => {
    const map = new Map()
    map.set(0,1);
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map.has(sum - k)) {
            count += map.get(sum -k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
}
console.log('SubArray result is:', subArrEqualsK([1, 1, 1, 1], 2));
console.log('SubArray result is:', subArrEqualsK([1, 2, 3, 4, 2], 3));
