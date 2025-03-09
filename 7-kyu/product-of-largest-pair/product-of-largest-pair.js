 
function maxProduct(a) {
  if (a.length === 2) return a[0] * a[1];
  const max = Math.max(...a);
  const i = a.indexOf(max);
  a.splice(i,1);
  const sec = Math.max(...a);
  return max * sec;
}