 
function invertHash(hash) {
  const obj = {};
  for (const key in hash) obj[ hash[key] ] = key;
  return obj;
}