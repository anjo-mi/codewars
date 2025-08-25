 
function once(fn) {
  let x = 0;
  return function(...a){
    x++;
    if (x > 1) return;
    return fn(...a);
  }
}