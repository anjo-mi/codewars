export function findUniq(arr: number[]): number {
  if (arr[0] === arr[1]) return arr.find(el => el !== arr[0]) || NaN;
  return arr[0] === arr[2] ? arr[1] : arr[0];
}
​