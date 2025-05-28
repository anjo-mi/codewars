 
const gcd = (a,b) => b ? gcd(b, a%b) : a;
const lcm = (a,b) => Math.abs(a*b) / gcd(a,b)
​
function sumDifferencesBetweenProductsAndLCMs(pairs){
  const prods = pairs.map(el => el.reduce((a,e) => a * e, 1));
  const lcms  = pairs.map(el => lcm(el[0], el[1]) || 0 );
  return prods.reduce((a,el,i) => a + (el - lcms[i]), 0);
}
​
​