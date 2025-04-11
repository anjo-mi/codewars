 
function arraySum(arr) {
  return arr.reduce((a,el) => {
    if(!Array.isArray(el) && typeof el === 'number' && el !== '.') a += el;
    else if (Array.isArray(el)) {a += arraySum(el)};
    return a;
  }, 0)
}