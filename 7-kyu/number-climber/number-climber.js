 
function climb(n){
  if (n === 1) return [1];
  return climb(n % 2 === 0 
               ? n / 2 
               : (n-1) / 2).concat(n);
}