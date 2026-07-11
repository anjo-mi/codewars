 
var child = function(b1, b2) {
  const diffs = b1.split('').reduce((a,el,i) => a = el === b2[i] ? a : ++a, 0);
  return diffs > 0 && diffs < 3;
}
​
var grandchild = function(b1, b2) {
  const diffs = b1.split('').reduce((a,el,i) => a = el === b2[i] ? a : ++a, 0);
  if (diffs === 1) return b1.length > 1;
  return diffs >= 0 && diffs < 5;
}
​