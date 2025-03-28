function hasSubpattern(str){
  if (str.length <= 1) return false;
  const double = str + str;
  return double.indexOf(str,1) < str.length;
}