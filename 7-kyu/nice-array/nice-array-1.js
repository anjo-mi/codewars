 
function isNice(arr){
  if (arr.length === 0) return false;
  return arr.every(el => arr.some(el2 => Math.abs(el - el2) === 1))
}