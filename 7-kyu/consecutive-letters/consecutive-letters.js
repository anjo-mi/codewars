 
function solve(s){
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return alpha.includes(s.split('').sort().join(''));
}