const nextGreaterCircularBrute = (nums) => {
    const result = new Array(nums.length).fill(-1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            const index = (i + j) % nums.length
            if (nums[index] > nums[i]) {
                result[i] = nums[index]
                break
            }
        }
    }
    return result
}
console.log('Next greater element of array :', nextGreaterCircularBrute([1, 3, 4, 2])); // [3,4,-1,3]
console.log('Next greater element of array :', nextGreaterCircularBrute([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
