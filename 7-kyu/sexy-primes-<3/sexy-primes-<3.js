 
const isPrime = n => {
  for (let i = 2 ; i <= Math.sqrt(n) ; i++) if (!(n % i)) return false;
  return n > 1;
}
​
function sexyPrime(x, y){
  return isPrime(x) &&
         isPrime(y) &&
         Math.abs(x-y) === 6;
}