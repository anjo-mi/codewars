 
var calc = function(a) {
  return a.map((el,i) => el > 0       ? el * el : el)
   .map((el,i) => i  % 3 === 2 ? el * 3  : el)
   .map((el,i) => i  % 5 === 4 ? el * -1 : el)
   .reduce((a,el) => a + el , 0);
}