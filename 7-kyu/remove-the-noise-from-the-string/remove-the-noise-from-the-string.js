 
function removeNoise(str){
  const invalid = new Set('%$&/#·@|º\\ª');
  return str.split('').filter(char => !invalid.has(char)).join('');
}