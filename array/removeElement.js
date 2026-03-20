const removeElements = (nums, target) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            index++
        }
    }
    nums.length = index
    return nums
}
console.log('Array after removing duplicates :', removeElements([3, 2, 2, 3, 3], 3));
console.log('Array after removing duplicates :', removeElements([3, 2, 2, 3], 2));
