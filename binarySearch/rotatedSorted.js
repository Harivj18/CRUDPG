const rotatedSortedArrI = (nums, target) => {
    if (nums.length <= 1 && nums?.[0] === target) {
        return 0
    }
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        }
        if (nums[left] < nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return left
}
console.log('rotatedSortedArrI', rotatedSortedArrI([4, 5, 6, 7, 0, 1, 2], 0));
