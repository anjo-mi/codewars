function sortDict(dict) {
  const arr = [];
  for (const key in dict){
    arr.push([ !isNaN(key) ? +key : key, dict[key]])
  }
  return arr.sort((a,b) => b[1] - a[1])
}