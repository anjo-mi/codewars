 
const isUpper = (char) => char === char.toUpperCase();
​
function coolString(s) {
  s = s.replaceAll(' ','');
  const arab = new Set('0123456789');
  if (s.length <= 1) return s.length && !arab.has(s[0]) ? true : false;
  for (let i = 0 ; i < s.length ; i++) {
    const curr = s[i];
    const next = s[i+ 1];
    if (arab.has(curr) || arab.has(next)) return false;
    if ( ( next && isUpper(curr) && isUpper(next) ) || ( next && !isUpper(curr) && !isUpper(next) ) ) return false;
  }
  return true;
}