 
function partlist(arr) {
  const combos = [];
  for (let i = 1 ; i < arr.length ; i++){
    const front = arr.slice(0,i);
    const back = arr.slice(i);
    if (front.length) combos.push([front.join(' '),back.join(' ')]);
    else {combos.push([back])}
  }
  return combos;
}