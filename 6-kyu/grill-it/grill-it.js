 
function grille(message, code) {
  code = code.toString(2).padStart(message.length,'0').slice(-message.length);
  return message.split('').map((char,i) => code[i] === '1' ? char : '').join('');
}
​