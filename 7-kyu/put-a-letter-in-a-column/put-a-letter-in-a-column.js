 
function buildRowText(i, char) {
  let cols = '|';
  for (let p = 0 ; p <= 8 ; p++){
    cols += p === i ? char + '|' : ' |';
  }
  return cols;
}