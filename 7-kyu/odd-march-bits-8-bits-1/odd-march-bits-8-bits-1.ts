 
export function bitMarch (n: number): number[][] {
  const base = '00000000';
  const arr = [];
  for (let start = 0, end = n ; end <= base.length ; start++, end++){
    arr.push( base.slice(0,start) + String(1).repeat(n) + base.slice(end) );
  }
  return arr.map(el => el.split('').map(Number)).reverse();
}