 
function getNumberOfSquares(n) {
  let total = 0;
  let count = 0;
  while (total < n){
    total += (count * count);
    count++;
  }
  return count - 2;
}