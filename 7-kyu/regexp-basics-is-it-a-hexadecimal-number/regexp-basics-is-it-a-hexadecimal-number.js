 
String.prototype.hexNumber = function() {
  const s = this.startsWith('0x') ? this.slice(2) : this;
  const valid = new Set('0123456789abcdef');
  for (const char of s) if (!valid.has(char.toLowerCase())) return false;
  return Boolean(s.length);
};