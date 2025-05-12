function nextPal(val) {
  const str = (++val).toString();
  return str === str.split('').reverse().join('') ? val : nextPal(val);
}