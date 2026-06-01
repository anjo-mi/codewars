 
function dadFilter(str){
  while (str.includes(',,')) str = str.replaceAll(',,',',');
  str = str.trim();
  while (str[str.length-1] === ',') str = str.slice(0,-1);
  return str;
}
​