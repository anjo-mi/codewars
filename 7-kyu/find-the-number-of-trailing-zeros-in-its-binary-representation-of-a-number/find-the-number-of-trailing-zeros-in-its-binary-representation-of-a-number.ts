 
export function trailingZeros(n: number): number {
  const bin = n.toString(2);
  let x = 0, i = bin.length - 1;
  while (bin[i] === '0'){
    i--;
    x++;
  }
  return x;
}