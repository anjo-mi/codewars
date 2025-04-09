 
function michaelPays(c) {
  if (c < 5) return +((c).toFixed(2));
  if (c >= 30) return +((c - 10).toFixed(2));
  return +((c - (c/3)).toFixed(2));
}