 
function sharedBits(a, b) {
  a = a.toString(2);
  b = b.toString(2);
  const l = a.length >= b.length ? a.length : b.length;
  a = a.padStart(l,'0');
  b = b.padStart(l,'0');
  const total = a.split('').reduce((matchingOnes, bit, i) => {
    if (bit === '1' && b.split('')[i] === '1') matchingOnes++;
    return matchingOnes;
  },0);
  return total >= 2;
}
​