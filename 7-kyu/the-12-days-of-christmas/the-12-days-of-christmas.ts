 
export const order:Record<string,number> = {
  'On':1,
  '12':2,
  '11':3,
  '10':4,
  '9' :5,
  '8' :6,
  '7' :7,
  '6' :8,
  '5' :9,
  '4' :10,
  '3' :11,
  '2' :12,
  'a' :13,
}
​
export function comparator(a: string, b: string): number {
  const apos = order[a.split(' ')[0]];
  const bpos = order[b.split(' ')[0]];
  return apos > bpos ? 1
        :bpos > apos ? -1 : 0;
}
​