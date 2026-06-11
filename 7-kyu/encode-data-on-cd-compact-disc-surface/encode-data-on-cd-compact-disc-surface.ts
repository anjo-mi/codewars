 
export function encodeCD(n: number): string {
  const bits = n.toString(2).padStart(8, '0').split('').reverse().join('');
  let res = 'P';
  for (const bit of bits){
    if (bit === '1'){
      res += res[res.length-1] === 'P' ? 'L' : 'P';
    }else res += res[res.length-1];
  }
  return res;
}