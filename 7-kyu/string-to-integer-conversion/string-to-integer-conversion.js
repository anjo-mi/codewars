function myParseInt(str) {
  return str.trim().includes('.') 
            ? NaN 
            : Number(str.trim())
}
​