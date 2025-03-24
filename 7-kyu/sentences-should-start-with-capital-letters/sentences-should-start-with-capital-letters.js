 
function fix(p){
  if (!p) return '';
  return p.split('. ')
          .map(sentence => sentence[0].toUpperCase() + sentence.slice(1))
          .join('. ');
}