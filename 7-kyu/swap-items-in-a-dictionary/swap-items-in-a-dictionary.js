 
function switchDict(dic) {
  const obj = {};
  for (const key in dic){
    const nkey = dic[key];
    if (!(nkey in obj)){
      obj[nkey] = [key]
    }else obj[nkey].push(key)
  }
  return obj;
}