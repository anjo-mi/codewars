function myParseInt(str) {
  return str.trim().includes('.') 
            ? NaN 
            : +(str.trim())
}
​