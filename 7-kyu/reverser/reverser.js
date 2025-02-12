 
function reverse(n){
  let x = 0;
  while (n > 0){
    const digit = n % 10;
    x = x * 10 + digit;
    n = Math.floor(n / 10);
  }
  return x;
}