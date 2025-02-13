 
export function arr2bin(arr: any[]): string {
  const total:number = arr.reduce((a:number,el:any) => {
    if (typeof el === 'number'){
      a += el;
    }
    return a;
  }, 0);
  return total.toString(2);
}