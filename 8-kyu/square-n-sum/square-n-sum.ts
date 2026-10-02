 
export function squareSum(nums: number[]): number {
  return nums.reduce((total,n) => total += n*n, 0);
}