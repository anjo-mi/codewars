 
function myParseInt(str) {
  return str.trim().includes('.') 
            ? NaN 
            : parseInt(str.trim(),10)
}