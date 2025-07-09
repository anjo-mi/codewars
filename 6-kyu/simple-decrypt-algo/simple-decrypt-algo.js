 
function decrypt(enc) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const counts = {};
  for (const char of enc){
    counts[char] = (counts[char] || 0) + 1;
  }
  return alpha.split('').map(char => counts[char] || 0).join('');
}