 
  return str.split('').map(char => {
    if (!(char.toLowerCase() in board)) return char;
    const isUpper = char === char.toUpperCase();
    const sub = board[char.toLowerCase()];
    return isUpper ? sub.toUpperCase() : sub;
  }).join('');
}
​
function decode(str,key) {
  const board = keys[key];
  return str.split('').map(char => {
    if (!(char.toLowerCase() in board)) return char;
    const isUpper = char === char.toUpperCase();
    const sub = board[char.toLowerCase()];
    return isUpper ? sub.toUpperCase() : sub;
  }).join('');
}
​
function findTheKey(messages , secrets) {
  for (const key in keys){
    if (
      messages.every((m,i) => {
        return encode(m,key) === secrets[i];
      }) &&
      secrets.every((s,i) => {
        return decode(s,key) === messages[i];
      })
    ) return key;
  }
  return 'No valid key found!';
}