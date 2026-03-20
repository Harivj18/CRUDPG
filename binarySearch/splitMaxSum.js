const splitMax = (nums, k) => {
    if (nums.length < 2) {
        return []
    }
    let left = Math.max(...nums);
    let right = nums.reduce((a,b) => a + b, 0);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const max = splitArr(nums, mid, k)
        if (!max) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}
const splitArr = (nums, max, k) => {
    let count = 1;
    let currentSum = 0;
    for (const num of nums) {
        if (currentSum + num > max) {
            currentSum = num
            count++
        } else {
            currentSum +=num
        }
    }
    return count <= k
}
console.log('Split largest max sum', splitMax([7, 2, 5, 10, 8], 2));
