 
function correctness(b,e) {
  let total = b.reduce((a,el,i) => a += el === e[i] ? 1 : el === '?' || e[i] === '?' ? .5 : 0 ,0);
  return total;
}