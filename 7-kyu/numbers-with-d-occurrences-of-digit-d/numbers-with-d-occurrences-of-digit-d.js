 
function isDd(n) {
  const count = n.toString().split('').reduce((a,el) => {
    a[el] = (a[el] || 0) + 1;
    return a;
  },{});
  for (const c in count) if (+c === count[c]) return true;
  return false;
}