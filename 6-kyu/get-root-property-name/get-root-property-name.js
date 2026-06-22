 
const findVal = (r,val) => {
  const curr = r;
  if (Array.isArray(r)) if (r.includes(val)) return true;
  for (const child in r){
    if (findVal(r[child],val)) return true;
  }
  return false;
}
​
function getRootProperty(object, val) {
  for (const child in object){
    if (findVal(object[child],val)) return child;
  }
  return null;
}