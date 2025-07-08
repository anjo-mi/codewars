 
function averageLength(arr) { 
  const avgLength = Math.round(arr.reduce((a,el) => a + el.length, 0) / arr.length);
  return arr.map(el => {
    if (el.length === avgLength) return el;
    if (el.length >   avgLength) return el.slice(0,avgLength);
    return el.padStart(avgLength, el[0]);
  });
}