 
Array.prototype.average = function(){
  return this.reduce((a,el) => a + (Array.isArray(el) ? el.average() : parseFloat(el)), 0) / this.length;
}