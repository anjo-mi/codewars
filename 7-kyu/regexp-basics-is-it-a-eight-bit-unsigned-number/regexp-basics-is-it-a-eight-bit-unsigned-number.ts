 
String.prototype.eightBitNumber = function(): boolean {
  const v = this.valueOf();
  if (v.includes(' ') || v.includes('\n') || v.includes('/n')) return false;
  if (v.length > 1 && v[0] === '0') return false;
  if (v[0] === '-' || v[0] === '+') return false;
  const val = parseInt(v,10);
  if (isNaN(val)) return false;
  if (val < 0 || val > 255) return false;
  return true;
}