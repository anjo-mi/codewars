 
function nothingSpecial(str) {
  if (typeof str !== 'string') return 'Not a string!'
  const verified = 'abcdefghijklmnopqrstuvwxyz1234567890 ';
  const keys = {'\t' : 1}
  const survivors = str.split('').map( el => verified.includes(el.toLowerCase()) || el in keys ? el : null ).filter(el => el);
  return survivors.join('')
}