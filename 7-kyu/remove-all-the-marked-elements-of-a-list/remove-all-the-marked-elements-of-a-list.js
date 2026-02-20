 
Array.prototype.remove_ = function(ints, vals){
  vals = new Set(vals);
  return ints.filter(num => !vals.has(num));
}