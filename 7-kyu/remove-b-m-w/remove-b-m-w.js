 
function removeBMW(str){
  if (typeof str !== 'string') throw new Error('This program only works for text.');
  const removal = new Set('bmwBMW');
  return str.split('').filter(char => !removal.has(char)).join('');
}