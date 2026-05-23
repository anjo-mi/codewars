 
export function findQuarterNotes(timeSignature: string): number | null {
  const [num,den] = timeSignature.split('/').map(Number);
  let x = 0;
  while (Math.pow(2,x) < den){
    if (Math.pow(2,x) === den) break;
    x++;
  }
  if (Math.pow(2,x) > den) return null;
  const fulls:number = Math.floor(num / den) * 4;
  const quarters:number = Math.floor((num % den) / den * 4);
  return fulls + quarters;
}