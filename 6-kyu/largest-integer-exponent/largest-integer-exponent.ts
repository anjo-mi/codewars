 
export function getExponent(n: number, p: number): null|number {
  if (p <= 1) return null;
  let x = 1;
  let curr:number = 0;
  while (p ** x <= Math.abs(n)){
    if (!(n % (p ** x))) curr = x;
    x++;
  }
  return curr;
}