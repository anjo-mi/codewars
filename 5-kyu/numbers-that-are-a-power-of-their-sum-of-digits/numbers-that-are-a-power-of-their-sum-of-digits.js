 
function powerSumDigTerm(n) {
  const results = new Set();
  
  for (let sum = 2; sum <= 200; sum++) {
    let power = sum * sum;
​
    while (power < 100000000000000000000000000000000) {
      const digitSum = power.toString().split('').reduce((a, b) => a + +b, 0);
      if (digitSum === sum && power >= 10) {
        results.add(power);
      }
      power *= sum;
    }
  }
  
  return [...results].sort((a, b) => a - b)[n - 1];
}