 
function fromNb2Str(n,sys){
  if (sys.reduce((a,el) => a * el, 1) < n) return 'Not applicable'
  const factors = new Set();
  for (const item of sys) for (let i = 1 ; i <= Math.sqrt(item) ; i++){
    if (!(item % i)){
      if (factors.has(i) && i !== 1) return 'Not applicable';
      if (factors.has(item / i)) return 'Not applicable';
      factors.add(i).add(item / i);
    }
  }
  console.log({factors,sys})
  const res = sys.reduce((a,el) => a += (`-${n % el}-`), '');
  return res;
}