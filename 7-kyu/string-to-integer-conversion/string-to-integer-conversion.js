function myParseInt(str) {
  const trim = str.trim();
  
  return trim.includes('.') || trim.includes('x')
          ? NaN
        :!Number.isInteger(Number(trim)) 
          ? NaN 
          : parseInt(trim,10)
}