 
function alphaSeq (str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const upperOrder = str.split('').map(el => el.toUpperCase() + el.toLowerCase().repeat(alpha.indexOf(el.toLowerCase())) ).sort();
  return upperOrder.join(',');
}