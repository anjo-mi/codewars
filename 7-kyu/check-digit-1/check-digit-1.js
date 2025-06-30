 
function checkDigit(n, i1, i2, dig) {
  const min = i1 <= i2 ? i1 : i2;
  const max = min === i1 ? i2 : i1;
  const portion = n.toString().slice(min, max + 1);
  return portion.includes(dig.toString());
};