 
function validNumber(num){
  if (num.split('.').length !== 2) return false;
  const [whole, dec] = num.split('.');
  const valid = new Set('+-0123456789');
  console.log({num,whole,dec})
  for (const char of whole) if (!valid.has(char)) return false;
  for (const char of dec) if (!valid.has(char)) return false;
  if (dec.length !== 2) return false;
  return true;
}