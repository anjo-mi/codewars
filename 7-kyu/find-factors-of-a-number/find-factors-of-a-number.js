 
function factors(x){
  if (x <= 0 || !Number.isInteger(x) || typeof x !== 'number') return -1;
  const f = [];
  for (let i = 1 ; i <= Math.sqrt(x) ; i++) if (!(x%i)) f.push(i,x/i);
  
  return Array.from(new Set(f)).sort((a,b) => b-a);
}