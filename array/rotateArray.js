const swapElements = (start, end, nums) => {
    for (let i = start; i < end; i++) {
        [nums[i], nums[end]] = [nums[end], nums[i]]
        end--
    }
    return nums
}

const rotateLeftArray = (nums, k) => {
    swapElements(0, k - 1, nums);
    swapElements(k, nums.length - 1, nums)
    swapElements(0, nums.length - 1, nums)
    return nums
}

const rotateRightArray = (nums, k) => {
    swapElements(0, nums.length - 1, nums)
    swapElements(0, k - 1, nums)
    swapElements(k, nums.length - 1, nums)
    return nums
}

console.log('Right array :', rotateRightArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log('Right array :', rotateRightArray([-1, -100, 3, 99], 2));

console.log('Left array :', rotateLeftArray([1, 2, 3, 4, 5, 6, 7], 1));
console.log('Left array :', rotateLeftArray([-1, -100, 3, 99], 2));