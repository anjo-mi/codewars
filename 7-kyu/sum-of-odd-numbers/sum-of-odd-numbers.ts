export function rowSumOddNumbers(n: number): number {
  let i = 1;
  let end = 1;
  let add = 4;
  const arr:number[][] = [];
  while (arr.length < n){
    const row:number[] = [];
    while (i <= end) {
      row.push(i);
      i += 2;
    }
    arr.push(row);
    end += add;
    add += 2;
  }
  return arr[n-1].reduce((a,el) => a += el, 0);
}