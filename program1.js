const getTotalIsles = function (grid) {
  let islandCount = 0;
  let visited = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));

  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W' || visited[i][j]) {
      return;
    }
    visited[i][j] = true;
    dfs(i - 1, j); // up
    dfs(i + 1, j); // down
    dfs(i, j - 1); // left
    dfs(i, j + 1); // right
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'L' && !visited[i][j]) {
        dfs(i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;