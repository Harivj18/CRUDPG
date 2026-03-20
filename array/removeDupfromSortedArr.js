const removeDuplicateFromSortedArray = (nums) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++
            [nums[i], nums[index]] = [nums[index], nums[i]]
        }
    }
    nums.length = index + 1;
    return nums
}
console.log('Result after removing elements from the array :', removeDuplicateFromSortedArray([1, 1, 2]))