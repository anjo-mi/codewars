 
function notPrimes(a,b){
  const nonPrimes = '014689';
  const passes = [];
  for (let i = a ; i < b ;i++){
    if (i.toString().split('').some(el => nonPrimes.includes(el))) continue;
    if (!isPrime(i)) passes.push(i);
  }
  return passes;
}
​
const isPrime = (n) => {
  for (let i = 2 ; i <= Math.sqrt(n) ; i++){
    if (n % i === 0) return false;
  }
  return true;
}