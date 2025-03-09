 
function onesComplement(n) {
  return n.split('').map(num => +num ? '0' : '1').join('');
};