// divisor = d**2
// multiplier = d * 2 - 1
function meanMax(d, r) {
  let total = 0;
  let n = 0;
  while(n <= d){
    const prob = (n/d)**r - ((n-1)/d)**r;
    total += n * prob
    n++
  }
  return total - ((1+d)/2)
}