 
function anyOdd(x) {
  x = x.toString(2);
  for (let i = x.length - 2 ; i >= 0 ; i -= 2){
    if (x[i] === '1') return 1;
  }
  return 0;
}