 
function fib(n) {
  const f = [0,0,1,1,2,3];
  if (n < f.length) return f[n];
  if (n < 0) return NaN;
  while (n >= f.length){
    f[f.length] = f[f.length-1] + f[f.length-2];
  }
  return f[n];
}