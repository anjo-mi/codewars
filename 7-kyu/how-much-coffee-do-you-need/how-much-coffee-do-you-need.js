 
function howMuchCoffee(e) {
  const coff = new Set(['cw', 'cat', 'dog', 'movie']);
  const coffees = e.reduce((a,el) =>{
    if (coff.has(el.toLowerCase())){
      a += el === el.toLowerCase() ? 1 : 2;
    }
    return a;
  }, 0);
  return coffees > 3 ? 'You need extra sleep' : coffees;
}