 
function cache(func) {
  const obj = {};
  return (...args) =>{
    const key = JSON.stringify(...args);
    if (!(key in obj)){
      const result = func(...args)
      obj[key] = result;
    }
    return obj[key];
  }
}