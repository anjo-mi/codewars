 
function connotation(str) {
  const front = new Set('abcdefghijklm');
  const back  = new Set('nopqrstuvwxyz');
  str = str.split(' ').map(el => el.trim()).map(el => el ? el[0].toLowerCase() : '');
  const total = str.reduce((a,el) => {
    if (!el) return a;
    if (front.has(el)) a++;
    if (back.has(el))  a--;
    return a;
  }, 0)
  return total >= 0;
}