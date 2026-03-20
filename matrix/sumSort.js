const sumMatrixSort = (matrix) => {
    return matrix.sort((a, b) => {
        const sumA = a.reduce((x, y) => x + y, 0);
        const sumB = b.reduce((x, y) => x + y, 0);
        return sumA - sumB;
    });
}
let matrix = [
    [3, 1, 2],
    [9, 5, 6],
    [8, 7, 4]
]
console.log('Result of sortMatrixByRow', sumMatrixSort(matrix));
