 
function danspower(num, power) {
  const n = num ** power;
  return n % 2 ? Math.round(n / 10) * 10 : n;
}
​