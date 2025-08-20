 
var FindFunction = function(func, arr) {
  const fn = func.filter(el => typeof el === 'function')[0];
  return arr.filter(fn);
}