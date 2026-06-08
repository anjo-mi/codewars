 
export function estSubsets<T>(list: T[]): number {
  list = Array.from(new Set(list));
  return Math.pow(2,list.length) - 1;
}