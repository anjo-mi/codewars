 
export function squareOrSquareRoot(arr:number[]) : number[] {
  return arr.map(n => Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n*n);
}