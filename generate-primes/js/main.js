function numPrimorial(n){
    return generatePrimes(n).reduce((a,el) => a * el, 1)
    
  }
  
  function generatePrimes(length) {
    if (length <= 0) return [];
    
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    }
    
    const primes = [];
    let currentNum = 2;
    
    while (primes.length < length) {
      if (isPrime(currentNum)) {
        primes.push(currentNum);
      }
      currentNum++;
    }
    
    return primes;
  }


  console.log(numPrimorial(3),30);
  console.log(numPrimorial(4),210);
  console.log(numPrimorial(5),2310);
  console.log(numPrimorial(8),9699690);
  console.log(numPrimorial(9),223092870);