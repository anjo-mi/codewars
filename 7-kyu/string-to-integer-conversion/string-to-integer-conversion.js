function myParseInt(str) {
  const trim = str.trim();
  
  return trim.includes('.')
          ? NaN
        :!Number.isInteger(Number(trim)) 
          ? NaN 
          : parseInt(trim,10)
}