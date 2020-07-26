/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid, data = null) {
    if (data === null) {
        data = { remaining: 0 };
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) data.position = [i, j];
                if (grid[i][j] === 0) data.remaining++;
            }
        }
    }

    let [i, j] = data.position;
    let count = 0;

    [
        [i-1, j],
        [i+1, j],
        [i, j-1],
        [i, j+1]
    ].filter(([x, y]) => x >= 0 && x < grid.length)
     .filter(([x, y]) => y >= 0 && y < grid[0].length)
     .forEach(([x, y]) => {
        if (grid[x][y] === 2 && data.remaining === 0) {
            count++;
        }
        if (grid[x][y] === 0) {
            grid[x][y] = -1;
            count += uniquePathsIII(grid, { position: [x, y], remaining: data.remaining - 1 });
            grid[x][y] = 0;
        }
    });

    return count;
};
