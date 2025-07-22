 
const findNewIndex = (i,k) =>{
  if (i + k > 25) return i + k - 26;
  if (i + k <  0) return i + k + 26;
  return i + k;
}
​
function encryptor (key, message) {
  key = key % 26
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let res = '';
  for (const char of message){
    const i = alpha.indexOf(char.toLowerCase());
    const ni = findNewIndex(i,key);
    if (!alpha.includes(char.toLowerCase())) res += char;
    else {res += char === char.toLowerCase() ? alpha[ni].toLowerCase() : alpha[ni].toUpperCase()};
  }
  return res;
}