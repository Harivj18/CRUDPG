const findLeader = (nums) => {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        let isLeader = true;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                isLeader = false
                break
            }
        }
        if (isLeader) {
            result.push(nums[i])
        }
    }
    return result
}

console.log('findLeader', findLeader([16, 17, 4, 3, 5, 2]));
