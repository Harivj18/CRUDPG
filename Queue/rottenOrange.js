const rottenOrange = (grid) => {
    const row = grid.length
    const col = grid[0].length
    let fresh = 0;
    const queue = []
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j])
            } else if (grid[i][j] === 1) {
                fresh++
            }
        }
    }

    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let mins = 0;
    while (queue.length && fresh > 0) {
        const [r, c] = queue.shift()
        for (const [dr, dc] of dir) {
            const nr = r + dr
            const nc = c + dc

            if (nr >= 0 && nr < row && nc >= 0 && nc < col && grid[nr][nc] === 1) {
                grid[nr][nc] = 2
                fresh --
                queue.push([nr, nc])
                mins++
            }
        }
    }

    return fresh === 0 ? mins : -1;
}

console.log('Orange Rotten :', rottenOrange(
    [
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1]
    ]
));
