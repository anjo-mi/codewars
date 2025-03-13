 
function gimmeTheLetters(sp) {
  const [first, last] = sp.split('-');
  if (first === last) return first;
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  if (first === first.toUpperCase()) alpha = alpha.toUpperCase();
  const [ind1,ind2] = [first,last].map(el => alpha.indexOf(el));
  return alpha.slice(ind1,ind2 + 1);
}