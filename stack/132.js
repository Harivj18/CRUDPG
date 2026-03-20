const pattern132 = (nums) => {
    if (nums.length < 3) {
        return false
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] < nums[k] && nums[k] > nums[j]) {
                    return true
                }
            }
        }
    }
    return false
}
console.log('Pattern for 132 :', pattern132([3, 1, 4, 2]));
