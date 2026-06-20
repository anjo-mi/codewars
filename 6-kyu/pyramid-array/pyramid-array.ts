 
export function pyramid(n: number) : Array<Array<Number>> {
  const res:number[][] = [];
  while (n > 0){
    const insert:number[] = Array(n).fill(1);    
    res[n-1] = insert;
    n--;
  }
  return res;
}