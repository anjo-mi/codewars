 
function charConcat(str, s = '', n = 1){
  if (str.length <= 1) return '';
  s = str[0] + str[str.length - 1] + n
  return s + charConcat(str.slice(1,-1), s, ++n)
}