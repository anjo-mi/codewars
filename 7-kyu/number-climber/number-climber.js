 
function climb(n){
  if (n === 1) return [1];
  return climb(Math.floor(n/2)).concat(n);
}