const matrixZero = (matrix) => {
    const row = new Map();
    const col = new Map();

    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                row.set(i);
                col.set(j)
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row.has(i) || col.has(j)) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
}
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
console.log('Zero Matrix :', matrixZero(matrix));
