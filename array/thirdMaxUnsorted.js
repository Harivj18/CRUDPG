const thirdMax = (nums) => {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            third = second
            second = first
            first = nums[i]
        } else if (nums[i] > second && first !== nums[i]) {
            third = second
            second = nums[i]
        } else {
            third = nums[i]
        }
    }
    return third === -Infinity ? nums?.[0] || 'No Value exist in array' : third 
}
console.log('Third Largest Number :', thirdMax([2, 2, 3, 1 ,4]))
console.log('Third Largest Number :', thirdMax([3, 2, 1, 6, 8]))
console.log('Third Largest Number :', thirdMax([1, 2]))