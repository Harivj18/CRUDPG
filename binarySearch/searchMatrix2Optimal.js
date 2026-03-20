const searchMatrix2 = (matrix, target) => {
  const m = matrix.length
  const n = matrix[0].length

  let left = 0, right = n - 1;

  while (left <= m && right >= 0) {
    if (matrix[left][right] === target) {
      return [left, right]
    } else if (matrix[left][right] > target) {
      right --;
    } else {
      left ++
    }
  }
  return -1
}

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
console.log('Search Matrix : ', searchMatrix2(matrix, 15));
