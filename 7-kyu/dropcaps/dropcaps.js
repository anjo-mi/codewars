 
function dropCap(n) {
  const words = n.split(' ').map(el => el.trim());
  for (const word of words){
    if (word.length > 2){
      n = n.replace(word, word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  }
  return n;
}