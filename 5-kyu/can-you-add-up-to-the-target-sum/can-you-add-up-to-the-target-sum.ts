 
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
​
export function getNumbers(nums: number[], tar: number): number[] {
  if (tar <= 0) return [];
  const g = nums.reduce((acc, n) => gcd(acc, n));
  if (tar % g !== 0) return [];
  function backtrack(remaining: number, start: number): number[] | null {
    if (remaining === 0) return [];
    if (remaining < nums[nums.length - 1]) return null;
    for (let i = start; i < nums.length; i++) {
      if (nums[i] <= remaining) {
        const result = backtrack(remaining - nums[i], i);
        if (result !== null) return [nums[i], ...result];
      }
    }
    return null;
  }
  return backtrack(tar, 0) || [];
}