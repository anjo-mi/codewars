 
function SumSquares(l){
  return l.flat(Infinity).reduce((a,el) => a += (el * el), 0);
}