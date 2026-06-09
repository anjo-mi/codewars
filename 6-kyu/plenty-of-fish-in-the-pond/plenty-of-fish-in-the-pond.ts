 
export const levels:Record<string,number> = {
  '4': 2,
  '12': 3,
  '24': 4,
  '40': 5,
  '60': 6,
  '84': 7,
  '112': 8,
  '144': 9,
  '180': 10,
  '220': 11,
  '264': 12,
  '312': 13,
  '364': 14,
  '420': 15,
  '480': 16,
  '544': 17,
}
​
export function fish(shoal: String): Number{
  let total = 0;
  let level = 1;
  while (shoal.length && shoal.split('').some(char => +char <= level)){
    shoal = shoal.split('').filter(fish => {
      const fishVal = +fish;
      if (fishVal <= level) total += fishVal;
      return fishVal > level;
    }).join('');
    for (const lev in levels){
      if (total >= +lev) level = levels[lev];
    }
  }
  return level;
}