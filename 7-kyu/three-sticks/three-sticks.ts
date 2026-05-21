 
export function maxlen(l1: number, l2: number): number {
  const max = Math.max(l1,l2);
  const min = Math.min(l1,l2);
  if (max > min * 3) return max / 3;
  if (max <= min * 3 && max >= min * 2) return min;
  return max / 2;
}