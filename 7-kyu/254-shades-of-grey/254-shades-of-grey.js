 
function shadesOfGrey(n){
  const grays = [];
  if (n <= 0) return grays;
  for (let i = 1 ; i <= n && i < 255 ; i ++){
    let x = i.toString(16);
    if (x.length === 1) x = x.padStart(2,'0');
    grays.push('#' + x.repeat(3))
  }
  return grays;
}