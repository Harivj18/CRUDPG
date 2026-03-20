const largestNumber = (nums) => {
    nums = nums.map(String);
    nums = nums.sort((a, b) => (b + a) - (a + b))
    return nums.join('')
}
console.log('Largest Number from given array', largestNumber([10, 2])); //210
console.log('Largest Number from given array', largestNumber([3, 30, 34, 5, 9])); //9534330


