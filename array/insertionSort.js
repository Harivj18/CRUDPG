const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let val = nums[i]
        let j = i - 1;
        while (j >= 0 && nums[j] > val) {
            nums[j + 1] = nums[j];
            j--
        }
        nums[j + 1] = val
    }
    return nums
}

console.log('insertion Sort:', insertionSort([2, 4, 1, 3, 5, 9, 6]));
console.log('insertion Sort:', insertionSort([8, 3, 5, 2]));
