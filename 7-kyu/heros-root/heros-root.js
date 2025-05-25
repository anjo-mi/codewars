 
function intRac(n, g, c = 1) {
  let int = Math.floor((g + n / g) / 2);
  return Math.abs(g-int) < 1 ? c : intRac(n,int,++c)
}
​