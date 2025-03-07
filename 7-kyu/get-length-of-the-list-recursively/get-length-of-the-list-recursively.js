 
function lenR(x) {
  if (x.length === 0) return 0;
  return 1 + lenR(x.slice(1))
}