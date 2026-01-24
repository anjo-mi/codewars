type State = {modifier: number}
​
const state:State = {modifier: 2}
​
export function solution(arr: number[], options:State) {
  const a = []
  for (let i = 0; i < arr.length; ++i) {
    a.push( 2 * options.modifier + arr[i] );
  }
  
  return a;
}
​