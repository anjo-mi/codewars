 
function roots(a,b,c){
  if (b**2 - 4*a*c < 0) return null;
  return +((-b/a).toFixed(2));
}