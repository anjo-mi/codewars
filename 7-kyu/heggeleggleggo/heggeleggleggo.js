 
function heggeleggleggo(word){
  const conses = new Set('bcdfghjklmnpqrstvwxyz');
  return word.split('').map(char => conses.has(char.toLowerCase()) ? char + 'egg' : char).join('');
}