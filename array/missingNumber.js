const missingNumber = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
    return nums.length
}
const missingNumber1 = (nums) => {
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        res += i;
        res -= nums[i]
    }
    return res
}
console.log('Missing Number :', missingNumber([0, 3, 1]));
console.log('Missing Number :', missingNumber([0, 1]));
console.log('Missing Number :', missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log('--------------------------------------------------------------');

console.log('Missing Number :', missingNumber1([0, 3, 1]));
console.log('Missing Number :', missingNumber1([0, 1]));
console.log('Missing Number :', missingNumber1([9, 6, 4, 2, 3, 5, 7, 0, 1]));