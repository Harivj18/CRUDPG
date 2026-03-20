const spiralMatrix = (matrix) => {
    let left = 0, top = 0, 
    right = matrix[0].length - 1, bottom = matrix.length - 1;
    const result = []
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
        top++
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        right--
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++
        }
    }
    return result
}
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

console.log('Result of spiral matrix :', spiralMatrix(matrix));
