 
function solve(arr){
  let max = 1,
      min = 1;
  for (const cans of arr){
    const big = Math.max(...cans);
    const small = Math.min(...cans);
    const c = [max*big,min*big,max*small,min*small];
    max = Math.max(...c);
    min = Math.min(...c);
  }
  return max;
}