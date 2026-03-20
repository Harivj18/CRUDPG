const selectionSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]]
    }
    return nums
}

console.log('Array After Sorting :', selectionSort([9, 6, 21, 74, 0, 1]));
