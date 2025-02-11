 
function encode(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return str.split('').map(el => alpha.includes(el.toLowerCase()) ? alpha.indexOf(el.toLowerCase()) + 1 : el).join('');
}
