 
function filterHomogenous(arrs) {
  return arrs.filter(el => el.length && el.every(e => typeof e === typeof el[0]))
}