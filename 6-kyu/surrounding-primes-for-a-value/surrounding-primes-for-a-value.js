 
const checkPrime = n =>{
  for (let i = 2 ; i <= Math.sqrt(n) ; i++){
    if (!(n%i)) return false;
  }
  return n > 1;
}
​
function primeBefAft(num) {
  let u = num+1,
      d = num-1;
  while (!checkPrime(u)) u++;
  while (!checkPrime(d)) d--;
  return [d,u]
}