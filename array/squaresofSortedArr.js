const squaresOfSortedArr = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i]
    }
    return nums.sort((a,b) => a - b)
}

console.log('Result of Squared Sorted Array', squaresOfSortedArr([-4, -1, 0, 3, 10]))
console.log('Result of Squared Sorted Array', squaresOfSortedArr([-7, -3, 2, 3, 11]))