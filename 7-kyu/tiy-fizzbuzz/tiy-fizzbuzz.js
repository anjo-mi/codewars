 
function tiyFizzBuzz(str){
  const cons = new Set('bcdfghjklmnpqrstvwxyz');
  const vows = new Set('aeiou');
  return str.split('').map(el => {
    if (el === el.toUpperCase()){
      if (cons.has(el.toLowerCase())) return 'Iron';
      if (vows.has(el.toLowerCase())) return 'Iron Yard';
    }else if (el === el.toLowerCase()){
      if (cons.has(el.toLowerCase())) return el;
      if (vows.has(el.toLowerCase())) return 'Yard';
    }
    return el;
  }).join('')
}