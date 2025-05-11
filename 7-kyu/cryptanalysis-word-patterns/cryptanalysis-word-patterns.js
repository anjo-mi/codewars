 
function wordPattern(word) {
  word = word.toLowerCase()
  let i = 0;
  const map = word.split('').reduce((a,el) => {
    if (!(el in a)){
      a[el] = i;
      i++
    }
    return a;
  }, {})
  
  const crypt = word.split('').map(el => map[el]);
  return crypt.join('.');
}