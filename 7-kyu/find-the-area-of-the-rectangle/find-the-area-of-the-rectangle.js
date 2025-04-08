 
function area(d,l){
  if (d < l) return 'Not a rectangle';
  const w = Math.sqrt(d**2 - l**2);
  return +((w * l).toFixed(2));
}