function nameInStr(str, name){
  str = str.toLowerCase();
  name = name.toLowerCase();
  let i = 0;
  for (let char of name){
    const index = str.indexOf(char);
    if (index === -1) return false
    else {
      str = str.slice(index + 1);
    }
  }
  return true
}