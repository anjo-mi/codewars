 
function F(n) {
  if (!n) return 1;
  return n - M(F(n-1))
}
​
function M(n) {
  if (!n) return 0;
  return n - F(M(n-1))
}