 
export function pyramid(n: number) : Array<Array<Number>> {
  const res:number[][] = [];
  while (n > 0) res[n-1] = Array(n--).fill(1);
  return res;
}