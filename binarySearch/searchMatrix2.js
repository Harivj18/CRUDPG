const searchMatrix2 = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === target) {
        return [i, j]
      }
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
