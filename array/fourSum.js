const fourSum = (nums, target) => {
    if (nums.length < 4) {
        return []
    }
    nums = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i -1]) {
            continue
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j -1]) {
                continue
            }
            let k = j + 1;
            let l = nums.length - 1;
            while (k < l) {
                let sum = nums[i] + nums[j] + nums[k] + nums[l];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[k], nums[l]]);
                    while (nums[k] === nums[k+1]) {
                        k++
                    }
                    while (nums[l] === nums[l-1]) {
                        l--
                    }
                    k++;
                    l--;
                } else if (sum > target) {
                    l--
                } else {
                    k++
                }
            }
        }
    }
    return result
}

console.log('Result of fourSum', fourSum([1, 0, -1, 0, -2, 2], 0))
console.log('Result of fourSum', fourSum([2, 2, 2, 2, 2], 8))