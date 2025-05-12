 
function gridIndex(grid, ind) {
  const code = ind.reduce((a,el) => {
    const levelOfGrid = Math.floor((el - 1) / grid.length);
    const index = ((el-1) % grid.length);
    a += grid[levelOfGrid][index];
    return a;
  }, '');
  return code;
}