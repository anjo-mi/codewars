 
export function triangle(row: string): string {
  console.log({row})
  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const places:Record<string,number> = alpha.split('').reduce((a,el,i) => {
    a[el] = i;
    return a;
  }, {} as Record<string,number>)
  let curr: string[] = row.split('');
  while (curr.length > 1){
    const next:string[] = [];
    for (let i = 0 ; i < curr.length - 1; i++){
      const [first,second] = [curr[i], curr[i+1]];
      let total = places[first] + places[second];
      if (total > 26) total = Number.isInteger(total / 26) ? 26 : total % 26;
      next.push(alpha[total]);
    }
    curr = next;
  }
  return curr[0];
}