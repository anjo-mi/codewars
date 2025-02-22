 
function changer(str) { 
  const alpha = 'abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA';
  const vowels = 'aeiou';
  const transition = (letter) =>{
    if (alpha.includes(letter)){
      letter = alpha[alpha.indexOf(letter) + 1];
      
      if (vowels.includes(letter.toLowerCase())){
        letter = letter.toUpperCase();
      }else{
        letter = letter.toLowerCase();
      }
    }
    return letter;
  }
  return str.split('').map(transition).join('');
}