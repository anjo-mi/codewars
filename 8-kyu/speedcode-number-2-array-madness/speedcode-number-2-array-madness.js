 
function arrayMadness(a, b) {
  return a.reduce((ac,el) => ac += el**2, 0) > b.reduce((ac,el) => ac += el**3, 0);
}