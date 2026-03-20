const findLeader = (nums) => {
    let max = -Infinity;
    const result = []
    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] > max) {
            max = nums[i]
            result.push(nums[i])
        }
    }
    return result
}

console.log('findLeader', findLeader([16, 17, 4, 3, 5, 2]));
