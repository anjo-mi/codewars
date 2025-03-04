 
function deepReverse(l){
  if (!Array.isArray(l)) return l;
  return l.map(deepReverse).reverse();
}