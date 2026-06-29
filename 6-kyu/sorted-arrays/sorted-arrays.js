 
function nthSmallest(...args) {
  let arr = args;
  const i = arr.pop();
  arr = arr.flat(Infinity).sort((a,b) => a - b);
  return arr[i-1];
}