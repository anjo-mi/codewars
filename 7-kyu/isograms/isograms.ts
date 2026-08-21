export function isIsogram(s: string): boolean{
  const set = new Set<string>();
  for (const char of s){
    if (set.has(char.toLowerCase())) return false;
    set.add(char.toLowerCase());
  }
  return true;
}
​