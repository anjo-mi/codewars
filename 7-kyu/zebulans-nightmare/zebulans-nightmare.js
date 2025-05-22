 
function zebulansNightmare(fn) {
  const newName = fn.split('_').map((el,i) => {
    if (i === 0) return el;
    return el[0].toUpperCase() + el.slice(1).toLowerCase();
  });
  return newName.join('')
}
​