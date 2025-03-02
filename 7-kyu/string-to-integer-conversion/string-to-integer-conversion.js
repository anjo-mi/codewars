function myParseInt(str) {
  console.log(str)
  return str.trim().includes('.') 
            ? NaN 
            : Number(str.trim())
}
​