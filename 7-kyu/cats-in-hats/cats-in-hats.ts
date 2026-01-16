 
export function height(n: number): string {
  let total = 2000000;
  let height = 0;
  let i = 0;
  while (i < n){
    height += total / 2.5;
    total = (total / (2.5));
    i++;
  }
  return (2000000 + height).toFixed(3);
}