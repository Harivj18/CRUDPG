const firstLastPos = (nums, target) => {
    const firstElement = (nums, target) => {
        if (nums.length <= 1 && nums[0] === target) {
            return 0
        }

        let left = 0, right = nums.length - 1, firstIndex = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                right = mid - 1;
                firstIndex = mid
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
        return firstIndex;
    }

    const lastElement = (nums, target) => {
        if (nums.length <= 1 && nums[0] === target) {
            return 0
        }

        let left = 0, right = nums.length - 1, lastIndex = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                left = mid + 1;
                lastIndex = mid
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
        return lastIndex
    }
    return [firstElement(nums, target), lastElement(nums, target)]
}
console.log('firstLastPos', firstLastPos([5, 7, 7, 8, 8, 10], 8));
