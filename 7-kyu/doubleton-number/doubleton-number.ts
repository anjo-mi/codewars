 
export function doubleton(num: number): number {
  let possDub: number = num + 1;
  const totals = possDub.toString().split('').reduce<Record<string,number>>((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  }, {})
  let count: number = 0;
  for (let key in totals){
    count++;
  }
  return count === 2 ? possDub : doubleton(possDub);
}