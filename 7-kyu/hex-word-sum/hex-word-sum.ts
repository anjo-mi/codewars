 
export function hexWordSum(str: string): number {
  const validHex = new Set('ABCDEF0123456789');
  const subs: {[key:string]: string} = { 'O' : '0', 'S' : '5'};
  for (const char in subs) str = str.replaceAll(char, subs[char]);
  const arr = str.split(' ');
  return arr.reduce((a,el) =>{
    if (el.split('').some(char => !validHex.has(char))) return a;
    a += parseInt(el,16) || 0;
    return a;
  }, 0);
}