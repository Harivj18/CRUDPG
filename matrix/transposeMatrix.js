const matrixTranspose = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = i+1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
]
console.log('Transpose of a matrix', matrixTranspose(matrix));
