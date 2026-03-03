 
export function dominoReaction(seq: string): string{
  if (seq[0] === ' ') return seq;
  const reactions:Record<string,string> = {'|' : '/', ' ': ' ', '/' : '/'};
  let res = '';
  let falling = true;
  for (const char of seq){
    if (falling) res += reactions[char];
    else res += char;
    if (char === ' ' || char === '/') falling = false;
  }
  return res;
}