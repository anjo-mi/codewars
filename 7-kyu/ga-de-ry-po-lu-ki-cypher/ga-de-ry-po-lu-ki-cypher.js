 
const conversion = {
  a:'g',A:'G',g:'a',G:'A',d:'e',D:'E',e:'d',E:'D',r:'y',R:'Y',y:'r',Y:'R',
  p:'o',P:'O',o:'p',O:'P',l:'u',L:'U',u:'l',U:'L',k:'i',K:'I',i:'k',I:'K'
}
​
function encode(str) {
  return str.split('').map(char => conversion[char] || char).join('');
}
​
function decode(str) {
  return str.split('').map(char => conversion[char] || char).join('');
}