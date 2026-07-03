 
export function isLeap(year: number):boolean {
  if (!(year % 400)) return true;
  return !(year % 4) && !!(year % 100)
}