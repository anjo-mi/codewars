 
export function solution(first: number, second: number): [number, number] {
  let last:number = second;
  let next:number = Infinity;
  while (first >= 0){
    next = second - first;
    if (next > first) break;
    last = second;
    second = first;
    first = next;
  }
​
  return [ first, second ];
}