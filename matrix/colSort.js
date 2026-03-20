const sortMatrixByCol = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let col = 0; col < cols; col++) {
        const column = [];

        for (let row = 0; row < rows; row++) {
            column.push(matrix[row][col]);
        }

        column.sort((a, b) => a - b);

        for (let row = 0; row < rows; row++) {
            matrix[row][col] = column[row];
        }
    }
    return matrix
}
let matrix = [
    [3, 1, 2],
    [9, 5, 6],
    [8, 7, 4]
]
console.log('Result of sortMatrixByCol', sortMatrixByCol(matrix));

// [
//     [3, 1, 2],
//     [8, 5, 4],
//     [9, 7, 6]
//   ]
