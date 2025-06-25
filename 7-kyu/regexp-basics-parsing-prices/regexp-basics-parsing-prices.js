 
String.prototype.toCents=function(){
  if (this[0] !== '$') return null;
  if (!this.includes('.')) return null;
  if (this.split('.')[1].length !== 2 || this.split('.')[0].length < 2) return null;
  return Math.round(parseFloat(this.slice(1),10) * 100);
}