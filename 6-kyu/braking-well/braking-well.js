 
const g = 9.81
​
function dist(v, mu) {
  let d = (((v/3.6)**2) / (2* mu * g)) + v/3.6
  return d;
}
​
function speed(d, mu) {
  const a = 1 / (25.92 * mu * g);
  const b = 1 / 3.6;
  const c = -d;
  
  const discriminant = Math.sqrt(b * b - 4 * a * c);
  const v = (-b + discriminant) / (2 * a);
  return v;
}