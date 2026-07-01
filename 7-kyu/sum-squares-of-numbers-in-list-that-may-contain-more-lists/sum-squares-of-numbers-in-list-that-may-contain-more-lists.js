 
function SumSquares(l){
    return l.reduce((a,el) => {
      return Array.isArray(el) ? a + SumSquares(el) : a + (el * el);
    }, 0);
}