const thirdMax = (nums) => {
    nums = nums.sort((a,b) => a - b)
    if (nums.length < 3) {
        return nums[0]
    }
    return nums[nums.length - 3]
}
console.log(thirdMax([2, 2, 3, 1, 4, 5]))
console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))