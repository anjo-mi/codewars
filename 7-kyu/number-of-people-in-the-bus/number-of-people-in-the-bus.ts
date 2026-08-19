 
export function number(busStops: [number, number][]): number {
  let total = 0;
  for (const [on,off] of busStops){
    total += on;
    total -= off;
  }
  return total;
}