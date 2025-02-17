 
function remove (str) {
  let i = 0;
  while(str.endsWith('!')){
    str = str.slice(0,-1);
    i++;
  }
  return str.replaceAll('!', '') + '!'.repeat(i);
}