 
function pyramid(balls, row = 1) {
  if (balls < row) return row - 1;
  return pyramid(balls - row, row + 1);
}