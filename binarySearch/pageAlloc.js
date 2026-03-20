const pageAlloc = (pages, k) => {
    if (pages.length < k) {
        return []
    }
    let left = Math.max(...pages);
    let right = pages.reduce((a, b) => a + b, 0);
    while (left < right) {
        const mid = Math.floor((left + right) /2);
        const count = splitPages(pages, k, mid)
        if (count) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

const splitPages = (nums, k, max) => {
    let count = 1;
    let currentSum = 0;
    for (const num of nums) {
        if (currentSum + num > max) {
            currentSum = num
            count ++;
            if (count > k) {
                return false
            }
        } else {
            currentSum += num
        }
    }
    return true
}

console.log('Page allocation', pageAlloc([12, 34, 67, 90], 2));
