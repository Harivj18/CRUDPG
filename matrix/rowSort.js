const sortMatrixByRow = (matrix) => {
    const sorted = matrix.map(row => row.sort((a, b) => a - b));
    return sorted
}
let matrix = [
    [3, 1, 2],
    [9, 5, 6],
    [8, 7, 4]
  ]
console.log('Result of sortMatrixByRow',sortMatrixByRow(matrix));

// [
//     [1, 2, 3],
//     [5, 6, 9],
//     [4, 7, 8]
//   ]
  