const findPeak = (nums) => {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return nums[left]
}

console.log('Find peak', findPeak([1, 2, 1, 3, 5, 6, 4]));
