 
String.prototype.isLetter = function() {
  if (this.toLowerCase() === '' || this.length > 1) return false;
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return alpha.includes(this.toLowerCase());
}