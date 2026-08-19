 
export function positiveSum(arr:number[]):number {
  return arr.reduce((a,el) => el > 0 ? a + el : a , 0);
}