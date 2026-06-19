 
export function upDownColSort(grid: number[][]): number[][] {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  const sorted = grid.flat(1).sort((a, b) => a - b);
  const result: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));
  let i = 0;
  for (let col = 0; col < cols; col++) {
    const colVals = sorted.slice(i, i + rows);
    if (col % 2 !== 0) colVals.reverse();
    colVals.forEach((val, row) => result[row][col] = val);
    i += rows;
  } 
  return result;
}
​