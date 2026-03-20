const bubbleSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }
    return nums
}

console.log('Array after Sorting', bubbleSort([8, 4, 3, 2, 9, 20]))
console.log('Array after Sorting', bubbleSort(['hari', 'habar', 'karthi', 'kalai', 'murali', 'arun']))