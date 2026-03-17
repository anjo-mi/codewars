 
export function watchPyramidFromTheSide(chars:string|null):string|null{
  if (!chars) return chars;
  chars = chars.split('').reverse().join('');
  const length = ((chars.length - 1) * 2) + 1;
  const layers = [];
  for (let i = 0 ; i < chars.length ; i++){
    const insert = chars[i].repeat( (i*2) + 1 );
    const pad = ' '.repeat( Math.floor((length - insert.length) / 2) );
    layers.push(pad + insert + pad)
  }
  return layers.join('\n');
}
​
export function watchPyramidFromAbove(chars:string|null):string|null{
  if (!chars) return chars;
    
    const n = chars.length;
    const size = (n - 1) * 2 + 1;
    const rows: string[] = [];
    
    for (let r = 0; r < size; r++) {
        let row = '';
        for (let c = 0; c < size; c++) {
            const dist = Math.min(r, c, size - 1 - r, size - 1 - c);
            row += chars[dist];
        }
        rows.push(row);
    }
    
    return rows.join('\n');
}
​
export function countVisibleCharactersOfThePyramid(chars:string|null):number{
  if (!chars) return -1;
  const length = ((chars.length - 1) * 2) + 1;
  return length * length;
}
​
export function countAllCharactersOfThePyramid(chars:string|null):number{
  if (!chars) return -1;
  const sideView = watchPyramidFromTheSide(chars)?.split('\n').map(el => el.trim());
  if (!sideView) return -1;
  return sideView.reduce((a,el) => a += (el.length * el.length), 0);
}