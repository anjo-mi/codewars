 
function nextLetter(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';
  for (const char of str){
    const i = alpha.indexOf(char.toLowerCase());
    if (i < 0){
      res += char;
      continue;
    }
    const ni = i + 1 > 25 ? 25 - i : i + 1;
    res += char === char.toUpperCase() ? alpha[ni].toUpperCase() : alpha[ni];
  }
  return res;
}