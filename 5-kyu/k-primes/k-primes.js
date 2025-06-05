 
const countPrimes = n => {
  let count = 0;
  while( !(n % 2) && n ){
    n = n / 2;
    count++;
  }
  for (let i = 3 ; i <= Math.sqrt(n) ; i+= 2){
    while (!(n % i)) {
      n = n / i
      count += 1;
    }
  }
  if (n > 1) count++; //27 45 63 81 99
  return count;
}
function countKprimes(k, s, e) {
  const kPrimes = [];
  for (let i = s ; i <= e ; i++){
    if (k === countPrimes(i)) kPrimes.push(i)
  }
  return kPrimes;
}
​
function puzzle(s) {
  const prime1 = countKprimes(1,2,s);
  const prime3 = countKprimes(3,2,s);
  const prime7 = countKprimes(7,2,s);
  const primes7Set = new Set(prime7);
  let solutions = 0;
  
  for (let a of prime1) {
    for (let b of prime3) {
      let c = s - a - b;
      if (c > 0 && primes7Set.has(c)) {
        solutions++;
      }
    }
  }
  return solutions;
}