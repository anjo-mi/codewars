 
function capitalsFirst(str){
  const isLetter = word => 'abcdefghijklmnopqrstuvwxyz'.includes(word[0].toLowerCase());
  const caps = str.split(' ').filter(word => isLetter(word) && word[0] === word[0].toUpperCase());
  const lows = str.split(' ').filter(word => isLetter(word) && word[0] === word[0].toLowerCase());
  return caps.concat(lows).join(' ');
}