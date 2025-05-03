 
function xMarksTheSpot(matrix) {
  if (!matrix.length) return [];
  let count = 0;
  const indeces = [];
  for (let i = 0 ; i < matrix.length ; i++){
    if (matrix[i].reduce((a,el) => {
      if (el === 'x') a++;
      return a;
    }, 0) > 1) return []; 
    if (matrix[i].includes('x') && !indeces.length) indeces.push(i,matrix[i].indexOf('x'));
    else if(matrix[i].includes('x') && indeces.length) return [];
  }
  return indeces.length ? indeces : [];
}