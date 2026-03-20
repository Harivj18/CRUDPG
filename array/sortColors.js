const sortColors = (nums) => {
    let start = 0, mid = 0, end = nums.length -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[mid] === 0) {
            [nums[start], nums[mid]] = [nums[mid], nums[start]]
            start++
            mid++
        } else if (nums[mid] === 1) {
            mid ++
        } else {
            [nums[mid], nums[end]] = [nums[end], nums[mid]]
            end --
        }
    }
    return nums
}
console.log('Sorted colors:', sortColors([2, 0, 2, 1, 1, 0]));
console.log('Sorted colors:', sortColors([2, 0, 1]));
