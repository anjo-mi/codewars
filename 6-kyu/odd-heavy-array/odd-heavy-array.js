 
function isOddHeavy(arr) {
  const odds = arr.filter(num => num % 2);
  const evenMax = Math.max(...arr.filter(num => !(num % 2)));
  if (!odds.length) return false;
  return odds.every(n => n > evenMax);
}