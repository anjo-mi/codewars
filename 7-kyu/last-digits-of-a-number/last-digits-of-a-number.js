 
function lastDigit(n, d) {
  return d <= 0 
          ? [] 
          : n.toString().split('').map(Number).slice(-d);
}