 
function encode(text){
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return text.split('').map(char => {
    if (!alpha.includes(char.toLowerCase())) return char;
    if (alpha.indexOf(char.toLowerCase()) % 2) return 1;
    if (!(alpha.indexOf(char.toLowerCase()) % 2)) return 0;
  }).join('');
}