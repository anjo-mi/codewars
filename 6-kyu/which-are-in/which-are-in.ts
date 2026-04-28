 
export function inArray(a1: string[], a2: string[]): string[] {
  return a1.filter(w => {
    for (const word of a2) if (word.includes(w)) return true;
    return false;
  }).sort();
}