 
function capMe(names) {
  return names.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase());
}