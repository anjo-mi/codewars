 
export function getScore(arr: number[]) {
  const ppl:Record<string,number> = {
    '0': 0, '1': 40, '2': 100, '3': 300, '4': 1200,
  };
  let level = 1;
  let cleared = 0;
  return arr.reduce((a,el) => {
    a += (ppl[el.toString()] * level);
    cleared += el;
    if (cleared >= 10){
      level += Math.floor(cleared / 10);
      cleared %= 10;
    }
    return a;
  }, 0);
}