const sortMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const flat = matrix.flat().sort((a, b) => a - b);

    let idx = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = flat[idx++];
        }
    }
    return matrix
}
let matrix = [
    [3, 1, 2],
    [9, 5, 6],
    [8, 7, 4]
]
console.log('Result of sortMatrix', sortMatrix(matrix));

// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]
