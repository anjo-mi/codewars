 
function diagonal(matrix){
  let princ = [];
  let secon = [];
  for (let i = 0 ; i < matrix.length ; i++){
    princ.push(matrix[i][i]);
  }
  let i = matrix.length - 1;
  matrix.forEach(el => {
    secon.push(el[i]);
    i--;
  })
  princ = princ.reduce((a,el) => a + el, 0);
  secon = secon.reduce((a,el) => a + el, 0);
  return princ > secon 
          ? 'Principal Diagonal win!' 
        :secon > princ 
          ? 'Secondary Diagonal win!' 
          : 'Draw!'
}
​