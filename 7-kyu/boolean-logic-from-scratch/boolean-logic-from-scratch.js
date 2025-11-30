 
const falsy = new Set([false,0,'',null,undefined,+0,-0,NaN,0n])
​
function or(a, b) {
  return !(falsy.has(a) && falsy.has(b));
}
​
function xor(a, b) {
  if (falsy.has(a)) return !falsy.has(b);
  if (falsy.has(b)) return !falsy.has(a);
  return false;
}