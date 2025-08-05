 
function validateSudoku(board) {
  const valid = new Set('123456789'.split('').map(Number));
  const checkRows = b => {
    for (let r = 0 ; r < b.length ; r++){
      const seen = new Set();
      for (let c = 0 ; c < b[r].length ; c++){
        if (seen.has(b[r][c]) || !valid.has(+b[r][c])) return false;
        else seen.add(b[r][c]);
      }
    }
    return true;
  }
  
  const checkCols = b => {
    for (let c = 0 ; c < b.length ; c++){
      const seen = new Set();
      for (let r = 0 ; r < b.length ; r++){
        if (seen.has(b[r][c]) || !valid.has(+b[r][c])) return false;
        else seen.add(b[r][c]);
      }
    }
    return true;
  }
  
  const checkSquares = (b) => {
    for (let j = 0 ; j <= 6 ; j+= 3){
      for (let i = 0; i <= 6; i += 3) {
        const set = new Set();
        for (let c = i; c < i + 3; c++) {
          for (let r = j ; r < j+3 ; r++) {
              if (set.has(b[r][c]) || !valid.has(+b[r][c])) return false;
              else set.add(b[r][c]);
          }
        }
      }
    }
    return true;
  }
  
  return checkRows(board) && checkCols(board) && checkSquares(board);
}