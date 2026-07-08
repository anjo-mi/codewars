 
export const factorial = (n:number,memo:Record<string,number>):number => {
  if (n <= 1) return memo[n.toString()] = 1;
  if (n.toString() in memo) return memo[n.toString()];
  return memo[n.toString()] = n * factorial(n-1,memo);
}
​
export function checkchoose(m: number, n: number): number {
  let temp:number = -1,
      count:number = 1;
  const memo:Record<string,number> = {};
  while (count <= m){
    const res:number = Math.round(factorial(n,memo) / (factorial(count,memo) * factorial(n-count,memo)));
    if (res === 0) return -1;
    if (res === m) return count;
    count++;
  }
  return temp;
  
}