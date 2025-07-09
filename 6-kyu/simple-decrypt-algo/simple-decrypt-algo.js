 
function decrypt(enc) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const counts = {};
  for (const char of alpha) counts[char] = 0;
  for (const char of enc){
    if (char in counts) counts[char]++;
  }
  return alpha.split('').map(char => counts[char]).join('');
}