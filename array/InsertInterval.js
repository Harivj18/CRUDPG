const InsertInterval = (nums, newInterval) => {
    let [start, end] = newInterval;
    let i = 0;
    let result = []
    while (i < nums.length && nums[i][1] < start) {
        result.push(nums[i])
        i++
    }
    while (i < nums.length && nums[i][0] <= end) {
        start = Math.min(nums[i][0], start);
        end = Math.max(nums[i][1], end);
        i++
    }
    result.push([start, end])
    while (i < nums.length) {
        result.push(nums[i])
        i++
    }
    return result
}
console.log('Insert Interval', InsertInterval([[1, 3], [6, 9]], [2, 5]));
console.log('Insert Interval', InsertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]));