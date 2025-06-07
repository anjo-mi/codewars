 
function minimum(a, x) {
  let inc = a, dec = a;
  let count = 0;
  while (inc%x && dec%x){
    inc++;
    dec--;
    count++;
  }
  return count;
}