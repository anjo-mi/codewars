 
export const isSorted = (nums:number[]):boolean => {
  let min = -Infinity;
  for (let i = 0 ; i < nums.length ; i++){
    if (nums[i] < min) return false;
    min = nums[i];
  }
  return true;
}
​
export function thanosSort(arr: number[]): number {
  if (!arr.length) return 0;
  if (isSorted(arr)) return arr.length;
  const mid = Math.ceil(arr.length / 2);
  return Math.max(
    thanosSort(arr.slice(0,mid)),
    thanosSort(arr.slice(mid))
  );
}
​