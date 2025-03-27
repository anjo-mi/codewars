 
function f(x, cc) { 
  const c = Array.from(Object.values(cc));
  let ind = c.indexOf(x);
  ind = ind + 1 > c.length - 1 ? 0 : ind + 1;
  return c[ind];
}