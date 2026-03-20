const splitArr = (nums) => {
    let result = []
    let currentResult = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            currentResult.push(nums[i])
        } else {
            result.push(currentResult)
            currentResult = []
        }
    }
    if (currentResult.length) {
        result.push(currentResult)
    }
    return result
}

console.log('Split array :', splitArr([1, 2, 3, null, 4, 5, null, 6, 7]));
