const binarySearch = (nums, target) => {
    let left = 0, right = nums.length -1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}
console.log('Binary Search Result', binarySearch([1, 5, 7, 8, 9, 10], 9))
console.log('Binary Search Result', binarySearch([1, 5, 7, 8, 9, 10], 101))