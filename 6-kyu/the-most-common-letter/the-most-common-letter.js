 
function replaceCommon(str, letter) {
  const counts = str.split('').reduce((a,el) => {
    if (el !== ' ') a[el] = (a[el] || 0) + 1;
    return a;
  },{})
  let max = -1;
  let l = '';
  for (const ltr in counts){
    if (counts[ltr] > max){
      max = counts[ltr];
      l = ltr;
    }
  }
  return str.replaceAll(l,letter);
}