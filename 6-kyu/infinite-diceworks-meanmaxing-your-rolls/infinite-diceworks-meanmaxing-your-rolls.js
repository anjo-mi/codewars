 
function meanMax(d, r) {
    const avg = ((1+d)/2)
    let total = 0;
    let n = 0;
    while(n <= d){
      const prob = (n/d)**r - ((n-1)/d)**r;
      total += n * prob
      n++
    }
    return total - avg;
  }