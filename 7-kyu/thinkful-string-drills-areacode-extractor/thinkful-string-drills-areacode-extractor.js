 
function areaCode(text) {
  const open  = text.indexOf('(');
  const close = text.indexOf(')');
  
  return text.slice(open + 1, close);
}