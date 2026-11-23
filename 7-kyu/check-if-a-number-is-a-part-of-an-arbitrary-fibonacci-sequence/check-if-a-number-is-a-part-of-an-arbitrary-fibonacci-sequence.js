 
function isFibo(a,b,f) {
  while (b < f){
    const next = a + b;
    a = b;
    b = next;
  }
  return b === f || a === f;
}