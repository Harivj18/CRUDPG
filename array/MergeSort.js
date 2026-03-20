const mergeSort = (nums) => {
    if (nums.length <= 1) {
        return nums
    }
    const mid = Math.floor((nums.length) / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));

    return mergeArray(left, right)
}

const mergeArray = (left, right) => {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    while (i < left.length) {
        result.push(left[i])
        i++
    }
    while (j < right.length) {
        result.push(right[j])
        j++
    }
    return result
}

console.log('Merge Sort:', mergeSort([3, 8, 19, 2, 1, 6, 7]));
