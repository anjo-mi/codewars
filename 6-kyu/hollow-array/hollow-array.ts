 
export function isHollow(x:number[]): boolean {
  let i = 0, j = x.length - 1;
  let inside = false;
  let zeroes = 0;
  while (i < j){
    if ((x[i] !== 0 && x[j] === 0) || (x[j] !== 0 && x[i] === 0)) return false;
    if (inside){
      if (x[i] !== 0 || x[j] !== 0) return false;
      zeroes += 2;
    }else{
      if (x[i] === 0 && x[j] === 0){
        inside = true;
        zeroes += 2;
      }
      else if (x[i] === 0 || x[j] === 0) return false;
    }
    i++;
    j--;
  }
  if (!inside) return false;
  if (i === j){
    if (x[i] === 0) zeroes++;
    else return false;
  }
  return zeroes >= 3;
}