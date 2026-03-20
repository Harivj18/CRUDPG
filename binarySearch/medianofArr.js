const median = (nums) => {
    const mid = Math.floor(nums.length / 2);
    if (nums.length % 2 !== 0) {
        return [nums[mid]]
    } else {
        return [(nums[mid - 1] + nums[mid]) / 2]
    }
}

console.log('Median of sorted array', median([1,2,3,4]));
console.log('Median of sorted array', median([1,2,3]));
