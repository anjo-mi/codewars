function deepCount(a){
  return a.reduce((a,el) => a + (Array.isArray(el) ? deepCount(el) : 0), a.length)
}