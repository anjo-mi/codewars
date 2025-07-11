 
function maxAndMin(a,b){
  let max = -Infinity;
  let min = Infinity;
  for (const num of a){
    for (const n of b){
      const diff = Math.abs(num - n);
      if (diff > max) max = diff;
      if (diff < min) min = diff;
    }
  }
  return [max,min]
}