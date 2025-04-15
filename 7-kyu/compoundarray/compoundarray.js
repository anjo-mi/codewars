 
function compoundArray(a, b) {
  const max = a.length >= b.length ? a.length : b.length;
  const combined = [];
  for (let i = 0 ; i < max ; i++){
    if (a[i] || a[i] === 0) combined.push(a[i]);
    if (b[i] || b[i] === 0) combined.push(b[i]);
  }
  return combined;
}