 
function pigIt(str){
  const alpha = new Set('abcdefghijklmnopqrstuvwxyz');
  return str.split(' ').map(word => {
    if (!alpha.has(word[0].toLowerCase())) return word;
    if (word.length === 1) return word + 'ay';
    let last = '';
    if (!alpha.has(word[word.length - 1])) {
      last = word[word.length-1];
      word = word.slice(0,-1);
    }
    const firstChar = word[0] + 'ay';
    return word.slice(1) + firstChar + last;
  }).join(' ');
}