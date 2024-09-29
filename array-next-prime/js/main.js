function minimumNumber(nums){
    let sum = nums.reduce((a,el) => a + el, 0)
    let nextPrime = 0
    function isPrime(number) {
      if (number < 2) {
        return false;
      }
  
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
  
      return true;
    }
    let i = sum
    while (nextPrime === 0){
      if (isPrime(i)) {nextPrime = i}
      i++
    }
    return nextPrime - sum
  }

  console.log(minimumNumber([3,1,2]),1);
  console.log(minimumNumber([5,2]),0);
  console.log(minimumNumber([1,1,1]),0);
  console.log(minimumNumber([2,12,8,4,6]),5);
  console.log(minimumNumber([50,39,49,6,17,28]),2);