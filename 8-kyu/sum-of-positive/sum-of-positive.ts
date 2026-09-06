export function positiveSum(arr:number[]):number {
  return arr.reduce((a,el) => a += el > 0 ? el : 0 , 0);
}