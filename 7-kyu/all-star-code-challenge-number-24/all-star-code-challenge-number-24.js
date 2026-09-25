 
function hypotenuse(a, b){
  if (a <= 0 || b <= 0) return 0;
  return Math.sqrt(a**2 + b**2);
    
}
​
function leg(c, a){
  if (a <= 0 || c <= 0 || c <= a) return 0;
  return Math.sqrt(c**2 - a**2)
    
}