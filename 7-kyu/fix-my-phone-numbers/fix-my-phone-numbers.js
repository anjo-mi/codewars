 
function isItANum(str) {
  str = str.split('').filter(char => (!isNaN(char) && char !== ' ' && char !== '.')).join('');
  console.log(str)
  return str.length === 11 && str.startsWith('0')
          ? str 
          : 'Not a phone number';
}