function kthSmallest(matrix, k) {
  const n = matrix.length
  let left = matrix[0][0], right = matrix[n - 1][n - 1];
  
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    const count = findCount(matrix, mid, n);

    if (count < k) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}


const findCount = (matrix, mid, n) => {
  let row = n - 1;
  let col = 0;
  let count = 0;
  while (row >= 0 && col < n) {
    if (matrix[row][col] <= mid) {
      count += row + 1;
      col++
    } else {
      row--
    }
  }
  return count;
}
let matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
]
console.log('k th smallest element', kthSmallest(matrix, 8));

const kthsmallElement = (nums, k) => {
  nums = nums.sort((a, b) => a - b)
  return nums[k - 1]
}
console.log('k th smallest element', kthsmallElement([1, 52, 13, 24, 5, 16, 6], 2));
