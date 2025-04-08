 
function removeChars(s) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  s = s.split(' ');
  return s.map(word => word.split('')
                      .filter(char => alpha.includes(char.toLowerCase()))
                      .join(''))
                      .join(' ')
}