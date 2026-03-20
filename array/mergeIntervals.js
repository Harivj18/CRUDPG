const mergeInterval = (nums) => {
    nums = nums.sort((a,b) => a[0] - b[0]);
    let sortedArr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let currentArr = nums[i];
        let mergeArr = sortedArr[sortedArr.length - 1];
        if (mergeArr[1] >= currentArr[0]) {
            mergeArr[1] = Math.max(mergeArr[1], currentArr[1])
        } else {
            sortedArr.push(nums[i])
        }
    }
    return sortedArr
}
console.log('Insert Interval', mergeInterval([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log('Insert Interval', mergeInterval([[1, 4], [4, 5]]))