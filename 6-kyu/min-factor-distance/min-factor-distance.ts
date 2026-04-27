 
export function minDistance(n: number): number {
  let minDist = Infinity;
  const factors = [];
  for (let i = 1; i <= Math.sqrt(n) ; i++){
    if (!(n % i)){
      const div = n / i;
      if (div !== i) factors.push(div,i);
      else factors.push(i);
    }
  }
  factors.sort((a,b) => a-b);
  for (let i = 0, j = 1; j < factors.length ; i++, j++){
    minDist = Math.min(minDist, (factors[j] - factors[i]));
  }
  return minDist;
  throw new Error("Method or operation is not implemented");
}