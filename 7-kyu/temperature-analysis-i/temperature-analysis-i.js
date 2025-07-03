 
function lowestTemp(t) {
  if (!t.trim()) return null;
  const temps = t.split(' ').map(Number);
  let min = Infinity;
  for (const temp of temps){
    if (temp < min) min = temp;
  }
  return min;
}