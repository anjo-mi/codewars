 
const createKeys = (key) => {
  if (key.length % 2) return {};
  const board = {}
  for (let i = 0 ; i < key.length ; i+= 2){
    const first = key[i].toLowerCase();
    const second = key[i+1].toLowerCase();
    board[first] = second;
    board[second] = first;
  }
  return board;
}
​
function encode(str,key) {
  const board = createKeys(key);
  return str.split('').map(char => {
    if (!(char.toLowerCase() in board)) return char;
    const isUpper = char === char.toUpperCase();
    const sub = board[char.toLowerCase()];
    return isUpper ? sub.toUpperCase() : sub;
  }).join('');
}
​
function decode(str,key) {
  const board = createKeys(key);
  return str.split('').map(char => {
    if (!(char.toLowerCase() in board)) return char;
    const isUpper = char === char.toUpperCase();
    const sub = board[char.toLowerCase()];
    return isUpper ? sub.toUpperCase() : sub;
  }).join('');
}