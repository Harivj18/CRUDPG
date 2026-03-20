const removeDuplicates = (nums) => {
    nums = nums.sort((a,b) => a - b)
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++
            [nums[i], nums[index]] = [nums[index], nums[i]]
        }
    }
    nums.length = index + 1
    return nums
}

console.log('Unique numsay Result :', removeDuplicates([1, 2, 2, 3]));
