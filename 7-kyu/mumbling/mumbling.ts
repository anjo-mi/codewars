export function accum(s: string): string {
  return s.split('').map((l,i) => l.toUpperCase() + l.toLowerCase().repeat(i)).join('-');
}