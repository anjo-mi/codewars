 
String.prototype.ipv4Address=function(){
  const numerals = '0123456789';
  const nums = this.split('.');
  if (nums.length !== 4) return false;
  if ( nums.some( el =>!el.length || el.length > 3 || ( el.length > 1 && el.startsWith('0') ) ) ) return false;
  if ( nums.some(n => n.split('').some(dig => !numerals.includes(dig)) ) ) return false;
  if (nums.some(n => +n < 0 || +n > 255)) return false;
  return true;
}