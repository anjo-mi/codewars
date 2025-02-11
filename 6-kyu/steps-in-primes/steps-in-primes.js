function step(g, m, n) {
  const primes = [];
  for ( let i = m ; i <= n ; i++ ){
    let prime = true;
    for ( let j = 2 ; j <= Math.sqrt(i) ; j++ ){
      if (i % j === 0){
        prime = false;
      }
    }
    if (prime) primes.push(i);
  }
  for ( let i = 0 ; i <= primes.length ; i++ ){
    const withStep = primes.slice(i + 1).find(el => el - primes[i] === g);
    if (withStep) return [primes[i], withStep];
  }
  return null;
}