var fibsFizzBuzz = function(n) {
  const fib = [1,1];
  for (let i = 2 ; i < n ; i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  const fizzonacci = fib.map((el,i) => {
    if (el % 15 === 0) return 'FizzBuzz';
    if (el % 5 === 0)  return 'Buzz';
    if (el % 3 === 0)  return 'Fizz';
    return el;
  });
  return fizzonacci.slice(0,n)
}