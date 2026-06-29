 
function burner(c, h, o) {
  let wat = 0,
      cdi = 0,
      met = 0;
  while (h >= 2 && o > 0){
    wat++;
    h -= 2;
    o--;
  }
  while (c > 0 && o >= 2){
    cdi++;
    o -= 2;
    c--;
  }
  while (h >= 4 && c > 0){
    met++;
    h -= 4;
    c--;
  }
  return [wat,cdi,met];
}