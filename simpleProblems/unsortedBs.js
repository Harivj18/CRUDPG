const binarySearch = (nums, target) => {
    if (nums.length < 0) {
        return 'No Result Found'
    }
    nums = nums.sort((a,b) => a - b);
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor((start+ end)/2);
        if (nums[mid] === target) {
            return `${target} Found on array`
        } else if (nums[mid] > target) {
            end = mid - 1; 
        } else {
            start = mid + 1;
        }
    }
    return 'Target Not Found on the given Array';
}

console.log('Binary Search Unsorted Result:', binarySearch([1,13,15,7,9], 7));
