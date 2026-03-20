const searchInsertPosition = (nums, target) => {
    let left = 0, right = nums.length - 1;
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
    return left
}
console.log('The Position to insert on array is :', searchInsertPosition([1, 3, 5, 6], 4))
console.log('The Position to insert on array is :', searchInsertPosition([1, 3, 5, 6], 2))
console.log('The Position to insert on array is :', searchInsertPosition([1, 3, 5, 6], 7))