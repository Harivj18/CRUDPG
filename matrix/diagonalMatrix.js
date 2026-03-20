const diagonalMatrix = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;
    const result = []

    let row = 0, col = 0, dir = 1;
    while (result.length < m * n) {
        result.push(matrix[row][col]);
        if (dir === 1) {
            if (col === n - 1) {
                row++
                dir = -1
            } else if (row === 0) {
                col++;
                dir = -1
            } else {
                row--
                col++
            }
        } else {
            if (row == m -1) {
                col++
                dir = 1 
            }else if (col === 0) {
                row++
                dir = 1
            } else {
                col--
                row++
            }
        }
    }
    return result
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Result of diagonalMatrix matrix :', diagonalMatrix(matrix));

/*
1. row[0][0]  -> 1
2. row[0][1]  -> 2
3. row[1][0]  -> 4
4. row[2][1]  -> 7
5. row[1][1]  -> 5
6. row[0][2]  -> 6
7. row[1][2]  -> 6
8. row[2][1]  -> 8
9. row[2][2]  -> 9
*/