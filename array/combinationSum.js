const combinationSum = (nums, target) => {
    const result = [];
    const formCombination = (index, formSet, k) => {
        if (k === 0) {
            result.push([...formSet])
            return
        }

        for (let i = index; i < nums.length; i++) {
            if (k < 0) {
                break
            }
            formSet.push(nums[i]);
            formCombination(i, formSet, k - nums[i]);
            formSet.pop()
        }
    }
    formCombination(0, [], target)
    return result
}
console.log('Result of combination sum', combinationSum([2, 3, 6, 7], 7));
