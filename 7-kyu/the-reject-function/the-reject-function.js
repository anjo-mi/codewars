 
function reject(array, fn) {
  return array.filter(el => !fn(el))
}