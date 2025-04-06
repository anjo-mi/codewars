 
function solve(stones) {
  let prev = null;
  let count = 0;
  for (let i = 0 ; i < stones.length ; i++){
    if (stones[i] === prev) count++;
    prev = stones[i];
  }
  return count;
}