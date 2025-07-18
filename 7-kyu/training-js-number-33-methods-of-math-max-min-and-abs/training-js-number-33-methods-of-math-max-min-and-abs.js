 
function maxMin(n1,n2){
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < n1.length ; i++){
    const diff = Math.abs(n1[i] - n2[i]);
    if (diff > max) max = diff;
    if (diff < min) min = diff;
  }
  return [max,min];
}