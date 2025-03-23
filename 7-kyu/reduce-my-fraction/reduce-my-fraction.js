 
function reduce(fr) {
  const gcd = (a,b) => b ? (gcd(b, a%b)) : a;
  const greatestCommon = gcd(fr[0], fr[1]);
  return fr.map(num => num / greatestCommon);
}