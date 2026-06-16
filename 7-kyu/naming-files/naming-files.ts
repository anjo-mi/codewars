 
export function nameFile(fmt: string, nbr: number, start: number): string[] {
  if (nbr <= 0 || !Number.isInteger(nbr) || !Number.isInteger(start)) return [];
  const key = `<index_no>`;
  const res = [];
  for (let i = 0 ; i < nbr ; i++){
    let copy = fmt;
    while (copy.includes(key)) copy = copy.replace(key, start.toString());
    res.push(copy);
    start++;
  }
  return res;
}