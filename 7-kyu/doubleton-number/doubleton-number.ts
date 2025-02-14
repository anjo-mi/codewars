export function doubleton(num: number): number {
  let possDub = num + 1;
  
  while (true) {
    const totals = possDub.toString().split('').reduce<Record<string, number>>((a, el) => {
      a[el] = (a[el] || 0) + 1;
      return a;
    }, {});
    
    const count = Object.keys(totals).length;
    if (count === 2) {
      return possDub;
    }
    possDub++;
  }
}
