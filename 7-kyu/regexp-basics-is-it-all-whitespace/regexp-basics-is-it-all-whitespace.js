 
String.prototype.whitespace=function(){
  const escapes = new Set(['\n','\t','\r']);
  const counter = {};
  for (const char of this){
    counter[char] = (counter[char] || 0) + 1;
  }
  for (const char in counter){
    if (char !== ' ' && !escapes.has(char)) return false;
  }
  return true;
}