 
export function spinningRings(innerMax: number, outerMax: number): number {
  let count: number = 0;
  let inner: number = +0;
  let outer: number = -0;
  while (!Object.is(inner,outer)){
    inner--;
    if (inner < 0){
      inner = innerMax;
    }
    outer++;
    if (outer > outerMax){
      outer = 0;
    }
    count++;
  }
  return count;
};