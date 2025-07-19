 
function checkParity(par, bin){
  let count = 0;
  for (const char of bin) if (char === '1') count++;
  par = par === 'even' ? true : false;
  return !(count % 2) && par  ? 0 : 
          (count % 2) && par  ? 1 : 
         !(count % 2) && !par ? 1 : 0;
}