 
function myParseInt(str) {
  if (!+str) return NaN
  return str.trim().includes('.') 
            ? NaN 
            : Number(str.trim())
}
​