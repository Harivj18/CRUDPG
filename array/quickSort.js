const QuickSort = (nums) => {
    if (nums.length <= 1) {
        return nums
    }
    const left = [];
    const right = [];
    let pivot = nums[nums.length - 1];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return [...QuickSort(left), pivot ,...QuickSort(right)]

}

console.log('Merge Sort:', QuickSort([9, 10, 2, 4, 1, 5, 6]));
