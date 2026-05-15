 
export const gcd = (a:number,b:number):number => b ? gcd(b, a%b) : a;
​
export function simplify(int:number, num:number, den:number):number[]{
  if (den === 0) return [int,0,0];
  if (num === 0) return [int,0,0];
  int += (Math.floor(num / den));
  num %= den;
  const gDen = gcd(num,den);
  if (num === 0) return [int,0,0];
  return [int,num/gDen,den/gDen]
}