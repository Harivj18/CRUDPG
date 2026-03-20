const kthLargest = (matrix, k) => {
    const n = matrix.length;
    let left = matrix[0][0], right = matrix[n - 1][n - 1];
    let newKth = n * n - k + 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const count = findCount(matrix, mid, n);

        if (count < newKth) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

const findCount = (matrix, mid, n) => {
    let count = 0, row = n - 1, col = 0;
    while (row >= 0 && col < n) {
        if (matrix[row][col] <= mid) {
            count += row + 1;
            col++
        } else {
            row--
        }
    }
    return count
}
let matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
]
console.log('k th smallest element', kthLargest(matrix, 2));

const kthLargestArr = (arr, k) => {
    return arr[arr.length - k]
}
console.log('Kth Largest element in the array', kthLargestArr([1, 2, 3, 4, 5, 6, 7, 8], 2));
