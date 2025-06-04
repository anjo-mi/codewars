 
function passTheDoorMan(word){
  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  for (let i = 0 ; i < word.length - 1 ; i++){
    if (word[i] === word[i + 1]){
      return alpha.indexOf(word[i]) * 3;
    }
  }
  return 'no entry!';
}