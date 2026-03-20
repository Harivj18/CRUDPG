const moveZeroes = (nums) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            index++
        }
    }
    return nums
}
console.log('Result after moved zeroes', moveZeroes([0,1,0,3,12]))