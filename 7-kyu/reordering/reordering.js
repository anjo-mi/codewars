 
function reOrdering(text){
  const words = text.split(' ');
  let capital = null;
  let index = -1;
  for (let i = 0 ; i < words.length ; i++){
    const first = words[i][0];
    if (first === first.toUpperCase()){
      capital = words[i];
      index = i;
    }
  }
  words.splice(index,1);
  return (capital + ' ' + words.join(' ')).trim();
}