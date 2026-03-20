const plusOne = (nums) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + 1 === 10) {
            nums[i] = 0
        } else {
            nums[i] = nums[i] + 1
            return nums
        }
    }
    nums = [1, ...nums]
    return nums
}
console.log('Result after adding Plus One :', plusOne([1, 2, 3]))
console.log('Result after adding Plus One :', plusOne([4, 3, 2, 1]))
console.log('Result after adding Plus One :', plusOne([9, 0, 9]))
console.log('Result after adding Plus One :', plusOne([9, 9, 9]))