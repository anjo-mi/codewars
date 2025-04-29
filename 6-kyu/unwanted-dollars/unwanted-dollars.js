 
function money_value(s){
  s = s.replaceAll(' ','').replaceAll('$','');
  const arabic = '0123456789';
  return s.split('').some(el => arabic.includes(el)) 
            ? +s
            : 0;
}