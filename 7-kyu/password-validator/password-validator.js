 
function password(str) {
  const up  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const low = 'abcdefghijklmnopqrstuvwxyz';
  const num = '0123456789';
  return str.length >= 8 && 
         str.split('').some(el =>  up.includes(el)) && 
         str.split('').some(el => low.includes(el)) && 
         str.split('').some(el => num.includes(el.toString()));
}