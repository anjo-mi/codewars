export function countPositivesSumNegatives(input: number[] | null): number[] {
  if (!input?.length) return [];
  const res:[number,number] = [0,0];
  for (const num of input){
    if (num > 0) res[0]++;
    else res[1] += num;
  }
  return res;
}