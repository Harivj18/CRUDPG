const binarySearch = (num, target) => {
    if (num.length < 0) {
        return "No result Found"
    }
    num = num.sort((a,b) => a - b);
    let start = 0;
    let end = num.length - 1;
    while (start <= end) {
        const mid = Math.floor((start+end)/2);
        if (num[mid] === target) {
            return 'Target Found on the array'
        } else if (num[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return "Target Not found on array"
}

console.log('Binary search result:', binarySearch([15, 5, 3, 1, 2], 25));
