 
function powerOf4(n) {
  if (typeof n !== 'number' || n === 0) return false;
  while (n % 4 === 0){
    n /= 4;
  }
  return n === 1
}