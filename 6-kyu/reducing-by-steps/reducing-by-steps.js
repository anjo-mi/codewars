function gcdi(x,y) {
  return !y ? Math.abs(x) : gcdi(Math.abs(y), Math.abs(x % y));
}
function lcmu(a, b) {
  return (Math.abs(a) * Math.abs(b)) / gcdi(Math.abs(a),Math.abs(b));
}
function som(a, b) {
  return a + b;
}
function maxi(a, b) {
  return Math.max(a,b);
}
function mini(a, b) {
  return Math.min(a,b);
}
function operArray(fct, arr, init) {
  return arr.reduce((a,el) => {
    a.push(fct(init, el));
    init = fct(init, el);
    return a;
  }, [])
​
}
​