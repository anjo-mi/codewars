 
export const doubles: Record<string,Record<string,number>> = {
  '1': {6:2},
  '6': {1:2},
  '2': {5:2},
  '5': {2:2},
  '3': {4:2},
  '4': {3:2},
}
​
export function rotations(dice: number[]): number {
  let least: number = Infinity;
  for (const char in doubles){
    let count:number = 0;
    for (const die of dice){
      if (die.toString() === char) continue;
      if (die.toString() in doubles[char]) count++;
      count++;
    }
    least = Math.min(count,least);
  }
  return least;
}