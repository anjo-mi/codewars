 
function unique(arr) {
  return arr.filter((el,i) => arr.indexOf(el) === i)
}