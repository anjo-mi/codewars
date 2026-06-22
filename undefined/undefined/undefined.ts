 
export const countUniqueChars = (str:string):number => new Set<string>(str).size;
​
export function longestSubstringWithKDistinct(s: string, k: number,i:number=0,j:number=s.length): number {
  if (i >= j) return 0;
  if (countUniqueChars(s.slice(i,j)) === k) return j-i;
  return Math.max(
    longestSubstringWithKDistinct(s,k,i+1,j),
    longestSubstringWithKDistinct(s,k,i,j-1),
  );
}
​