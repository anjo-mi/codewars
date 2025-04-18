 
function radLadies(name){
  const keepers = 'abcdefghijklmnopqrstuvwxyz !';
  name = name.split('').filter(el => keepers.includes(el.toLowerCase())).join('');
  return name.toUpperCase();
}