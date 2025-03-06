 
const cache = (fn) => {
  let map = new Map();
  return function(...args){
    const key = JSON.stringify(args);
    
    if (map.has(key)){
      return map.get(key)
    }
    
    const result = fn.apply(this, args);
    map.set(key, result);
    return result;
  }
}