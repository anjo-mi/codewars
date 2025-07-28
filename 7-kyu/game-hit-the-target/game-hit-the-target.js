 
const solution = mtrx => {
  let xc = null;
  let ac = null;
  for (let i = 0 ; i < mtrx.length ; i++){
    for (let j = 0 ; j < mtrx.length ; j++){
      if (mtrx[i][j] === 'x') xc = [i,j];
      if (mtrx[i][j] === '>') ac = [i,j];
    }
  }
  return xc[0] === ac[0] && ac[1] < xc[1];
}